'use client';

import GameShell from '@/components/GameShell';
import DragMatchGame from '@/components/DragMatchGame';
import { matchViolenceItems } from '@/data/gameData';

export default function MatchViolencePage() {
  return (
    <GameShell
      cover={{
        theme: 'teal',
        title: 'Match the types of violence',
        subtitle:
          'Match each type of violence to the right description by dragging the cards on the left to the correct description on the right.',
        characterSrc: '/game_assets/hero_violence.png',
        characterAlt: 'Child rights superhero',
      }}
    >
      <DragMatchGame
        title="Match the types of violence"
        subtitle="Click a term on the left, then click its matching description on the right."
        items={matchViolenceItems}
        variant="text"
      />
    </GameShell>
  );
}
