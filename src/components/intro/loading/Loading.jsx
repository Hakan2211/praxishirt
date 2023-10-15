'use client';

import { useProgress, HTML } from '@react-three/drei';

export default function Loader() {
  const { active, progress } = useProgress();

  return active ? (
    <div className="flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 bg-black text-white text-3xl   ">
      <span>{Math.floor(progress)}%</span>
    </div>
  ) : null;
}
