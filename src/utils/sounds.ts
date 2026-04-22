function createCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  try {
    return new AudioContext();
  } catch {
    return null;
  }
}

function note(
  ctx: AudioContext,
  freq: number,
  start: number,
  end: number,
  volume = 0.28,
  type: OscillatorType = 'sine'
) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, ctx.currentTime + start);
  gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + end);
  osc.start(ctx.currentTime + start);
  osc.stop(ctx.currentTime + end + 0.05);
}

export function playCorrectSound(): void {
  const ctx = createCtx();
  if (!ctx) return;
  note(ctx, 659, 0, 0.18);       // E5
  note(ctx, 784, 0.1, 0.28);     // G5
  note(ctx, 1047, 0.2, 0.5, 0.22); // C6
}

export function playWrongSound(): void {
  const ctx = createCtx();
  if (!ctx) return;
  note(ctx, 330, 0, 0.12, 0.22, 'sawtooth');   // E4 buzz
  note(ctx, 247, 0.1, 0.25, 0.18, 'sawtooth');  // B3 lower
}
