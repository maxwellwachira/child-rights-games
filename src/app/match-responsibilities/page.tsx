import DragMatchGame from '@/components/DragMatchGame';
import { matchResponsibilities } from '@/data/gameData';

export default function MatchResponsibilitiesPage() {
  return (
    <DragMatchGame
      title="With great rights, come great responsibilities!"
      subtitle="Match each child responsibility to the correct description."
      items={matchResponsibilities}
      variant="image"
    />
  );
}
