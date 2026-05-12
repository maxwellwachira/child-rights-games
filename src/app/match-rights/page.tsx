'use client';

import GameShell from '@/components/GameShell';
import MultipleChoiceGame from '@/components/MultipleChoiceGame';
import { matchRightsItems } from '@/data/gameData';

export default function MatchRightsPage() {
  return (
    <GameShell
      cover={{
        theme: 'purple',
        title: 'Match each child right to the correct description.',
        subtitle: 'In Kenya all children have all of these rights and more!',
        characterSrc: '/game_assets/match_rights_cover.png',
        characterAlt: 'Two Kenyan child rights superheroes',
      }}
    >
      <MultipleChoiceGame
        title="Select the child right described below"
        items={matchRightsItems}
        columns={3}
      />
    </GameShell>
  );
}
