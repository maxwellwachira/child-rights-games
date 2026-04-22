'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { FlipCardData } from '@/types';
import { playCorrectSound, playWrongSound } from '@/utils/sounds';
import styles from './FlipCardGame.module.css';

type Phase = 'front' | 'question' | 'explanation';

interface CardState {
  phase: Phase;
  correct: string | null;
  wrongFlash: string | null;
}

const PAIR = 2;

export default function FlipCardGame({ cards }: { cards: FlipCardData[] }) {
  const totalPairs = Math.ceil(cards.length / PAIR);

  const [states, setStates] = useState<CardState[]>(() =>
    cards.map(() => ({ phase: 'front', correct: null, wrongFlash: null }))
  );
  const [pairIdx, setPairIdx] = useState(0);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const leftIdx = pairIdx * PAIR;
  const rightIdx = pairIdx * PAIR + 1;
  const hasRight = rightIdx < cards.length;
  const pairDone =
    completed.has(leftIdx) && (!hasRight || completed.has(rightIdx));

  function patch(idx: number, update: Partial<CardState>) {
    setStates((prev) =>
      prev.map((s, i) => (i === idx ? { ...s, ...update } : s))
    );
  }

  function handleChestClick(idx: number) {
    if (states[idx].phase === 'front') patch(idx, { phase: 'question' });
  }

  function handleSelect(idx: number, opt: string) {
    const s = states[idx];
    if (s.correct !== null || s.wrongFlash !== null) return;
    if (opt === cards[idx].correctAnswer) {
      playCorrectSound();
      patch(idx, { correct: opt });
      if (!completed.has(idx)) setScore((n) => n + 1);
    } else {
      playWrongSound();
      patch(idx, { wrongFlash: opt });
      setTimeout(() => patch(idx, { wrongFlash: null }), 800);
    }
  }

  function handleFlipLink(idx: number) {
    const s = states[idx];
    if (s.phase === 'explanation') {
      setCompleted((prev) => new Set([...prev, idx]));
    } else if (s.correct !== null) {
      patch(idx, { phase: 'explanation' });
      setCompleted((prev) => new Set([...prev, idx]));
    } else {
      patch(idx, { phase: 'front' });
    }
  }

  function handleNext() {
    if (pairIdx + 1 >= totalPairs) {
      setDone(true);
    } else {
      setPairIdx((p) => p + 1);
    }
  }

  function handleRestart() {
    setStates(cards.map(() => ({ phase: 'front', correct: null, wrongFlash: null })));
    setPairIdx(0);
    setCompleted(new Set());
    setScore(0);
    setDone(false);
  }

  if (done) {
    return (
      <div className={styles.page}>
        <h1 className={styles.gameTitle}>Game: Treasure hunt!</h1>
        <div className={styles.parchment}>
          <p className={styles.congratsTitle}>Congratulations!</p>
          <p className={styles.congratsMsg}>You have completed the treasure hunt</p>
          <div className={styles.completionGrid}>
            {cards.map((c) => (
              <div key={c.id} className={styles.completionCard}>
                {c.imageSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={c.imageSrc} alt={c.imageAlt} className={styles.completionImg} />
                ) : (
                  <div className={styles.completionPlaceholder}>{c.imageAlt}</div>
                )}
              </div>
            ))}
          </div>
          <button className={styles.restartBtn} onClick={handleRestart}>
            Play again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.gameTitle}>Game: Treasure hunt!</h1>
      <div className={styles.parchment}>
        <p className={styles.subtitle}>
          Can you identify all of the child rights?&nbsp; Click on the treasure chest to play
        </p>

        {/* Pair progress dots */}
        <div className={styles.dots}>
          {Array.from({ length: totalPairs }).map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === pairIdx ? styles.dotActive : ''} ${i * PAIR < leftIdx ? styles.dotDone : ''}`}
            />
          ))}
        </div>

        {/* Two-card grid */}
        <div className={styles.pairGrid}>
          {[leftIdx, rightIdx].map((idx) => {
            if (idx >= cards.length) return null;
            const card = cards[idx];
            const s = states[idx];
            const isFlipped = s.phase === 'question' || s.phase === 'explanation';
            const isSolo = !hasRight;

            return (
              <div key={card.id} className={`${styles.cardSlot} ${isSolo ? styles.cardSlotSolo : ''}`}>
                <div className={styles.scene}>
                  <div className={`${styles.card} ${isFlipped ? styles.cardFlipped : ''}`}>

                    {/* FRONT */}
                    <div className={`${styles.face} ${styles.front}`}>
                      <div className={styles.imgWrapper}>
                        {card.imageSrc ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={card.imageSrc} alt={card.imageAlt} className={styles.cardImg} />
                        ) : (
                          <div className={styles.imgPlaceholder}>{card.imageAlt}</div>
                        )}
                        <button
                          className={styles.chestBtn}
                          onClick={() => handleChestClick(idx)}
                          aria-label="Click the treasure chest to reveal the right"
                        >
                          <Image
                            src="/game_assets/treasure_box.png"
                            alt=""
                            width={38}
                            height={27}
                            className={styles.chestImg}
                            aria-hidden
                          />
                        </button>
                      </div>
                    </div>

                    {/* BACK */}
                    <div className={`${styles.face} ${styles.back}`}>
                      {s.phase === 'explanation' ? (
                        <>
                          <div className={styles.explanationTitle}>{card.correctAnswer}</div>
                          <div className={styles.explanationBody}>{card.explanation}</div>
                          <button className={styles.flipLink} onClick={() => handleFlipLink(idx)}>
                            Click here to flip card
                          </button>
                        </>
                      ) : (
                        <>
                          <div className={styles.question}>{card.question}</div>
                          <div className={styles.options}>
                            {card.options.map((opt) => {
                              let cls = styles.optionBtn;
                              if (s.correct === opt) cls = `${styles.optionBtn} ${styles.optionCorrect}`;
                              else if (s.wrongFlash === opt) cls = `${styles.optionBtn} ${styles.optionWrong}`;
                              return (
                                <button
                                  key={opt}
                                  className={cls}
                                  onClick={() => handleSelect(idx, opt)}
                                  disabled={s.correct !== null || s.wrongFlash !== null}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>
                          {s.correct !== null && <div className={styles.correctFeedback}>Correct! ✨</div>}
                          {s.wrongFlash !== null && <div className={styles.wrongFeedback}>Try again</div>}
                          <button className={styles.flipLink} onClick={() => handleFlipLink(idx)}>
                            Click here to flip card
                          </button>
                        </>
                      )}
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <span className={styles.scoreText}>Score: <strong>{score}</strong></span>
          {pairDone && (
            <button className={styles.nextBtn} onClick={handleNext}>
              {pairIdx + 1 >= totalPairs ? 'See results' : 'Next →'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
