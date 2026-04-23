export interface FlipCardData {
  id: number;
  imageSrc?: string;
  imageAlt: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface MatchItem {
  id: number;
  description: string;
  options: string[];
  correctAnswer: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface DragMatchItem {
  id: number;
  term: string;
  description: string;
  imageSrc?: string;
  bullets?: string[];
}

export type GameStatus = 'idle' | 'correct' | 'incorrect';
