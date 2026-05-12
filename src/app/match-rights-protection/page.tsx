'use client';

import GameShell from '@/components/GameShell';
import DragMatchGame from '@/components/DragMatchGame';
import { matchRightsProtection } from '@/data/gameData';

export default function MatchRightsProtectionPage() {
  return (
    <GameShell
      cover={{
        theme: 'magenta',
        title: "Children's Rights",
        subtitle: 'Match each form of violence with the right that protects you.',
        characterSrc: '/game_assets/hero_rights_protection.png',
        characterAlt: 'Child rights superhero in flight',
      }}
    >
      <DragMatchGame
        title="Children's Rights"
        subtitle="Match the violence with the right that protects you."
        items={matchRightsProtection}
        variant="peach"
      />
    </GameShell>
  );
}
