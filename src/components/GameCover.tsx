'use client';

import styles from './GameCover.module.css';

export type CoverTheme = 'purple' | 'orange' | 'magenta';

interface Props {
  theme: CoverTheme;
  title: string;
  subtitle: string;
  characterSrc: string;
  characterAlt: string;
  playLabel?: string;
  onPlay: () => void;
}

const WAVES: Record<CoverTheme, string> = {
  purple: '/game_assets/wave_purple.svg',
  orange: '/game_assets/wave_orange.svg',
  magenta: '/game_assets/wave_magenta.svg',
};

export default function GameCover({
  theme,
  title,
  subtitle,
  characterSrc,
  characterAlt,
  playLabel = 'Play',
  onPlay,
}: Props) {
  return (
    <div className={`${styles.cover} ${styles[`theme_${theme}`]}`}>
      <div className={styles.textCol}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <button className={styles.playBtn} onClick={onPlay}>
          {playLabel}
        </button>
      </div>

      <div className={styles.characterCol}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={characterSrc} alt={characterAlt} className={styles.character} />
      </div>

      <div
        className={styles.wave}
        style={{ backgroundImage: `url(${WAVES[theme]})` }}
        aria-hidden="true"
      />
    </div>
  );
}
