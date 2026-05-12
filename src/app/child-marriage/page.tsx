'use client';

import GameShell from '@/components/GameShell';
import StoryQuizGame from '@/components/StoryQuizGame';
import { childMarriageStory, childMarriageQuestions } from '@/data/gameData';

export default function ChildMarriagePage() {
  return (
    <GameShell
      cover={{
        theme: 'purple',
        title: '#SPOTitSTOPit Child Marriage',
        subtitle:
          "You’ve now learned a lot about keeping yourself safe, being a boundary superhero, and how to #SPOTitSTOPit!",
        characterSrc: '/game_assets/hero_child_marriage.png',
        characterAlt: 'Flying child rights superhero',
      }}
    >
      <StoryQuizGame story={childMarriageStory} questions={childMarriageQuestions} />
    </GameShell>
  );
}
