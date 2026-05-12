'use client';

import { useState } from 'react';
import FlipCardGame from '@/components/FlipCardGame';
import TreasureHuntCover from '@/components/TreasureHuntCover';
import { flipCards } from '@/data/gameData';

export default function FlipCardsPage() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <TreasureHuntCover onStart={() => setStarted(true)} />;
  }

  return <FlipCardGame cards={flipCards} />;
}
