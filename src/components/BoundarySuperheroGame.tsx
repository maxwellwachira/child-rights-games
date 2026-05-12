'use client';

import { useState } from 'react';
import styles from './BoundarySuperheroGame.module.css';

const EXAMPLE = {
  boundary: 'No one should touch my body or hug me unless I say it’s okay',
  say: 'Please stop. I don’t like that. (Hapana, acha. Sitaki.)',
  tell: 'the people who keep me safe',
};

export default function BoundarySuperheroGame() {
  const [boundary, setBoundary] = useState('');
  const [say, setSay] = useState('');
  const [tell, setTell] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = boundary.trim() && say.trim() && tell.trim();

  function handleRestart() {
    setBoundary('');
    setSay('');
    setTell('');
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>You are a Boundary Superhero!</h1>
        <p className={styles.subheading}>This is your very own boundary card.</p>

        <div className={styles.resultCard}>
          <span className={styles.resultBadge}>Shujaa Boundary Card</span>
          <div className={styles.resultTitle}>My Boundary</div>
          <p className={styles.resultText}>
            <strong>My boundary is</strong> &ldquo;{boundary}&rdquo;.
          </p>
          <p className={styles.resultText}>
            <strong>When someone crosses it, I say</strong> &ldquo;{say}&rdquo;.
          </p>
          <p className={styles.resultText}>
            <strong>And if they don’t listen, I will tell</strong> {tell}.
          </p>
          <div className={styles.hashtag}>#SPOTitSTOPit</div>
        </div>

        <div className={styles.actions}>
          <button className={styles.secondaryBtn} onClick={handleRestart}>
            Make a new boundary
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Create your own super boundary</h1>
      <p className={styles.subheading}>
        Every child has this special boundary super power &mdash; you get to decide what feels safe and
        comfortable for your body, your feelings, and your space.
      </p>

      <div className={styles.intro}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/game_assets/boundary_hero_stage.png"
          alt="A boundary superhero glowing on a stage with shadowy figures around"
          className={styles.heroImage}
        />
        <div className={styles.exampleCard}>
          <span className={styles.exampleLabel}>Example: Shujaa Boundary Card</span>
          <p className={styles.exampleText}>
            <strong>My boundary is</strong> &ldquo;{EXAMPLE.boundary}&rdquo;.
            <br />
            <strong>When someone crosses it, I say:</strong> &ldquo;{EXAMPLE.say}&rdquo;
            <br />
            <strong>If they don’t listen,</strong> I will tell {EXAMPLE.tell}.
          </p>
        </div>
      </div>

      <div className={styles.formCard}>
        <div className={styles.formTitle}>It’s now your turn to become a boundary superhero!</div>

        <div className={styles.fieldBlock}>
          <label className={styles.fieldLabel} htmlFor="boundary">
            My boundary is&hellip;
          </label>
          <textarea
            id="boundary"
            className={styles.textarea}
            value={boundary}
            onChange={(e) => setBoundary(e.target.value)}
            placeholder="e.g. No one should look at my phone without my permission"
          />
        </div>

        <div className={styles.fieldBlock}>
          <label className={styles.fieldLabel} htmlFor="say">
            When someone crosses it, I say&hellip;
          </label>
          <textarea
            id="say"
            className={styles.textarea}
            value={say}
            onChange={(e) => setSay(e.target.value)}
            placeholder="e.g. Please stop. I don’t like that."
          />
        </div>

        <div className={styles.fieldBlock}>
          <label className={styles.fieldLabel} htmlFor="tell">
            And if they don’t listen, I will tell&hellip;
          </label>
          <input
            id="tell"
            className={styles.input}
            value={tell}
            onChange={(e) => setTell(e.target.value)}
            placeholder="e.g. my mum, teacher, or auntie"
          />
        </div>

        <div className={styles.actions}>
          <button
            className={styles.primaryBtn}
            onClick={() => setSubmitted(true)}
            disabled={!canSubmit}
          >
            Make my Shujaa card
          </button>
        </div>
      </div>
    </div>
  );
}
