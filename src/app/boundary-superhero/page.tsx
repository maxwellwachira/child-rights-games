'use client';

import GameShell from '@/components/GameShell';
import BoundarySuperheroGame from '@/components/BoundarySuperheroGame';

export default function BoundarySuperheroPage() {
  return (
    <GameShell
      cover={{
        theme: 'teal',
        title: 'Create your own super boundary',
        subtitle:
          'Every child has this special boundary super power — you get to decide what feels safe and comfortable for your body, your feelings, and your space. Become a Boundary Superhero!',
        characterSrc: '/game_assets/hero_boundary.png',
        characterAlt: 'Boundary superhero in a strong stance',
      }}
    >
      <BoundarySuperheroGame />
    </GameShell>
  );
}
