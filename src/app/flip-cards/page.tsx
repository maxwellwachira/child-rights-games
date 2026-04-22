import FlipCardGame from '@/components/FlipCardGame';
import { flipCards } from '@/data/gameData';

export default function FlipCardsPage() {
  return <FlipCardGame cards={flipCards} />;
}
