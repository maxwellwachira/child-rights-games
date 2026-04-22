'use client';

import styles from './FeedbackBanner.module.css';

interface Props {
  onNext: () => void;
  isLast?: boolean;
  variant?: 'default' | 'quiz';
}

export default function FeedbackBanner({ onNext, isLast, variant = 'default' }: Props) {
  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,0.25)" />
          <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {variant === 'quiz' ? (
          <div>
            <div className={styles.quizTitle}>THAT&apos;S RIGHT!</div>
            <div className={styles.quizSub}>You successfully matched the correct term to the description</div>
          </div>
        ) : (
          <span className={styles.correctText}>Correct!</span>
        )}
      </div>
      <button className={styles.nextBtn} onClick={onNext}>
        {isLast ? 'Finish' : 'Next →'}
      </button>
    </div>
  );
}
