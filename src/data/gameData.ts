import type {
  FlipCardData,
  MatchItem,
  QuizQuestion,
  DragMatchItem,
  SafeUnsafeScenario,
  StoryQuestion,
  LawCase,
} from '@/types';

export const flipCards: FlipCardData[] = [
  {
    id: 1,
    imageSrc: '/game_assets/right_to_education.png',
    imageAlt: 'Children going to school',
    question: 'What right is this?',
    options: ['Right to Education', 'Rights for Children with Disability and Support', 'Right to Identity'],
    correctAnswer: 'Right to Education',
    explanation: 'Every child has the right to go to school and receive an education to help them grow and follow their dreams.',
  },
  {
    id: 2,
    imageSrc: '/game_assets/right_to_safety_and_protection.png',
    imageAlt: 'Child protected from harm',
    question: 'What right is this?',
    options: ['Right to Safety and Protection', 'Right to Play and Rest', 'Right to Basic Needs'],
    correctAnswer: 'Right to Safety and Protection',
    explanation: 'Every child is safe from violence, abuse, neglect, and harmful cultural practices. No one is allowed to hurt children or treat them badly.',
  },
  {
    id: 3,
    imageSrc: '/game_assets/right_to_fair_treatment.png',
    imageAlt: 'All children treated equally',
    question: 'What right is this?',
    options: ['Right to Health Care', 'Right to Fair Treatment', 'Right to Self-Expression'],
    correctAnswer: 'Right to Fair Treatment',
    explanation: 'Every child is treated the same, respectfully and fairly. All children are equal, and no child should ever be treated unfairly.',
  },
  {
    id: 4,
    imageSrc: '/game_assets/right_to_play_and_rest.png',
    imageAlt: 'Children playing outdoors',
    question: 'What right is this?',
    options: ['Right to Education', 'Right to Family and Care', 'Right to Play and Rest'],
    correctAnswer: 'Right to Play and Rest',
    explanation: 'Every child has time to play, have fun, develop their talents and hobbies, and to rest.',
  },
  {
    id: 5,
    imageSrc: '/game_assets/right_to_special_support.png',
    imageAlt: 'Child with disability supported in class',
    question: 'What right is this?',
    options: ['Right to a Name and Identity', 'Right to Special Support', 'Right to Self-Expression'],
    correctAnswer: 'Right to Special Support',
    explanation: 'All children with disabilities have a right to accommodation and resources to help them learn and participate fully in society.',
  },
  {
    id: 6,
    imageSrc: '/game_assets/right_to_family_and_care.png',
    imageAlt: 'Family sharing a meal together',
    question: 'What right is this?',
    options: ['Right to Basic Needs', 'Right to Family and Care', 'Right to Health Care'],
    correctAnswer: 'Right to Family and Care',
    explanation: 'Every child has a family to take care of them. This can be their parents, or if parents cannot care for the child, another loving family.',
  },
  {
    id: 7,
    imageSrc: '/game_assets/right_to_health_care.png',
    imageAlt: 'Child receiving medical care from a doctor',
    question: 'What right is this?',
    options: ['Right to Family and Care', 'Right to Special Support', 'Right to Health Care'],
    correctAnswer: 'Right to Health Care',
    explanation: 'Every child can get help to be healthy, like seeing a doctor, getting medicine, having proper nutrition, and managing their mental health.',
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
    description: 'Every child is safe from violence (being hurt by someone), abuse, neglect (when adults don\'t take proper care of you / don\'t give you what you need to feel safe and healthy), harmful cultural practices (old rules or traditions that are not safe for children), and exploitative labour (when adults make children do work that hurts them, or isn\'t safe, or is too much for their age, or stops them from learning and playing). No one is allowed to hurt children or treat them badly.',
    options: ['Right to Safety and Protection', 'Right to Fair Treatment', 'Right to Education', 'Right to Play and Rest', 'Right to Special Support', 'Right to Self-Expression'],
    correctAnswer: 'Right to Safety and Protection',
  },
  {
    id: 3,
    description: 'Every child is treated the same, respectfully and fairly, and not discriminated (when someone is treated differently from others because of who they are, in a way that is not fair. It doesn\'t matter where you live, what you look like, the language you speak, your religion, if you are a boy or a girl, if you have a disability, or if your family is rich or poor; all children are equal, and no child should ever be treated unfairly). No one is allowed to insult children, bully children, or make them feel less important.',
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
    description: 'All children with disabilities have a right to accommodation (giving children with disabilities the support and tools they need so they can learn, play, and participate just like everyone else) and resources to help them learn and participate fully in society.',
    options: ['Right to Fair Treatment', 'Right to Education', 'Right to Play and Rest', 'Right to Special Support', 'Right to Self-Expression', 'Right to Safety and Protection'],
    correctAnswer: 'Right to Special Support',
  },
  {
    id: 6,
    description: 'Every child can express their opinions through talking, drawing, writing, signing or any other way a child feels comfortable. Adults listen when children share their ideas. Adults treat children like their thoughts, feelings, and ideas matter. Children can tell them what they think about important decisions about their lives, and they will listen.',
    options: ['Right to Safety and Protection', 'Right to Fair Treatment', 'Right to Education', 'Right to Play and Rest', 'Right to Special Support', 'Right to Self-Expression'],
    correctAnswer: 'Right to Self-Expression',
  },
  {
    id: 7,
    description: 'Every child has a family to take care of them. This can be their parents, or if the parents cannot take care of the child, another family, like aunties, uncles, older siblings, or cousins, or a foster family (people not related to me, but who want to take care of me).',
    options: ['Right to Family and Care', 'Right to Health Care', 'Right to Basic Needs', 'Right to a Name and Identity', 'Right to Self-Expression', 'Right to Special Support'],
    correctAnswer: 'Right to Family and Care',
  },
  {
    id: 8,
    description: 'Every child can get help to be healthy, like seeing a doctor, getting medicine, having proper nutrition, and getting information and help to manage their mental health, sexual and reproductive health.',
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
    description: 'Every child has the right to have a name, a family, and to know where they come from. Every child\'s birth should be registered and every child should have a birth certificate. A birth certificate is a legal document and helps facilitate access to school, health services, and more.',
    options: ['Right to Family and Care', 'Right to Health Care', 'Right to Basic Needs', 'Right to a Name and Identity', 'Right to Self-Expression', 'Right to Special Support'],
    correctAnswer: 'Right to a Name and Identity',
  },
];

