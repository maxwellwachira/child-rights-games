'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { FlipCardData } from '@/types';
import { playCorrectSound, playWrongSound } from '@/utils/sounds';
import styles from './FlipCardGame.module.css';

type Phase = 'front' | 'question' | 'explanation';

export default function FlipCardGame({ cards }: { cards: FlipCardData[] }) {
  const [current, setCurrent] = useState(0);
  const [phase, setPhase] = useState<Phase>('front');
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);
  const [correct, setCorrect] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [completed, setCompleted] = useState<Set<number>>(new Set());

  const card = cards[current];
  const isFlipped = phase === 'question' || phase === 'explanation';

  function navigateTo(index: number) {
    if (index === current) return;
    setCurrent(index);
    setPhase('front');
    setCorrect(null);
    setWrongFlash(null);
  }

  function handleChestClick() {
    if (phase === 'front') setPhase('question');
  }

  function handleFlipLink() {
    if (phase === 'explanation') {
      goToNext();
    } else if (correct !== null) {
      setPhase('explanation');
      setCompleted((prev) => new Set([...prev, current]));
    } else {
      setPhase('front');
    }
  }

  function handleSelect(opt: string) {
    if (correct !== null || wrongFlash !== null) return;
    if (opt === card.correctAnswer) {
      playCorrectSound();
      setCorrect(opt);
      if (!completed.has(current)) setScore((s) => s + 1);
    } else {
      playWrongSound();
      setWrongFlash(opt);
      setTimeout(() => setWrongFlash(null), 800);
    }
  }

  function goToNext() {
    if (current + 1 >= cards.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setPhase('front');
      setCorrect(null);
      setWrongFlash(null);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setPhase('front');
    setCorrect(null);
    setWrongFlash(null);
    setScore(0);
    setDone(false);
    setCompleted(new Set());
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

        <div className={styles.filmstrip}>
          {cards.map((c, i) => (
            <button
              key={c.id}
              className={`${styles.thumb} ${i === current ? styles.thumbActive : ''} ${completed.has(i) ? styles.thumbDone : ''}`}
              onClick={() => navigateTo(i)}
              aria-label={`Card ${i + 1}`}
            />
          ))}
        </div>

        <div className={styles.scene}>
          <div className={`${styles.card} ${isFlipped ? styles.cardFlipped : ''}`}>
            {/* FRONT FACE */}
            <div className={`${styles.face} ${styles.front}`}>
              <div className={styles.imgWrapper}>
                {card.imageSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={card.imageSrc} alt={card.imageAlt} className={styles.cardImg} />
                ) : (
                  <div className={styles.imgPlaceholder}>
                    <span>{card.imageAlt}</span>
                  </div>
                )}
                <button
                  className={styles.chestBtn}
                  onClick={handleChestClick}
                  aria-label="Click the treasure chest to reveal the right"
                >
                  <Image
                    src="/game_assets/treasure_box.png"
                    alt=""
                    width={96}
                    height={67}
                    className={styles.chestImg}
                    aria-hidden
                  />
                </button>
              </div>
            </div>

            {/* BACK FACE */}
            <div className={`${styles.face} ${styles.back}`}>
              {phase === 'explanation' ? (
                <>
                  <div className={styles.explanationTitle}>{card.correctAnswer}</div>
                  <div className={styles.explanationBody}>{card.explanation}</div>
                  <button className={styles.flipLink} onClick={handleFlipLink}>
                    Click here to flip card
                  </button>
                </>
              ) : (
                <>
                  <div className={styles.question}>{card.question}</div>
                  <div className={styles.options}>
                    {card.options.map((opt) => {
                      let cls = styles.optionBtn;
                      if (correct === opt) cls = `${styles.optionBtn} ${styles.optionCorrect}`;
                      else if (wrongFlash === opt) cls = `${styles.optionBtn} ${styles.optionWrong}`;
                      return (
                        <button
                          key={opt}
                          className={cls}
                          onClick={() => handleSelect(opt)}
                          disabled={correct !== null || wrongFlash !== null}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {correct !== null && <div className={styles.correctFeedback}>Correct! ✨</div>}
                  {wrongFlash !== null && <div className={styles.wrongFeedback}>Try again</div>}
                  <button className={styles.flipLink} onClick={handleFlipLink}>
                    Click here to flip card
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className={styles.stats}>
          <span>Card <strong>{current + 1}</strong> of {cards.length}</span>
          <span>Score: <strong>{score}</strong></span>
        </div>
      </div>
    </div>
  );
}
