'use client';

import { Fragment, useState, useMemo } from 'react';
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
        <div className={styles.layout}>
          {/* Terms column */}
          <div className={styles.column}>
            {displayTerms.map((item) => {
              const isMatched = matchedTermIds.has(item.id);
              const isSelected = selectedTerm === item.id;
              const isWrong = wrongPair?.[0] === item.id;

              const baseTermCls = isPeachVariant ? styles.termPeach : styles.termBtn;
              let termCls = baseTermCls;
              if (isMatched) termCls = `${baseTermCls} ${styles.termMatched}`;
              else if (isWrong) termCls = `${baseTermCls} ${styles.termWrong}`;
              else if (isSelected) termCls = `${baseTermCls} ${styles.termSelected}`;

              return (
                <button
                  key={item.id}
                  className={termCls}
                  onClick={() => handleTermClick(item.id)}
                  disabled={isMatched}
                >
                  {item.term}
                </button>
              );
            })}
          </div>

          {/* Descriptions column */}
          <div className={styles.column}>
            {shuffledDescs.map((item) => {
              const isMatched = matchedDescIds.has(item.id);
              const isWrong = wrongPair?.[1] === item.id;

              const baseDescCls = isPeachVariant ? styles.descPeach : styles.descCard;
              let descCls = baseDescCls;
              if (isMatched) descCls = `${baseDescCls} ${styles.descMatched}`;
              else if (isWrong) descCls = `${baseDescCls} ${styles.descWrong}`;

              return (
                <div
                  key={item.id}
                  className={descCls}
                  onClick={() => !isMatched && handleDescClick(item.id)}
                  role="button"
                  tabIndex={isMatched ? -1 : 0}
                  onKeyDown={(e) =>
                    e.key === 'Enter' && !isMatched && handleDescClick(item.id)
                  }
                >
                  {item.description}
                </div>
              );
            })}
          </div>
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
