'use client';

import Models from '@/components/intro/models/Models';
import Link from 'next/link';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';

export default function Home() {
  const { soundEnabled, setSoundEnabled } = useSoundEnabled();
  return (
    <>
      <main className="bg-gradient-to-t from-slate-100 via-blue-100 to-sky-200 h-screen">
        {/* jumbo */}

        <div className="flex w-full h-2/6 flex-col items-center justify-center  text-center translate-y-full translate-x-60  ">
          <span className="w-full text-4xl -translate-y-20">
            Willkommen bei
          </span>
          {/* <h1 className="hidden my-4 text-5xl font-bold leading-tight">
            Praxis Hirt
          </h1> */}
          <p className="mb-8 text-4xl leading-normal translate-y-8">
            Wo Fachkompetenz und Fürsorge eine Brücke schlagen
          </p>
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className=" translate-y-20 text-white bg-red-300 w-40 h-16 text-3xl rounded-lg hover:cursor-pointe hover:bg-red-400"
          >
            <Link href={'/homepage'}>Start</Link>
          </button>
        </div>

        <Models />
      </main>
    </>
  );
}
