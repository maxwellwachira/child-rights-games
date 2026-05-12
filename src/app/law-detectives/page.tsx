'use client';

import GameShell from '@/components/GameShell';
import LawDetectivesGame from '@/components/LawDetectivesGame';
import { lawDetectivesCases } from '@/data/gameData';

export default function LawDetectivesPage() {
  return (
    <GameShell
      cover={{
        theme: 'orange',
        title: 'The Law Detectives',
        subtitle:
          'For teens who want to understand the laws that protect children against violence. Read each case and choose which law protects children from that form of violence.',
        characterSrc: '/game_assets/hero_law_detectives.png',
        characterAlt: 'Two child rights superheroes in detective mode',
      }}
    >
      <LawDetectivesGame cases={lawDetectivesCases} />
    </GameShell>
  );
}
