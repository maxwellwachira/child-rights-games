'use client';

import { useState } from 'react';
import type { MatchItem, QuizQuestion } from '@/types';
import { playCorrectSound, playWrongSound } from '@/utils/sounds';
import ProgressBar from './ProgressBar';
import FeedbackBanner from './FeedbackBanner';
import styles from './MultipleChoiceGame.module.css';

type Item = MatchItem | QuizQuestion;

interface Props {
  title: string;
  subtitle?: string;
  items: Item[];
  columns?: 1 | 2 | 3;
  showLetterBadge?: boolean;
}

const LABELS = ['A', 'B', 'C', 'D', 'E', 'F'];

function getQuestion(item: Item): string {
  if ('description' in item) return item.description;
  return item.question;
}

export default function MultipleChoiceGame({
  title,
  subtitle,
  items,
  columns = 2,
  showLetterBadge = false,
}: Props) {
  const [current, setCurrent] = useState(0);
  const [correct, setCorrect] = useState<string | null>(null);
  const [wrongFlash, setWrongFlash] = useState<string | null>(null);
  const [hadWrongAttempt, setHadWrongAttempt] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const item = items[current];

  function handleSelect(option: string) {
    if (correct !== null) return;
    if (option === item.correctAnswer) {
      playCorrectSound();
      setCorrect(option);
      setWrongFlash(null);
      if (!hadWrongAttempt) setScore((s) => s + 1);
    } else {
      playWrongSound();
      setHadWrongAttempt(true);
      setWrongFlash(option);
    }
  }

  function handleNext() {
    if (current + 1 >= items.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setCorrect(null);
      setWrongFlash(null);
      setHadWrongAttempt(false);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setCorrect(null);
    setWrongFlash(null);
    setHadWrongAttempt(false);
    setScore(0);
    setDone(false);
  }

  if (done) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.complete}>
          <div className={styles.completeTitle}>Well done!</div>
          <div className={styles.completeScore}>
            You scored {score} out of {items.length}
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
      <ProgressBar current={current} total={items.length} />

      <p className={styles.question}>
        <span className={styles.questionNumber}>{current + 1}.</span>
        {getQuestion(item)}
      </p>

      <div
        className={styles.options}
        style={{
          gridTemplateColumns:
            columns === 1 ? '1fr' : columns === 3 ? '1fr 1fr 1fr' : '1fr 1fr',
        }}
      >
        {item.options.map((opt, i) => {
          const isAnswerCorrect = opt === item.correctAnswer;
          const isWrong = wrongFlash === opt;

          let optCls = styles.option;
          let indicatorCls = showLetterBadge ? styles.badge : styles.circle;

          if (correct !== null && isAnswerCorrect) {
            optCls = `${styles.option} ${styles.optionCorrect}`;
            indicatorCls = showLetterBadge
              ? `${styles.badge} ${styles.badgeCorrect}`
              : `${styles.circle} ${styles.circleCorrect}`;
          } else if (isWrong) {
            optCls = `${styles.option} ${styles.optionWrong}`;
            indicatorCls = showLetterBadge
              ? `${styles.badge} ${styles.badgeWrong}`
              : `${styles.circle} ${styles.circleWrong}`;
          }

          return (
            <button
              key={opt}
              className={optCls}
              onClick={() => handleSelect(opt)}
              disabled={correct !== null}
            >
              <span className={indicatorCls} aria-hidden="true">
                {showLetterBadge ? LABELS[i] : ''}
              </span>
              <span className={styles.optionText}>{opt}</span>
            </button>
          );
        })}
      </div>

      {correct !== null && (
        <FeedbackBanner
          kind="correct"
          onNext={handleNext}
          isLast={current + 1 >= items.length}
          variant={showLetterBadge ? 'quiz' : 'default'}
        />
      )}
      {correct === null && wrongFlash !== null && (
        <FeedbackBanner kind="wrong" />
      )}
    </div>
  );
}
