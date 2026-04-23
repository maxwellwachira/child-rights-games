import Link from 'next/link';
import styles from './page.module.css';

const games = [
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
    href: '/match-violence',
    title: 'Match the Types of Violence',
    desc: 'Learn to identify different types of violence and what protects you.',
  },
  {
    href: '/match-rights-protection',
    title: "Children's Rights",
    desc: 'Match each right to the protection it gives you.',
  },
  {
    href: '/flip-cards',
    title: 'Treasure Hunt',
    desc: 'Can you identify all of the child rights? Click the treasure chest to play.',
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Child Rights Games</h1>
      <p className={styles.subtitle}>
        In Kenya all children have rights. Play these games to learn what they are,
        why they matter, and how to protect them.
      </p>
      <div className={styles.grid}>
        {games.map((g, i) => (
          <Link key={g.href} href={g.href} className={styles.card}>
            <div className={styles.cardNumber}>{i + 1}</div>
            <div className={styles.cardTitle}>{g.title}</div>
            <div className={styles.cardDesc}>{g.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
