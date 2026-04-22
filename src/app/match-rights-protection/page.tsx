import DragMatchGame from '@/components/DragMatchGame';
import { matchRightsProtection } from '@/data/gameData';

export default function MatchRightsProtectionPage() {
  return (
    <DragMatchGame
      title="Children's Rights"
      subtitle="Match the violence with the right that protects you."
      items={matchRightsProtection}
      variant="peach"
    />
  );
}
