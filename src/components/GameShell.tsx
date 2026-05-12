'use client';

import { ReactNode, useState } from 'react';
import GameCover, { CoverTheme } from './GameCover';

interface CoverConfig {
  theme: CoverTheme;
  title: string;
  subtitle: string;
  characterSrc: string;
  characterAlt: string;
  playLabel?: string;
}

interface Props {
  cover: CoverConfig;
  children: ReactNode;
}

export default function GameShell({ cover, children }: Props) {
  const [started, setStarted] = useState(false);
  if (!started) {
    return <GameCover {...cover} onPlay={() => setStarted(true)} />;
  }
  return <>{children}</>;
}
