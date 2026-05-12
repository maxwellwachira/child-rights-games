'use client';

import Image from 'next/image';
import styles from './FeedbackBanner.module.css';

interface Props {
  kind?: 'correct' | 'wrong';
  onNext?: () => void;
  isLast?: boolean;
  variant?: 'default' | 'quiz';
}

export default function FeedbackBanner({
  kind = 'correct',
  onNext,
  isLast,
  variant = 'default',
}: Props) {
  if (kind === 'wrong') {
    return (
      <div className={`${styles.banner} ${styles.bannerWrong}`}>
        <div className={styles.left}>
          <span className={styles.wrongText}>Try again</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.banner}>
      <div className={styles.left}>
        <Image
          src="/solar_confetti-bold-duotone.svg"
          alt=""
          width={36}
          height={36}
          className={styles.icon}
          aria-hidden
        />
        {variant === 'quiz' ? (
          <div>
            <div className={styles.quizTitle}>THAT&apos;S RIGHT!</div>
            <div className={styles.quizSub}>You successfully matched the correct term to the description</div>
          </div>
        ) : (
          <div>
            <div className={styles.quizTitle}>THAT&apos;S RIGHT!</div>
            <div className={styles.quizSub}>You successfully matched the correct term to the description</div>
          </div>
        )}
        <Image
          src="/Sparkle.svg"
          alt=""
          width={22}
          height={22}
          className={styles.sparkle}
          aria-hidden
        />
      </div>
      {onNext && (
        <button className={styles.nextBtn} onClick={onNext}>
          {isLast ? 'Finish' : 'Next →'}
        </button>
      )}
    </div>
  );
}