export const matchResponsibilities: DragMatchItem[] = [
  {
    id: 1,
    term: 'Caring about your family',
    description: 'Children should be kind and helpful to their family. This means:',
    bullets: [
      'listening to parents and caregivers',
      'helping in small ways at home',
      'showing respect for older people (like grandparents)',
    ],
    imageSrc: '/game_assets/caring_about_your_family.png',
  },
  {
    id: 2,
    term: 'Treating others with respect',
    description: 'Children should treat everyone kindly and fairly, no matter who they are. This means:',
    bullets: [
      'not hurting others',
      'speaking politely',
      "respecting other people's beliefs, differences, and rights",
    ],
    imageSrc: '/game_assets/treating_others_respect.png',
  },
  {
    id: 3,
    term: 'Protecting the environment',
    description: 'Children should try to look after nature. This means:',
    bullets: [
      'not wasting water or food',
      'keeping your surroundings clean',
      'caring for animals and plants',
    ],
    imageSrc: '/game_assets/protecting_the_environment.png',
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

export const safeUnsafeScenarios: SafeUnsafeScenario[] = [
  {
    id: 1,
    category: 'HOME',
    imageSrc: '/game_assets/sou_home_cousin.png',
    imageAlt: 'A younger child sitting with an older cousin who is talking to them',
    prompt: 'An older cousin tells you to sit on their lap, but you feel uncomfortable.',
    answer: 'unsafe',
    explanation:
      'Any touch that makes you feel uncomfortable is unsafe even if the person is a relative. You should say no and tell a trusted adult.',
  },
  {
    id: 2,
    category: 'HOME',
    imageSrc: '/game_assets/sou_home_parent_shouting.png',
    imageAlt: 'A child looking sad while an adult shouts in the background',
    prompt: 'Your parent shouts at you loudly every day and calls you names.',
    answer: 'unsafe',
    explanation:
      'Constant shouting and name-calling can harm your mental health and self-esteem. You deserve to be treated with respect.',
  },
  {
    id: 3,
    category: 'HOME',
    imageSrc: '/game_assets/sou_home_grandma_medicine.png',
    imageAlt: 'A grandmother caring for a sick child',
    prompt: 'Your grandma reminds you to take your medicine when you are sick.',
    answer: 'safe',
    explanation:
      'Caring adults remind you to take care of your health. Being looked after when you are sick is part of your right to health care.',
  },
  {
    id: 4,
    category: 'HOME',
    imageSrc: '/game_assets/sou_home_threat.png',
    imageAlt: 'An adult speaking sternly to a child',
    prompt: 'An adult threatens you, saying, "If you tell anyone, I will hurt you."',
    answer: 'unsafe',
    explanation:
      'Any threat to hurt you is abuse and puts you in danger. You should tell an adult immediately even if you feel scared.',
  },
  {
    id: 5,
    category: 'HOME',
    imageSrc: '/game_assets/sou_home_relative_pickup.png',
    imageAlt: 'A relative meeting a child at the school gate',
    prompt: 'A relative picks you up from school because your parent asked them to.',
    answer: 'safe',
    explanation:
      'When a parent has arranged for a trusted relative to pick you up, this is a safe and planned situation.',
  },

  {
    id: 6,
    category: 'SCHOOL',
    imageSrc: '/game_assets/sou_school_teacher_praise.png',
    imageAlt: 'A teacher high-fiving a happy student in class',
    prompt: 'A teacher praises you for your hard work in class.',
    answer: 'safe',
    explanation:
      'Encouragement and praise from a teacher is a kind, healthy way of supporting your learning.',
  },
  {
    id: 7,
    category: 'SCHOOL',
    imageSrc: '/game_assets/sou_school_bullying.png',
    imageAlt: 'A group of pupils ignoring or teasing a child sitting alone',
    prompt: 'Other children push you around in the corridor and laugh when you fall.',
    answer: 'unsafe',
    explanation:
      'Pushing someone can cause injuries and is never okay, and laughing when someone is hurt is unkind. This is bullying.',
  },
  {
    id: 8,
    category: 'SCHOOL',
    imageSrc: '/game_assets/sou_school_prefect.png',
    imageAlt: 'A prefect talking respectfully with another student',
    prompt: 'A prefect takes your book politely so they can note down your name for duty.',
    answer: 'safe',
    explanation:
      'A prefect doing their job in a polite, respectful way is part of normal school life.',
  },
  {
    id: 9,
    category: 'SCHOOL',
    imageSrc: '/game_assets/sou_school_teacher_unsafe.png',
    imageAlt: 'A child looking worried inside an empty classroom',
    prompt:
      'A teacher tells you to stay behind alone in the classroom and then tries to touch your private parts.',
    answer: 'unsafe',
    explanation:
      "Any attempt to touch a child's private parts is abuse and always wrong. Asking you to stay behind alone can be a tactic to prevent others from seeing or helping. Tell a trusted adult immediately.",
  },
  {
    id: 10,
    category: 'SCHOOL',
    imageSrc: '/game_assets/sou_school_friends_project.png',
    imageAlt: 'A group of students working together on a project',
    prompt: 'Your group of friends includes you in a class project and listens to your ideas.',
    answer: 'safe',
    explanation:
      'Friends who include you and listen to your ideas help you feel respected and valued.',
  },

  {
    id: 11,
    category: 'COMMUNITY',
    imageSrc: '/game_assets/sou_community_boda.png',
    imageAlt: 'A boda boda rider stopping near a child by the road',
    prompt: "A boda boda rider you don't know offers to give you a free ride home.",
    answer: 'unsafe',
    explanation:
      'Getting on a boda boda with a stranger can lead to danger, including kidnapping, exploitation, or injury. Offering free things like rides or sweets is a common unsafe way adults use to gain trust with children.',
  },
  {
    id: 12,
    category: 'COMMUNITY',
    imageSrc: '/game_assets/sou_community_shopkeeper.png',
    imageAlt: 'A shopkeeper giving change to a child at a kiosk',
    prompt: 'A shopkeeper gives you change politely after buying something.',
    answer: 'safe',
    explanation:
      'A polite, normal interaction with a shopkeeper as part of buying something is safe.',
  },
  {
    id: 13,
    category: 'COMMUNITY',
    imageSrc: '/game_assets/sou_community_neighbour.png',
    imageAlt: 'A neighbour helping a child carry a water container',
    prompt: 'Your neighbour helps you carry water when you are tired.',
    answer: 'safe',
    explanation:
      'A kind neighbour helping with a simple task in the open is part of a caring community.',
  },
  {
    id: 14,
    category: 'COMMUNITY',
    imageSrc: '/game_assets/sou_community_abandoned.png',
    imageAlt: 'Children near an empty area away from adults',
    prompt: 'Someone your age asks you to play in an abandoned building.',
    answer: 'unsafe',
    explanation:
      'Abandoned buildings can have broken glass, broken floors, exposed wires, holes or gangs hiding inside. There is no responsible adult nearby to help if something goes wrong. Even when the person is your age, children can still be led into unsafe situations.',
  },
  {
    id: 15,
    category: 'COMMUNITY',
    imageSrc: '/game_assets/sou_community_stranger.png',
    imageAlt: 'A child standing in an open area near a stranger',
    prompt: 'A friend keeps pulling at your clothes even after you tell them to stop.',
    answer: 'unsafe',
    explanation:
      "This is boundary-breaking, harassment, and bullying, even though it involves a friend. Pulling someone's clothes can be embarrassing, invasive, and can become sexual harassment.",
  },

  {
    id: 16,
    category: 'ONLINE',
    imageSrc: '/game_assets/sou_online_friend_request.png',
    imageAlt: 'A child looking at a phone screen',
    prompt: "You receive a friend request from someone you don't know.",
    answer: 'unsafe',
    explanation:
      'Online profiles can be fake or misleading. Strangers may try to gain trust to ask for personal information, photos, or favours later.',
  },
  {
    id: 17,
    category: 'ONLINE',
    imageSrc: '/game_assets/sou_online_video_call.png',
    imageAlt: 'A child on a video call with a friend',
    prompt: 'You video call your best friend to discuss homework.',
    answer: 'safe',
    explanation:
      'Talking with a real friend you know to do schoolwork together is a healthy use of technology.',
  },
  {
    id: 18,
    category: 'ONLINE',
    imageSrc: '/game_assets/sou_online_photo_request.png',
    imageAlt: 'A child looking worried at a phone screen in the dark',
    prompt: 'Someone online asks you to send a photo of your body or private parts.',
    answer: 'unsafe',
    explanation:
      'Asking for photos of your body or private parts is wrong. Once sent, photos can be saved, shared, or used again without your control. Tell a trusted adult right away.',
  },
  {
    id: 19,
    category: 'ONLINE',
    imageSrc: '/game_assets/sou_online_gamer.png',
    imageAlt: 'A child playing a game on a laptop',
    prompt: 'A gamer you met online asks where you live and what school you attend.',
    answer: 'unsafe',
    explanation:
      'Sharing personal information online with strangers can put you at risk of being found or harmed.',
  },
  {
    id: 20,
    category: 'ONLINE',
    imageSrc: '/game_assets/sou_online_scary_message.png',
    imageAlt: 'A child showing a phone screen',
    prompt: 'You block someone who is sending you rude or scary messages.',
    answer: 'safe',
    explanation:
      'Blocking someone who is being rude or threatening is a smart, safe way to protect yourself. You can also tell a trusted adult.',
  },
];

export const childMarriageStory = {
  title: '#SPOTitSTOPit Child Marriage',
  imageSrc: '/game_assets/neema_story.png',
  imageAlt: 'A 14-year-old girl named Neema walking home with her school books',
  paragraphs: [
    'Neema is 14 years old. She loves school and dreams of becoming a nurse. One evening she comes home and overhears her parents talking with an older man from the village.',
    'They are arranging for Neema to marry him next month. Neema has never agreed to this. She feels scared and confused, and does not know what to do.',
  ],
};

export const childMarriageQuestions: StoryQuestion[] = [
  {
    id: 1,
    question: 'How do you think Neema feels in this situation?',
    options: [
      'Happy because she is getting married',
      "Scared and confused because she didn't agree to the marriage",
      'Excited because she will help her family',
      "Indifferent because it doesn't affect her",
    ],
    correctAnswers: ["Scared and confused because she didn't agree to the marriage"],
  },
  {
    id: 2,
    question: 'Like all children in Kenya, Neema has rights. Which rights might be violated in this story?',
    options: [
      'Right to education',
      'Right to choose',
      'Right to be free from harmful practices',
      'Right to play video games',
      'Right to protection',
    ],
    correctAnswers: [
      'Right to education',
      'Right to choose',
      'Right to be free from harmful practices',
      'Right to protection',
    ],
    multi: true,
  },
  {
    id: 3,
    question: 'What could Neema do if she feels unsafe or forced?',
    options: [
      'Keep it a secret and hope it goes away',
      "Tell a trusted adult, teacher, chief, children's officer, call 116",
      'Run away without telling anyone',
      'Talk to her friend and do nothing else',
    ],
    correctAnswers: ["Tell a trusted adult, teacher, chief, children's officer, call 116"],
  },
  {
    id: 4,
    question: 'Who could help Neema in her school or community? Select all that are right.',
    options: [
      'Teacher or school counselor',
      "Chief or children's officer",
      'Trusted relatives or neighbours',
      'Strangers online',
      'Her friends who can support her',
    ],
    correctAnswers: [
      'Teacher or school counselor',
      "Chief or children's officer",
      'Trusted relatives or neighbours',
      'Her friends who can support her',
    ],
    multi: true,
  },
  {
    id: 5,
    question: 'What advice would you give Neema if you were her friend?',
    options: [
      "Tell her it's fine and she should just get married",
      'Encourage her to speak to a trusted adult',
      'Tell her to run away immediately alone',
      'Remind her of her rights and support her safely',
    ],
    correctAnswers: [
      'Encourage her to speak to a trusted adult',
      'Remind her of her rights and support her safely',
    ],
    multi: true,
  },
  {
    id: 6,
    question: 'Why is child marriage harmful for girls and boys? Select all that are right.',
    options: [
      'Stops children from continuing education',
      'Can lead to health risks, especially early pregnancy',
      'Causes emotional and psychological harm',
      'Helps children earn money faster',
      'Takes away freedom to choose and can lead to poverty or abuse',
    ],
    correctAnswers: [
      'Stops children from continuing education',
      'Can lead to health risks, especially early pregnancy',
      'Causes emotional and psychological harm',
      'Takes away freedom to choose and can lead to poverty or abuse',
    ],
    multi: true,
  },
];

export const lawDetectivesCases: LawCase[] = [
  {
    id: 1,
    caseText: 'A child is left alone at home without care for several days.',
    lawTitle: 'Children Act (2022)',
    lawDescription:
      'Protects children from all forms of abuse, neglect, exploitation, and harmful practices. Provides for child protection services and the reporting of abuse. Ensures that children in conflict with the law are treated differently from adults.',
  },
  {
    id: 2,
    caseText: 'Someone online is sending sexual messages to a girl and asking her for pictures.',
    lawTitle: 'Sexual Offences Act (2014)',
    lawDescription:
      'Criminalizes sexual abuse, exploitation, harassment, and grooming of children. Provides strict penalties for offenders.',
  },
  {
    id: 3,
    caseText: "A teacher hears that a girl's aunt is encouraging her to undergo female genital mutilation.",
    lawTitle: 'Prohibition of Female Genital Mutilation Act',
    lawDescription:
      'Protects girls from female genital mutilation. Criminalizes performing, assisting, or promoting female genital mutilation.',
  },
  {
    id: 4,
    caseText: 'A 13-year-old is working long hours as a shamba boy and missing school.',
    lawTitle: 'Employment Act & Labour Laws',
    lawDescription:
      'Protect children from child labour, exploitation, and hazardous work.',
  },
  {
    id: 5,
    caseText: 'A stranger offers a child a job in the city but asks the child to travel alone.',
    lawTitle: 'Counter Trafficking in Persons Act (2010, amended 2017)',
    lawDescription:
      'Protects children from human trafficking for labour, sexual exploitation, or other harmful purposes.',
  },
  {
    id: 6,
    caseText: 'A 15-year-old girl is being pressured to marry a much older man.',
    lawTitle: 'The Marriage Act',
    lawDescription:
      'Makes it illegal for anyone under 18 to marry. Protects children, especially girls, from early marriage.',
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
