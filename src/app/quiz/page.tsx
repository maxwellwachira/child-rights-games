import MultipleChoiceGame from '@/components/MultipleChoiceGame';
import { quizQuestions } from '@/data/gameData';

export default function QuizPage() {
  return (
    <MultipleChoiceGame
      title="Ready, set… Quiz!"
      items={quizQuestions}
      columns={1}
      showLetterBadge={true}
    />
  );
}
