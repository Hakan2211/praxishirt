'use client';

import {
  HiOutlineClock,
  HiOutlineExternalLink,
  HiOutlineLocationMarker,
  HiOutlinePhone,
} from 'react-icons/hi';

import SceneLayer from '@/components/ui/SceneLayer';
import { PRACTICE } from '@/components/ui/navigation/navLinks';

function IconBadge({ children }) {
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-rose/15 text-2xl text-brand-rose ring-1 ring-brand-rose/30">
      {children}
    </span>
  );
}

function Kontakt() {
  return (
    <>
      <SceneLayer />

      <div className="relative z-10 container mx-auto flex min-h-[100svh] flex-col justify-center px-5 pb-20 pt-28 md:px-10 md:pt-36 lg:px-16">
        <header className="max-w-2xl animate-fade-up">
          <span className="eyebrow">Kontakt</span>
          <h1 className="heading-praxis">Ich bin gerne für Sie da</h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">
            Für eine Terminvereinbarung erreichen Sie mich telefonisch zu den
            unten genannten Sprechzeiten.
          </p>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Phone */}
          <section
            aria-labelledby="tel-heading"
            className="glass-card flex animate-fade-up flex-col [animation-delay:120ms]"
          >
            <div className="flex items-center gap-4">
              <IconBadge>
                <HiOutlinePhone />
              </IconBadge>
              <h2 id="tel-heading" className="font-display text-2xl text-white">
                Telefonische Erreichbarkeit
              </h2>
            </div>

            <a
              href={PRACTICE.phoneHref}
              className="group mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 transition-colors hover:border-brand-rose/60 hover:bg-brand-rose/10"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Telefon
                </span>
                <span className="mt-1 block whitespace-nowrap text-xl font-semibold tracking-wide text-white sm:text-2xl md:text-3xl">
                  {PRACTICE.phoneDisplay}
                </span>
              </span>
              <span className="rounded-full bg-brand-rose px-4 py-2 text-sm font-semibold text-brand-deep transition-transform group-hover:scale-105">
                Anrufen
              </span>
            </a>

            <div className="mt-8">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-rose">
                <HiOutlineClock /> Sprechzeiten
              </p>
              <dl className="mt-3 divide-y divide-white/10">
                {PRACTICE.hours.map(({ days, time }) => (
                  <div
                    key={days + time}
                    className="flex items-center justify-between py-3 text-base md:text-lg"
                  >
                    <dt className="text-zinc-300">{days}</dt>
                    <dd className="font-medium text-white">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* Address */}
          <section
            aria-labelledby="adresse-heading"
            className="glass-card flex animate-fade-up flex-col [animation-delay:240ms]"
          >
            <div className="flex items-center gap-4">
              <IconBadge>
                <HiOutlineLocationMarker />
              </IconBadge>
              <h2
                id="adresse-heading"
                className="font-display text-2xl text-white"
              >
                Adresse
              </h2>
            </div>

            <address className="mt-8 space-y-1 text-lg not-italic leading-relaxed text-zinc-200 md:text-xl">
              <span className="block text-sm text-zinc-400">
                {PRACTICE.name}
              </span>
              <span className="block font-semibold text-white">
                {PRACTICE.owner}
              </span>
              <span className="block">{PRACTICE.street}</span>
              <span className="block">{PRACTICE.city}</span>
            </address>

            <div className="mt-auto pt-8">
              <a
                href={PRACTICE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full sm:w-auto"
              >
                Route in Google Maps planen
                <HiOutlineExternalLink aria-hidden />
                <span className="sr-only">(öffnet in neuem Tab)</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Kontakt;
