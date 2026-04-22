'use client';

import { useState, useMemo } from 'react';
import type { DragMatchItem } from '@/types';
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

export default function DragMatchGame({ title, subtitle, items, variant = 'text' }: Props) {
  const isImageVariant = variant === 'image';
  const isPeachVariant = variant === 'peach';

  // Image variant: terms in original order; text/peach: shuffled
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

    if (termItem.description === descItem.description) {
      setMatches((m) => ({ ...m, [selectedTerm]: id }));
      setSelectedTerm(null);
      setWrongPair(null);
    } else {
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

      <div
        className={`${styles.layout} ${isImageVariant ? styles.layoutImage : ''}`}
      >
        {/* Terms column */}
        <div className={styles.column}>
          {displayTerms.map((item) => {
            const isMatched = matchedTermIds.has(item.id);
            const isSelected = selectedTerm === item.id;
            const isWrong = wrongPair?.[0] === item.id;

            if (isImageVariant) {
              let tileCls = styles.imageTile;
              if (isMatched) tileCls = `${styles.imageTile} ${styles.imageTileMatched}`;
              else if (isWrong) tileCls = `${styles.imageTile} ${styles.imageTileWrong}`;
              else if (isSelected) tileCls = `${styles.imageTile} ${styles.imageTileSelected}`;

              return (
                <div
                  key={item.id}
                  className={tileCls}
                  onClick={() => !isMatched && handleTermClick(item.id)}
                  role="button"
                  tabIndex={isMatched ? -1 : 0}
                  onKeyDown={(e) =>
                    e.key === 'Enter' && !isMatched && handleTermClick(item.id)
                  }
                >
                  <div className={styles.tileImgArea}>
                    {item.imageSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.imageSrc}
                        alt={item.term}
                        className={styles.tileImg}
                      />
                    ) : (
                      <div className={styles.tilePlaceholder}>
                        <span className={styles.tilePlaceholderText}>{item.term}</span>
                      </div>
                    )}
                  </div>
                  <div className={styles.tileLabel}>{item.term}</div>
                </div>
              );
            }

            // Text or peach variant
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

            const baseDescCls = isPeachVariant
              ? styles.descPeach
              : isImageVariant
              ? styles.descBeige
              : styles.descCard;

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
