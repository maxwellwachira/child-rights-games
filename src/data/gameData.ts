import type { FlipCardData, MatchItem, QuizQuestion, DragMatchItem } from '@/types';

export const flipCards: FlipCardData[] = [
  {
    id: 1,
    imageAlt: 'Children going to school',
    question: 'What right is this?',
    options: ['Right to Education', 'Rights for Children with Disability and Support', 'Right to Identity'],
    correctAnswer: 'Right to Education',
    explanation: 'Every child has the right to go to school and receive an education to help them grow and follow their dreams.',
  },
  {
    id: 2,
    imageAlt: 'Child protected from harm',
    question: 'What right is this?',
    options: ['Right to Safety and Protection', 'Right to Play and Rest', 'Right to Basic Needs'],
    correctAnswer: 'Right to Safety and Protection',
    explanation: 'Every child is safe from violence, abuse, neglect, and harmful cultural practices. No one is allowed to hurt children or treat them badly.',
  },
  {
    id: 3,
    imageAlt: 'All children treated equally',
    question: 'What right is this?',
    options: ['Right to Health Care', 'Right to Fair Treatment', 'Right to Self-Expression'],
    correctAnswer: 'Right to Fair Treatment',
    explanation: 'Every child is treated the same, respectfully and fairly. All children are equal, and no child should ever be treated unfairly.',
  },
  {
    id: 4,
    imageAlt: 'Children playing outdoors',
    question: 'What right is this?',
    options: ['Right to Education', 'Right to Family and Care', 'Right to Play and Rest'],
    correctAnswer: 'Right to Play and Rest',
    explanation: 'Every child has time to play, have fun, develop their talents and hobbies, and to rest.',
  },
  {
    id: 5,
    imageAlt: 'Child with disability supported in class',
    question: 'What right is this?',
    options: ['Right to a Name and Identity', 'Right to Special Support', 'Right to Self-Expression'],
    correctAnswer: 'Right to Special Support',
    explanation: 'All children with disabilities have a right to accommodation and resources to help them learn and participate fully in society.',
  },
];

export const matchRightsItems: MatchItem[] = [
  {
    id: 1,
    description: 'Every child goes to school to learn new things and follow their dreams.',
    options: ['Right to Safety and Protection', 'Right to Fair Treatment', 'Right to Education', 'Right to Play and Rest', 'Right to Special Support', 'Right to Self-Expression'],
    correctAnswer: 'Right to Education',
  },
  {
    id: 2,
    description: 'Every child is safe from violence, abuse, neglect, harmful cultural practices, and exploitative labour. No one is allowed to hurt children or treat them badly.',
    options: ['Right to Safety and Protection', 'Right to Fair Treatment', 'Right to Education', 'Right to Play and Rest', 'Right to Special Support', 'Right to Self-Expression'],
    correctAnswer: 'Right to Safety and Protection',
  },
  {
    id: 3,
    description: 'Every child is treated the same, respectfully and fairly, and not discriminated against. All children are equal, and no child should ever be treated unfairly.',
    options: ['Right to Fair Treatment', 'Right to Education', 'Right to Play and Rest', 'Right to Special Support', 'Right to Self-Expression', 'Right to Safety and Protection'],
    correctAnswer: 'Right to Fair Treatment',
  },
  {
    id: 4,
    description: 'Every child has time to play, have fun and develop their talents and hobbies, and to rest. Children don\'t do dangerous work that stops them from play and rest.',
    options: ['Right to Safety and Protection', 'Right to Fair Treatment', 'Right to Education', 'Right to Play and Rest', 'Right to Special Support', 'Right to Self-Expression'],
    correctAnswer: 'Right to Play and Rest',
  },
  {
    id: 5,
    description: 'All children with disabilities have a right to accommodation and resources to help them learn and participate fully in society.',
    options: ['Right to Fair Treatment', 'Right to Education', 'Right to Play and Rest', 'Right to Special Support', 'Right to Self-Expression', 'Right to Safety and Protection'],
    correctAnswer: 'Right to Special Support',
  },
  {
    id: 6,
    description: 'Every child can express their opinions through talking, drawing, writing, signing or any other way a child feels comfortable. Adults listen when children share their ideas.',
    options: ['Right to Safety and Protection', 'Right to Fair Treatment', 'Right to Education', 'Right to Play and Rest', 'Right to Special Support', 'Right to Self-Expression'],
    correctAnswer: 'Right to Self-Expression',
  },
  {
    id: 7,
    description: 'Every child has a family to take care of them. This can be their parents, or if the parents cannot take care of the child, another family or a foster family.',
    options: ['Right to Family and Care', 'Right to Health Care', 'Right to Basic Needs', 'Right to a Name and Identity', 'Right to Self-Expression', 'Right to Special Support'],
    correctAnswer: 'Right to Family and Care',
  },
  {
    id: 8,
    description: 'Every child can get help to be healthy, like seeing a doctor, getting medicine, having proper nutrition, and getting information and help to manage their mental health.',
    options: ['Right to Family and Care', 'Right to Basic Needs', 'Right to Health Care', 'Right to a Name and Identity', 'Right to Self-Expression', 'Right to Special Support'],
    correctAnswer: 'Right to Health Care',
  },
  {
    id: 9,
    description: 'Every child has what they need to be safe, to develop well and to be healthy, like a safe place to live, enough food, and clean water.',
    options: ['Right to Family and Care', 'Right to Health Care', 'Right to Basic Needs', 'Right to Self-Expression', 'Right to a Name and Identity', 'Right to Special Support'],
    correctAnswer: 'Right to Basic Needs',
  },
  {
    id: 10,
    description: 'Every child has the right to have a name, a family, and to know where they come from. Every child\'s birth should be registered and every child should have a birth certificate.',
    options: ['Right to Family and Care', 'Right to Health Care', 'Right to Basic Needs', 'Right to a Name and Identity', 'Right to Self-Expression', 'Right to Special Support'],
    correctAnswer: 'Right to a Name and Identity',
  },
];

