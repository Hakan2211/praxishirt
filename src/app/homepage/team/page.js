'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

import SceneLayer from '@/components/ui/SceneLayer';

const TITLES = [
  'Diplom-Psychologin',
  'Psychologische Psychotherapeutin (VT)',
  'Klinische Neuropsychologin',
];

const SPEKTRUM = [
  'Ängste & Phobien',
  'Depression',
  'Zwänge',
  'Trauer',
  'Trauma, Gewalt & Missbrauch',
  'Schmerzstörungen',
  'Somatische Störungen',
  'Persönlichkeitsstörungen & interaktionelle Probleme',
  'Anpassungsprobleme',
  'Lebenskrisen',
  'Schlafstörungen',
  'u. v. m.',
];

const FRAGEN = [
  'Was ist der Grund für meinen Weg in die Therapie?',
  'Gehe ich aus eigener Motivation in die Therapie?',
  'Was genau möchte ich (ver-)ändern?',
  'Welche Ziele verfolge ich?',
];

const ABRECHNUNG = [
  {
    title: 'Gesetzlich versichert',
    text: 'Abrechnung mit allen gesetzlichen Krankenkassen möglich.',
  },
  {
    title: 'Privat versichert',
    text: 'Abrechnung nach GOP (2,8-facher Satz).',
  },
  {
    title: 'Selbstzahler',
    text: 'Eine Behandlung ist auch für Selbstzahler möglich.',
  },
];

const TOC = [
  { id: 'ansatz', label: 'Behandlungsansatz' },
  { id: 'vt', label: 'Verhaltenstherapie' },
  { id: 'weg', label: 'Ihr Weg in die Therapie' },
  { id: 'spektrum', label: 'Behandlungsspektrum' },
  { id: 'abrechnung', label: 'Abrechnung' },
];

