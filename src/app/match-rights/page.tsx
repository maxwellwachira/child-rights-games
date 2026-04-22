import MultipleChoiceGame from '@/components/MultipleChoiceGame';
import { matchRightsItems } from '@/data/gameData';

export default function MatchRightsPage() {
  return (
    <MultipleChoiceGame
      title="Match each child right to the correct description."
      subtitle="In Kenya all children have all of these rights and more!"
      items={matchRightsItems}
      columns={2}
    />
  );
}
