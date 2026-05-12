'use client';

import { useState } from 'react';
import type { SafeUnsafeScenario } from '@/types';
import { playCorrectSound, playWrongSound } from '@/utils/sounds';
import ProgressBar from './ProgressBar';
import styles from './SafeOrUnsafeGame.module.css';

interface Props {
  title: string;
  subtitle?: string;
  scenarios: SafeUnsafeScenario[];
}

export default function SafeOrUnsafeGame({ title, subtitle, scenarios }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<'safe' | 'unsafe' | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const item = scenarios[current];
  const wasCorrect = selected === item.answer;

  function handleSelect(choice: 'safe' | 'unsafe') {
    if (selected !== null) return;
    setSelected(choice);
    if (choice === item.answer) {
      playCorrectSound();
      setScore((s) => s + 1);
    } else {
      playWrongSound();
    }
  }

  function handleNext() {
    if (current + 1 >= scenarios.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.complete}>
          <div className={styles.completeTitle}>All done!</div>
          <div className={styles.completeScore}>
            You scored {score} out of {scenarios.length}.
          </div>
          <button className={styles.restartBtn} onClick={handleRestart}>
            Play again
          </button>
        </div>
      </div>
    );
  }

  const isSelectedSafe = selected === 'safe';
  const isSelectedUnsafe = selected === 'unsafe';

  const safeBtnCls = [
    styles.btn,
    styles.safeBtn,
    isSelectedSafe ? (wasCorrect ? styles.selectedCorrect : styles.selectedWrong) : '',
  ].filter(Boolean).join(' ');

  const unsafeBtnCls = [
    styles.btn,
    styles.unsafeBtn,
    isSelectedUnsafe ? (wasCorrect ? styles.selectedCorrect : styles.selectedWrong) : '',
  ].filter(Boolean).join(' ');

  const explCls = `${styles.explanation} ${
    selected === null ? '' : wasCorrect ? styles.correct : styles.incorrect
  }`;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>{title}</h1>
      {subtitle && <p className={styles.subheading}>{subtitle}</p>}

      <div className={styles.categoryRow}>
        <span className={styles.categoryPill}>{item.category}</span>
      </div>

      <div className={styles.card}>
        <div className={styles.imageWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.imageSrc} alt={item.imageAlt} className={styles.image} />
        </div>
        <div className={styles.contentSide}>
          <p className={styles.prompt}>{item.prompt}</p>

          {selected !== null && (
            <div className={explCls}>
              <span className={styles.verdict}>
                {item.answer === 'safe' ? 'Safe:' : 'Unsafe:'}
              </span>
              {item.explanation}
            </div>
          )}

          <div className={styles.actions}>
            <button
              className={safeBtnCls}
              onClick={() => handleSelect('safe')}
              disabled={selected !== null}
            >
              Safe
            </button>
            <button
              className={unsafeBtnCls}
              onClick={() => handleSelect('unsafe')}
              disabled={selected !== null}
            >
              Unsafe
            </button>
          </div>
        </div>
      </div>

      {selected !== null && (
        <div className={styles.nextRow}>
          <button className={styles.nextBtn} onClick={handleNext}>
            {current + 1 >= scenarios.length ? 'Finish' : 'Next →'}
          </button>
        </div>
      )}

      <div className={styles.progressWrap}>
        <ProgressBar current={current + (selected ? 1 : 0)} total={scenarios.length} />
      </div>
    </div>
  );
}