function Card({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="glass-card scroll-mt-28">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="font-display text-2xl text-white md:text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function ProfilePage() {
  return (
    <>
      <SceneLayer />

      <div className="relative z-10 container mx-auto px-5 pb-24 pt-28 md:px-10 md:pt-36 lg:px-16">
        {/* Hero */}
        <header className="grid animate-fade-up items-center gap-8 md:grid-cols-[minmax(0,320px)_1fr] md:gap-14">
          <div className="relative mx-auto w-56 md:w-full">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-rose/40 to-transparent blur-2xl" />
            <Image
              alt="Porträt von Filiz Hirt"
              src="/team/filiz.jpg"
              width={640}
              height={640}
              priority
              className="relative aspect-square w-full rounded-[2rem] object-cover ring-1 ring-white/20"
            />
          </div>
          <div className="text-center md:text-left">
            <span className="eyebrow">Über mich</span>
            <h1 className="font-display text-4xl text-white md:text-6xl">
              Filiz Hirt
            </h1>
            <ul className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
              {TITLES.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-brand-rose/30 bg-brand-rose/10 px-4 py-1.5 text-sm text-brand-rose"
                >
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-200 md:text-xl">
              <span className="font-display text-brand-rose">
                Herzlich willkommen!
              </span>{' '}
              Ich freue mich, Sie auf meiner Praxiswebseite begrüßen zu dürfen.
            </p>
          </div>
        </header>

        <div className="mt-16 grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          {/* Table of contents */}
          <nav aria-label="Inhalt" className="hidden lg:block">
            <ul className="sticky top-32 space-y-1 border-l border-white/10">
              {TOC.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="-ml-px block border-l border-transparent py-2 pl-4 text-sm text-zinc-400 transition-colors hover:border-brand-rose hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-8">
            <Card id="ansatz" eyebrow="Wie ich arbeite" title="Behandlungsansatz">
              <div className="prose-praxis">
                <p>
                  Seit mehreren Jahren arbeite ich im klinischen und im
                  ambulanten Bereich mit Menschen, die in seelische und
                  psychische Notlagen geraten sind und{' '}
                  <strong className="font-semibold text-brand-rose">
                    Hilfe zur Selbsthilfe
                  </strong>{' '}
                  suchen.
                </p>
                <p>
                  Ich lege sehr viel Wert darauf, wie Sie sich in der Therapie
                  fühlen. Eine vertrauensvolle und wertschätzende Beziehung ist
                  mir für unsere Zusammenarbeit sehr wichtig. Es ist mir
                  wichtig, Sie als Mensch kennenzulernen.
                </p>
                <p>
                  Ich möchte Ihnen einen sicheren Raum geben, in dem Sie sich
                  mit Ihren unangenehmen und schwierigen Themen
                  auseinandersetzen, alte Gewohnheitsmuster verändern und
                  verlorengegangene Funktionen wiederherstellen können. In
                  diesem Prozess bekommen Sie von mir immer wieder
                  Rückmeldungen, wie Sie sich selbst freundlich und sanft
                  begegnen können.
                </p>
                <p>
                  Auf diesem Weg werden biographische Erfahrungen und alte
                  emotionale Verletzungen, die Ihr Verhalten auch heute stark
                  prägen, verarbeitet. In meiner Therapie ist es wichtig, sich
                  selbst und das eigene Erleben zu verstehen und Ihr Leben auf
                  Ihre eigenen Bedürfnisse auszurichten.
                </p>
              </div>
            </Card>

            <Card id="vt" eyebrow="Methode" title="Verhaltenstherapie">
              <div className="prose-praxis">
                <p>
                  Die Verhaltenstherapie geht davon aus, dass jegliches Denken,
                  Fühlen und Verhalten als Muster erlernt ist (durch Familie,
                  Gesellschaft, Kultur, Sprache, Freunde, Geschlecht,
                  Schulbildung, Beruf, Partnerschaft, Alter etc.).
                </p>
                <p>
                  Um zu erkennen, was genau problematisch ist, ist es wichtig,
                  das problematische Verhalten bewusst wahrzunehmen, um es
                  verändern zu können.
                </p>
                <p>
                  Die Verhaltenstherapie setzt an den prädisponierenden,
                  auslösenden und aufrechterhaltenden Problembedingungen an.
                  Sie ist ziel- und handlungsorientiert und bemüht sich um
                  andauernde Weiterentwicklung.
                </p>
              </div>
            </Card>

            <Card id="weg" eyebrow="Vorbereitung" title="Ihr Weg in die Therapie">
              <p className="prose-praxis">
                Bitte machen Sie sich vorab Gedanken über Ihre{' '}
                <strong className="font-semibold text-brand-rose">
                  eigenen Beweggründe
                </strong>
                :
              </p>
              <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                {FRAGEN.map((frage, i) => (
                  <li
                    key={frage}
                    className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="font-display text-2xl leading-none text-brand-rose">
                      {i + 1}
                    </span>
                    <span className="text-zinc-100">{frage}</span>
                  </li>
                ))}
              </ol>
            </Card>

            <Card id="spektrum" eyebrow="Schwerpunkte" title="Behandlungsspektrum">
              <ul className="flex flex-wrap gap-2.5">
                {SPEKTRUM.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-zinc-100 transition-colors hover:border-brand-rose/60 md:text-base"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Card>

            <Card id="abrechnung" eyebrow="Kosten" title="Abrechnung">
              <ul className="grid gap-4 md:grid-cols-3">
                {ABRECHNUNG.map(({ title, text }) => (
                  <li
                    key={title}
                    className="rounded-xl border border-white/10 bg-white/5 p-5"
                  >
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {text}
                    </p>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="glass-card flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="font-display text-2xl text-white">
                  Möchten Sie einen Termin vereinbaren?
                </p>
                <p className="mt-2 text-zinc-300">
                  Ich bin zu den telefonischen Sprechzeiten für Sie erreichbar.
                </p>
              </div>
              <Link href="/homepage/kontakt" className="btn-primary shrink-0">
                Zum Kontakt <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
