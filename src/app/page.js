'use client';

import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { BiVolumeFull } from 'react-icons/bi';

import { useMobile } from '@/components/context/IsMobileProvider';
import { useSoundEnabled } from '@/components/context/SoundEnabledProvider';
import MobileModels from '@/components/intro/models/MobileModels';
import Models from '@/components/intro/models/Models';

export default function Home() {
  const { setSoundEnabled } = useSoundEnabled();
  const { isMobile } = useMobile();

  return (
    <main className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-t from-slate-100 via-blue-100 to-sky-200">
      {isMobile ? <MobileModels /> : <Models />}

      <div className="pointer-events-none relative z-10 container mx-auto flex min-h-[100svh] items-end px-6 pb-14 md:items-start md:justify-end md:px-10 md:pb-10 md:pt-[34vh] lg:px-16">
        <div className="pointer-events-auto max-w-xl animate-fade-up text-center md:text-left">
          <figure>
            <blockquote className="font-display text-2xl leading-snug text-slate-800 md:text-4xl md:leading-snug">
              „Es kommt nicht darauf an, was andere aus uns gemacht haben,
              sondern was wir aus dem machen, was andere aus uns gemacht haben.“
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Jean-Paul Sartre
            </figcaption>
          </figure>

          <div className="mt-10 flex flex-col items-center gap-4 md:items-start">
            <Link
              href="/homepage"
              onClick={() => setSoundEnabled(true)}
              className="group inline-flex items-center gap-3 rounded-full bg-rose-400 px-9 py-4 text-lg font-semibold text-white shadow-xl shadow-rose-400/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose-500 hover:shadow-rose-500/40"
            >
              Eintreten
              <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-slate-500 md:justify-start">
              <BiVolumeFull aria-hidden className="text-rose-400" />
              <span>Mit sanftem Hintergrundklang</span>
              <span aria-hidden>·</span>
              <Link
                href="/homepage"
                onClick={() => setSoundEnabled(false)}
                className="underline decoration-slate-400 underline-offset-4 hover:text-slate-800"
              >
                ohne Ton fortfahren
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
