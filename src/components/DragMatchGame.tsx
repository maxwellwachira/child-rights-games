'use client';

import { Fragment, useState, useMemo, useRef, useEffect, useReducer } from 'react';
import type { DragMatchItem } from '@/types';
import { playCorrectSound, playWrongSound } from '@/utils/sounds';
import styles from './DragMatchGame.module.css';

interface Props {
  title: string;
  subtitle?: string;
  items: DragMatchItem[];
  variant?: 'text' | 'image' | 'peach';
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function DescBody({ item }: { item: DragMatchItem }) {
  if (item.bullets && item.bullets.length > 0) {
    return (
      <div className={styles.descContent}>
        <p className={styles.descIntro}>{item.description}</p>
        <ul className={styles.descBullets}>
          {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    );
  }
  return <>{item.description}</>;
}

export default function DragMatchGame({ title, subtitle, items, variant = 'text' }: Props) {
  const isImageVariant = variant === 'image';
  const isPeachVariant = variant === 'peach';

  const displayTerms = useMemo(
    () => (isImageVariant ? [...items].sort((a, b) => a.id - b.id) : shuffle(items)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items]
  );
  const shuffledDescs = useMemo(() => shuffle(items), [items]);

  const [selectedTerm, setSelectedTerm] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [wrongPair, setWrongPair] = useState<[number, number] | null>(null);
  const [checked, setChecked] = useState(false);

  const lineContainerRef = useRef<HTMLDivElement>(null);
  const termRefs = useRef<Map<number, HTMLButtonElement>>(new Map());
  const descRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const [, forceUpdate] = useReducer((n: number) => n + 1, 0);

  useEffect(() => {
    window.addEventListener('resize', forceUpdate);
    return () => window.removeEventListener('resize', forceUpdate);
  }, []);

  function getLineData(termId: number, descId: number) {
    const container = lineContainerRef.current;
    const termEl = termRefs.current.get(termId);
    const descEl = descRefs.current.get(descId);
    if (!container || !termEl || !descEl) return null;

    const cr = container.getBoundingClientRect();
    const tr = termEl.getBoundingClientRect();
    const dr = descEl.getBoundingClientRect();

    const x1 = tr.right - cr.left;
    const y1 = tr.top + tr.height / 2 - cr.top;
    const x2 = dr.left - cr.left;
    const y2 = dr.top + dr.height / 2 - cr.top;
    const cp = (x2 - x1) * 0.45;

    return {
      path: `M ${x1} ${y1} C ${x1 + cp} ${y1} ${x2 - cp} ${y2} ${x2} ${y2}`,
      x1, y1, x2, y2,
    };
  }

  const matchedTermIds = new Set(Object.keys(matches).map(Number));
  const matchedDescIds = new Set(Object.values(matches).map(Number));

  function handleTermClick(id: number) {
    if (matchedTermIds.has(id) || wrongPair) return;
    setSelectedTerm(id === selectedTerm ? null : id);
  }

  function handleDescClick(id: number) {
    if (matchedDescIds.has(id) || wrongPair) return;
    if (selectedTerm === null) return;

    const termItem = items.find((x) => x.id === selectedTerm)!;
    const descItem = items.find((x) => x.id === id)!;

    if (termItem.id === descItem.id) {
      playCorrectSound();
      setMatches((m) => ({ ...m, [selectedTerm]: id }));
      setSelectedTerm(null);
      setWrongPair(null);
    } else {
      playWrongSound();
      setWrongPair([selectedTerm, id]);
      setTimeout(() => {
        setWrongPair(null);
        setSelectedTerm(null);
      }, 800);
    }
  }

  const allMatched = matchedTermIds.size === items.length;

  function handleRestart() {
    setMatches({});
    setSelectedTerm(null);
    setWrongPair(null);
    setChecked(false);
  }

  if (allMatched && checked) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.complete}>
          <div className={styles.completeTitle}>All matched!</div>
          <div className={styles.completeScore}>
            You matched all {items.length} pairs correctly.
          </div>
          <button className={styles.restartBtn} onClick={handleRestart}>
            Play again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>{title}</h1>
      {subtitle && <p className={styles.subheading}>{subtitle}</p>}

      {isImageVariant ? (
        <div className={`${styles.layout} ${styles.layoutImage}`}>
          {displayTerms.map((termItem, index) => {
            const descItem = shuffledDescs[index];

            const termIsMatched = matchedTermIds.has(termItem.id);
            const termIsSelected = selectedTerm === termItem.id;
            const termIsWrong = wrongPair?.[0] === termItem.id;

            let tileCls = styles.imageTile;
            if (termIsMatched) tileCls = `${styles.imageTile} ${styles.imageTileMatched}`;
            else if (termIsWrong) tileCls = `${styles.imageTile} ${styles.imageTileWrong}`;
            else if (termIsSelected) tileCls = `${styles.imageTile} ${styles.imageTileSelected}`;

            const descIsMatched = matchedDescIds.has(descItem.id);
            const descIsWrong = wrongPair?.[1] === descItem.id;

            let descCls = styles.descBeige;
            if (descIsMatched) descCls = `${styles.descBeige} ${styles.descMatched}`;
            else if (descIsWrong) descCls = `${styles.descBeige} ${styles.descWrong}`;

            return (
              <Fragment key={termItem.id}>
                <div
                  className={tileCls}
                  onClick={() => !termIsMatched && handleTermClick(termItem.id)}
                  role="button"
                  tabIndex={termIsMatched ? -1 : 0}
                  onKeyDown={(e) =>
                    e.key === 'Enter' && !termIsMatched && handleTermClick(termItem.id)
                  }
                >
                  <div className={styles.tileImgArea}>
                    {termItem.imageSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={termItem.imageSrc}
                        alt={termItem.term}
                        className={styles.tileImg}
                      />
                    ) : (
                      <div className={styles.tilePlaceholder}>
                        <span className={styles.tilePlaceholderText}>{termItem.term}</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.tileLabel}>{termItem.term}</div>
                </div>

                <div
                  className={descCls}
                  onClick={() => !descIsMatched && handleDescClick(descItem.id)}
                  role="button"
                  tabIndex={descIsMatched ? -1 : 0}
                  onKeyDown={(e) =>
                    e.key === 'Enter' && !descIsMatched && handleDescClick(descItem.id)
                  }
                >
                  <DescBody item={descItem} />
                </div>
              </Fragment>
            );
          })}
        </div>
      ) : (
        <div ref={lineContainerRef} className={styles.lineContainer}>
          <div className={styles.layout}>
            {displayTerms.map((termItem, index) => {
              const descItem = shuffledDescs[index];

              const termIsMatched = matchedTermIds.has(termItem.id);
              const termIsSelected = selectedTerm === termItem.id;
              const termIsWrong = wrongPair?.[0] === termItem.id;

              const baseTermCls = isPeachVariant ? styles.termPeach : styles.termBtn;
              let termCls = baseTermCls;
              if (termIsMatched) termCls = `${baseTermCls} ${styles.termMatched}`;
              else if (termIsWrong) termCls = `${baseTermCls} ${styles.termWrong}`;
              else if (termIsSelected) termCls = `${baseTermCls} ${styles.termSelected}`;

              const descIsMatched = matchedDescIds.has(descItem.id);
              const descIsWrong = wrongPair?.[1] === descItem.id;

              const baseDescCls = isPeachVariant ? styles.descPeach : styles.descCard;
              let descCls = baseDescCls;
              if (descIsMatched) descCls = `${baseDescCls} ${styles.descMatched}`;
              else if (descIsWrong) descCls = `${baseDescCls} ${styles.descWrong}`;

              return (
                <Fragment key={termItem.id}>
                  <button
                    ref={(el) => { if (el) termRefs.current.set(termItem.id, el); else termRefs.current.delete(termItem.id); }}
                    className={termCls}
                    onClick={() => handleTermClick(termItem.id)}
                    disabled={termIsMatched}
                  >
                    {termItem.term}
                  </button>
                  <div
                    ref={(el) => { if (el) descRefs.current.set(descItem.id, el); else descRefs.current.delete(descItem.id); }}
                    className={descCls}
                    onClick={() => !descIsMatched && handleDescClick(descItem.id)}
                    role="button"
                    tabIndex={descIsMatched ? -1 : 0}
                    onKeyDown={(e) =>
                      e.key === 'Enter' && !descIsMatched && handleDescClick(descItem.id)
                    }
                  >
                    {descItem.description}
                  </div>
                </Fragment>
              );
            })}
          </div>

          <svg className={styles.lineSvg} aria-hidden="true">
            {Object.entries(matches).map(([termIdStr, descId]) => {
              const data = getLineData(Number(termIdStr), descId);
              if (!data) return null;
              const { path, x1, y1, x2, y2 } = data;
              return (
                <g key={termIdStr}>
                  <path
                    className={styles.matchLine}
                    d={path}
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx={x1} cy={y1} r="5" fill="#22c55e" className={styles.matchDot} />
                  <circle cx={x2} cy={y2} r="5" fill="#22c55e" className={styles.matchDot} />
                </g>
              );
            })}
          </svg>
        </div>
      )}

      <div className={styles.actions}>
        <p className={styles.hint}>
          {allMatched
            ? 'All pairs matched!'
            : 'Click a term, then click its matching description.'}
        </p>
        {allMatched && !checked && (
          <button className={styles.checkBtn} onClick={() => setChecked(true)}>
            See results
          </button>
        )}
      </div>
    </div>
  );
}
