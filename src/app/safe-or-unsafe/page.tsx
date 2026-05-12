'use client';

import GameShell from '@/components/GameShell';
import SafeOrUnsafeGame from '@/components/SafeOrUnsafeGame';
import { safeUnsafeScenarios } from '@/data/gameData';

export default function SafeOrUnsafePage() {
  return (
    <GameShell
      cover={{
        theme: 'orange',
        title: 'Safe or Unsafe?',
        subtitle:
          'There are common things that might happen at home, school, in the community and on the internet. Choose if they are safe or unsafe.',
        characterSrc: '/game_assets/hero_safe_unsafe.png',
        characterAlt: 'Two child rights superheroes standing together',
      }}
    >
      <SafeOrUnsafeGame
        title="Safe or Unsafe?"
        subtitle="These are common things that might happen at home, school, in the community, and on the internet. Choose if they are safe or unsafe."
        scenarios={safeUnsafeScenarios}
      />
    </GameShell>
  );
}
