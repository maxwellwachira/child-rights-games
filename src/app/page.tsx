import Link from 'next/link';
import styles from './page.module.css';

const sections = [
  {
    title: 'Child Rights',
    games: [
      {
        href: '/match-rights',
        title: 'Match the Rights',
        desc: 'Read each description and pick the child right it describes.',
      },
      {
        href: '/match-responsibilities',
        title: 'Match Responsibilities',
        desc: 'With great rights come great responsibilities — match them!',
      },
      {
        href: '/quiz',
        title: 'Ready, Set… Quiz!',
        desc: 'Test your knowledge of child rights with 8 quick questions.',
      },
      {
        href: '/flip-cards',
        title: 'Treasure Hunt',
        desc: 'Can you identify all of the child rights? Click the treasure chest to play.',
      },
    ],
  },
  {
    title: 'Violence Against Children',
    games: [
      {
        href: '/match-violence',
        title: 'Match the Types of Violence',
        desc: 'Match each type of violence to the right description.',
      },
      {
        href: '/match-rights-protection',
        title: "Children's Rights",
        desc: 'Match each form of violence to the right that protects you.',
      },
      {
        href: '/safe-or-unsafe',
        title: 'Safe or Unsafe?',
        desc: 'Decide if situations at home, school, in the community and online are safe or unsafe.',
      },
      {
        href: '/boundary-superhero',
        title: 'Boundary Superhero',
        desc: 'Create your own super boundary card. You decide what feels safe.',
      },
      {
        href: '/child-marriage',
        title: '#SPOTitSTOPit: Child Marriage',
        desc: "Read Neema's story and answer questions about what she can do.",
      },
      {
        href: '/law-detectives',
        title: 'The Law Detectives',
        desc: 'For teens — match each case to the Kenyan law that protects children.',
      },
    ],
  },
];

export default function Home() {
  let counter = 0;
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Child Rights Games</h1>
      <p className={styles.subtitle}>
        In Kenya all children have rights. Play these games to learn what they are,
        why they matter, and how to protect them.
      </p>

      {sections.map((section) => (
        <section key={section.title} className={styles.section}>
          <h2 className={styles.sectionTitle}>{section.title}</h2>
          <div className={styles.grid}>
            {section.games.map((g) => {
              counter += 1;
              return (
                <Link key={g.href} href={g.href} className={styles.card}>
                  <div className={styles.cardNumber}>{counter}</div>
                  <div className={styles.cardTitle}>{g.title}</div>
                  <div className={styles.cardDesc}>{g.desc}</div>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
