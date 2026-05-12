'use client';

import GameShell from '@/components/GameShell';
import DragMatchGame from '@/components/DragMatchGame';
import { matchResponsibilities } from '@/data/gameData';

export default function MatchResponsibilitiesPage() {
  return (
    <GameShell
      cover={{
        theme: 'orange',
        title: 'With great rights, come great responsibilities!',
        subtitle:
          'Just like all Superheroes, children have responsibilities! Match each child responsibility to the correct description',
        characterSrc: '/game_assets/match_responsibilities_cover.png',
        characterAlt: 'Kenyan child superhero in cape',
      }}
    >
      <DragMatchGame
        title="Drag the cards with the images to the empty text box matching the description"
        items={matchResponsibilities}
        variant="image"
      />
    </GameShell>
  );
}
