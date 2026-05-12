'use client';

import Image from 'next/image';
import styles from './TreasureHuntCover.module.css';

interface Props {
  onStart: () => void;
}

export default function TreasureHuntCover({ onStart }: Props) {
  return (
    <div className={styles.page}>
      <div className={styles.parchment}>
        <h1 className={styles.title}>Treasure hunt game</h1>
        <p className={styles.subtitle}>
          Can you identify all of the child rights? Click on the treasure chest
          on the images to play
        </p>

        <div className={styles.chestRow}>
          <Image
            src="/game_assets/treasure_box.png"
            alt="Treasure chest"
            width={120}
            height={86}
            className={styles.chestImg}
          />
        </div>

        <button className={styles.startBtn} onClick={onStart}>
          Start
        </button>
      </div>
    </div>
  );
}
