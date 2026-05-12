'use client';

import { useState } from 'react';
import type { StoryQuestion } from '@/types';
import { playCorrectSound, playWrongSound } from '@/utils/sounds';
import ProgressBar from './ProgressBar';
import styles from './StoryQuizGame.module.css';

interface StoryConfig {
  title: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
}

interface Props {
  story: StoryConfig;
  questions: StoryQuestion[];
}

export default function StoryQuizGame({ story, questions }: Props) {
  const [phase, setPhase] = useState<'story' | 'quiz' | 'done'>('story');
  const [current, setCurrent] = useState(0);
  const [picks, setPicks] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const q = questions[current];

  function togglePick(opt: string) {
    if (checked) return;
    if (q.multi) {
      setPicks((p) => (p.includes(opt) ? p.filter((x) => x !== opt) : [...p, opt]));
    } else {
      setPicks([opt]);
    }
  }

  function handleCheck() {
    if (picks.length === 0) return;
    const correctSet = new Set(q.correctAnswers);
    const pickSet = new Set(picks);

    const allCorrect =
      pickSet.size === correctSet.size &&
      [...pickSet].every((p) => correctSet.has(p));

    if (allCorrect) {
      playCorrectSound();
      setScore((s) => s + 1);
    } else {
      playWrongSound();
    }
    setChecked(true);
  }

  function handleNext() {
    if (current + 1 >= questions.length) {
      setPhase('done');
    } else {
      setCurrent((c) => c + 1);
      setPicks([]);
      setChecked(false);
    }
  }

  function handleRestart() {
    setPhase('story');
    setCurrent(0);
    setPicks([]);
    setChecked(false);
    setScore(0);
  }

  if (phase === 'story') {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>{story.title}</h1>
        <p className={styles.subheading}>Watch the following story and answer the questions that follow.</p>

        <div className={styles.storyCard}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={story.imageSrc} alt={story.imageAlt} className={styles.storyImage} />
          <div className={styles.storyBody}>
            {story.paragraphs.map((p, i) => (
              <p key={i} className={styles.storyParagraph}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.startActions}>
          <button className={styles.primaryBtn} onClick={() => setPhase('quiz')}>
            Next →
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'done') {
    return (
      <div className={styles.wrapper}>
        <div className={styles.complete}>
          <div className={styles.completeTitle}>Well done!</div>
          <div className={styles.completeScore}>
            You answered {score} out of {questions.length} questions correctly.
          </div>
          <button className={styles.restartBtn} onClick={handleRestart}>
            Play again
          </button>
        </div>
      </div>
    );
  }

  const correctSet = new Set(q.correctAnswers);
  const pickSet = new Set(picks);
  const allCorrect =
    checked &&
    pickSet.size === correctSet.size &&
    [...pickSet].every((p) => correctSet.has(p));
  const partial =
    checked && !allCorrect && [...pickSet].some((p) => correctSet.has(p));

  const LABELS = ['A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>{story.title}</h1>

      <div className={styles.questionWrap}>
        <div className={styles.questionRow}>
          <span className={styles.questionNum}>Q{current + 1}</span>
          <span className={styles.questionText}>{q.question}</span>
        </div>
        {q.multi && <p className={styles.hint}>You can select more than one answer.</p>}

        <div className={styles.options}>
          {q.options.map((opt, i) => {
            const isPicked = picks.includes(opt);
            const isCorrectAns = correctSet.has(opt);

            let cls = styles.option;
            if (!checked && isPicked) cls = `${styles.option} ${styles.optionPicked}`;
            if (checked) {
              if (isPicked && isCorrectAns) cls = `${styles.option} ${styles.optionCorrect}`;
              else if (isPicked && !isCorrectAns) cls = `${styles.option} ${styles.optionIncorrect}`;
              else if (!isPicked && isCorrectAns) cls = `${styles.option} ${styles.optionMissed}`;
            }

            let badgeCls = styles.letterBadge;
            if (checked && isCorrectAns) badgeCls = `${styles.letterBadge} ${styles.letterBadgeCorrect}`;
            else if (checked && isPicked && !isCorrectAns) badgeCls = `${styles.letterBadge} ${styles.letterBadgeWrong}`;
            else if (isPicked) badgeCls = `${styles.letterBadge} ${styles.letterBadgePicked}`;

            return (
              <button
                key={opt}
                type="button"
                className={cls}
                onClick={() => togglePick(opt)}
                disabled={checked}
              >
                <span className={badgeCls} aria-hidden="true">
                  {LABELS[i]}
                </span>
                <span className={styles.optionText}>{opt}</span>
              </button>
            );
          })}
        </div>

        {checked && (
          <div
            className={`${styles.feedback} ${
              allCorrect ? styles.right : partial ? styles.partial : ''
            }`}
          >
            <span className={styles.feedbackTitle}>
              {allCorrect ? "That's right!" : partial ? 'Almost there.' : 'Not quite.'}
            </span>
            {allCorrect
              ? 'You picked the correct answer(s).'
              : `The correct answer${q.correctAnswers.length > 1 ? 's are' : ' is'}: ${q.correctAnswers.join('; ')}.`}
          </div>
        )}

        <div className={styles.actions}>
          {!checked ? (
            <button
              className={styles.checkBtn}
              onClick={handleCheck}
              disabled={picks.length === 0}
            >
              Check
            </button>
          ) : (
            <button className={styles.nextBtn} onClick={handleNext}>
              {current + 1 >= questions.length ? 'Finish' : 'Next →'}
            </button>
          )}
        </div>
      </div>

      <div className={styles.progressWrap}>
        <ProgressBar current={current + (checked ? 1 : 0)} total={questions.length} />
      </div>
    </div>
  );
}
