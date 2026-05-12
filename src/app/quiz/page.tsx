'use client';

import GameShell from '@/components/GameShell';
import MultipleChoiceGame from '@/components/MultipleChoiceGame';
import { quizQuestions } from '@/data/gameData';

export default function QuizPage() {
  return (
    <GameShell
      cover={{
        theme: 'magenta',
        title: 'Child rights quiz',
        subtitle: 'Let us test your knowledge about child rights',
        characterSrc: '/game_assets/quiz_cover.png',
        characterAlt: 'Child superhero ready to quiz you',
      }}
    >
      <MultipleChoiceGame
        title="Child rights quiz"
        items={quizQuestions}
        columns={1}
        showLetterBadge={true}
      />
    </GameShell>
  );
}
