'use client';

import { useState, useMemo } from 'react';
import type { LawCase } from '@/types';
import { playCorrectSound, playWrongSound } from '@/utils/sounds';
import styles from './LawDetectivesGame.module.css';

interface Props {
  cases: LawCase[];
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function LawDetectivesGame({ cases }: Props) {
  const cols = useMemo(() => ({
    cases: shuffle(cases),
    laws: shuffle(cases),
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [cases]);

  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [matches, setMatches] = useState<Record<number, number>>({});
  const [wrong, setWrong] = useState<[number, number] | null>(null);

  const matchedCaseIds = new Set(Object.keys(matches).map(Number));
  const matchedLawIds = new Set(Object.values(matches).map(Number));

  function handleCase(id: number) {
    if (matchedCaseIds.has(id) || wrong) return;
    setSelectedCase(id === selectedCase ? null : id);
  }

  function handleLaw(id: number) {
    if (matchedLawIds.has(id) || wrong) return;
    if (selectedCase === null) return;

    if (selectedCase === id) {
      playCorrectSound();
      setMatches((m) => ({ ...m, [selectedCase]: id }));
      setSelectedCase(null);
    } else {
      playWrongSound();
      setWrong([selectedCase, id]);
      setTimeout(() => {
        setWrong(null);
        setSelectedCase(null);
      }, 700);
    }
  }

  const allDone = matchedCaseIds.size === cases.length;

  function handleRestart() {
    setSelectedCase(null);
    setMatches({});
    setWrong(null);
  }

  if (allDone) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.complete}>
          <div className={styles.completeTitle}>Case closed, detective!</div>
          <div className={styles.completeScore}>
            You correctly matched all {cases.length} cases to the right law.
          </div>
          <button className={styles.restartBtn} onClick={handleRestart}>
            Play again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>The Law Detectives</h1>
      <p className={styles.subheading}>
        Read each case on the left, then click the law on the right that protects children from that
        form of violence.
      </p>

      <div className={styles.grid}>
        {cols.cases.map((c, i) => {
          const lawItem = cols.laws[i];

          const cMatched = matchedCaseIds.has(c.id);
          const cSelected = selectedCase === c.id;
          const cWrong = wrong?.[0] === c.id;

          const caseColorCls = styles[`caseColor${i % 6}` as keyof typeof styles];
          let caseCls = `${styles.case} ${caseColorCls}`;
          if (cMatched) caseCls = `${styles.case} ${styles.caseMatched}`;
          else if (cWrong) caseCls = `${styles.case} ${styles.caseWrong}`;
          else if (cSelected) caseCls = `${styles.case} ${styles.caseSelected}`;

          const lMatched = matchedLawIds.has(lawItem.id);
          const lWrong = wrong?.[1] === lawItem.id;

          const lawColorCls = styles[`lawColor${i % 6}` as keyof typeof styles];
          let lawCls = `${styles.law} ${lawColorCls}`;
          if (lMatched) lawCls = `${styles.law} ${styles.lawMatched}`;
          else if (lWrong) lawCls = `${styles.law} ${styles.lawWrong}`;

          return (
            <div key={`row-${i}`} style={{ display: 'contents' }}>
              <button
                key={`case-${c.id}`}
                className={caseCls}
                onClick={() => handleCase(c.id)}
                disabled={cMatched}
              >
                {c.caseText}
                {cMatched && (
                  <span className={styles.lawDesc}>
                    <strong>{c.lawTitle}</strong>
                  </span>
                )}
              </button>
              <button
                key={`law-${lawItem.id}`}
                className={lawCls}
                onClick={() => handleLaw(lawItem.id)}
                disabled={lMatched}
              >
                <span className={styles.lawTitle}>{lawItem.lawTitle}</span>
                {lMatched && <span className={styles.lawDesc}>{lawItem.lawDescription}</span>}
              </button>
            </div>
          );
        })}
      </div>

      <p className={styles.hint}>
        Click a case on the left, then click the law on the right that protects against it.
      </p>
    </div>
  );
}
