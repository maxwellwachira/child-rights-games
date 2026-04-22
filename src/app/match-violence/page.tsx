import DragMatchGame from '@/components/DragMatchGame';
import { matchViolenceItems } from '@/data/gameData';

export default function MatchViolencePage() {
  return (
    <DragMatchGame
      title="Match the Types of Violence"
      subtitle="Match each type of violence to the right description."
      items={matchViolenceItems}
    />
  );
}