export const matchResponsibilities: DragMatchItem[] = [
  {
    id: 1,
    term: 'Caring about your family',
    description: 'Children should be kind and helpful to their family. This means listening to parents and caregivers, helping in small ways at home, and showing respect for older people (like grandparents).',
    imageSrc: undefined,
  },
  {
    id: 2,
    term: 'Treating others with respect',
    description: 'Children should treat everyone kindly and fairly, no matter who they are. This means not hurting others, speaking politely, and respecting other people\'s beliefs, differences, and rights.',
    imageSrc: undefined,
  },
  {
    id: 3,
    term: 'Protecting the environment',
    description: 'Children should try to look after nature. This means not wasting water or food, keeping your surroundings clean, and caring for animals and plants.',
    imageSrc: undefined,
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'What are child rights?',
    options: ['Special rewards for good behaviour', 'Important things every child needs to grow up safe and happy', 'Rules only for teenagers'],
    correctAnswer: 'Important things every child needs to grow up safe and happy',
  },
  {
    id: 2,
    question: 'Who has child rights?',
    options: ['Only children who behave well', 'Only children living with their parents', 'All children, including children with disabilities, everywhere, no matter what'],
    correctAnswer: 'All children, including children with disabilities, everywhere, no matter what',
  },
  {
    id: 3,
    question: 'Why are child rights important?',
    options: ['They help children be safe, cared for, and able to grow and learn', 'They help children get extra pocket money', 'They make school shorter'],
    correctAnswer: 'They help children be safe, cared for, and able to grow and learn',
  },
  {
    id: 4,
    question: 'Which two important international laws explain child rights?',
    options: ['The School Rules and the Class Register', 'The United Nations Convention on the Rights of the Child and the African Charter on Rights and Welfare of the African Child', 'The Weather Report and the Sports News'],
    correctAnswer: 'The United Nations Convention on the Rights of the Child and the African Charter on Rights and Welfare of the African Child',
  },
  {
    id: 5,
    question: "What does the African Charter say about children's responsibilities?",
    options: ['Children should do all the work that adults are meant to do', 'Children have no responsibilities at all', 'Children should try to help their families and communities in positive ways'],
    correctAnswer: 'Children should try to help their families and communities in positive ways',
  },
  {
    id: 6,
    question: 'When adults make choices, what should they think about first?',
    options: ['What is easiest for them', 'What is best for children', 'What their friends want'],
    correctAnswer: 'What is best for children',
  },
  {
    id: 7,
    question: 'Which is NOT a child right?',
    options: ['A blind child getting a birth certificate', 'Having a birthday celebration', 'Going to school'],
    correctAnswer: 'Having a birthday celebration',
  },
  {
    id: 8,
    question: 'Which is NOT a child right?',
    options: ['Taking soda with every meal', 'Being listened to when something bothers me', 'Playing in a safe space'],
    correctAnswer: 'Taking soda with every meal',
  },
];

export const matchViolenceItems: DragMatchItem[] = [
  {
    id: 1,
    term: 'Physical violence',
    description: 'Someone beats, hits, pushes, pinches, punches, kicks, slaps, or burns your body, or uses an object to cause pain.',
  },
  {
    id: 2,
    term: 'Emotional violence',
    description: 'Someone uses words or actions that make you feel scared, unwanted, or ashamed.',
  },
  {
    id: 3,
    term: 'Sexual violence',
    description: 'When someone touches your private parts, forces you to touch them, or makes you do or say or look at anything sexual that makes you feel uncomfortable.',
  },
  {
    id: 4,
    term: 'Technology facilitated violence',
    description: 'Bullying, threats, or sexual messages sent on phones or online.',
  },
  {
    id: 5,
    term: 'Neglect',
    description: "When adults don't give you enough food, care, or attention to grow and stay safe and healthy.",
  },
  {
    id: 6,
    term: 'Harmful cultural practices',
    description: 'Child marriage, female genital mutilation and cutting, child labour.',
  },
];

export const matchRightsProtection: DragMatchItem[] = [
  {
    id: 1,
    term: 'Right to protection from abuse',
    description: 'No one should hit, hurt, or injure you',
  },
  {
    id: 2,
    term: 'Right to be treated with respect',
    description: 'No one should insult, shame, or threaten you',
  },
  {
    id: 3,
    term: 'Right to privacy',
    description: 'Your body belongs to you; no one may touch your private parts',
  },
  {
    id: 4,
    term: 'Right to parental care and protection',
    description: 'You must be given food, love, education, health care, and protection.',
  },
  {
    id: 5,
    term: 'Right to play',
    description: 'You have time to play, relax and take part in fun activities',
  },
  {
    id: 6,
    term: 'Right to protection from harmful cultural practices',
    description: 'No child should be forced into marriage, female genital mutilation and cutting, or dangerous work.',
  },
];
