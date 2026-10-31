'use client';

import { useProgress } from '@react-three/drei';

export default function Loader() {
  const { active, progress } = useProgress();

  if (!active) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-gradient-to-t from-slate-100 via-blue-100 to-sky-200 text-slate-700"
    >
      <p className="font-display text-2xl tracking-[0.2em]">
        <span className="text-rose-400">P</span>raxis{' '}
        <span className="text-rose-400">H</span>irt
      </p>
      <div className="h-1 w-56 overflow-hidden rounded-full bg-white/70">
        <div
          className="h-full rounded-full bg-rose-400 transition-[width] duration-300"
          style={{ width: `${Math.floor(progress)}%` }}
        />
      </div>
      <p className="text-sm text-slate-500">
        Einen Augenblick noch… {Math.floor(progress)}%
      </p>
    </div>
  );
}
