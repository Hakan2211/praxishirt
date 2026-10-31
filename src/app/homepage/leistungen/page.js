'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { HiArrowRight, HiCheck, HiOutlineExternalLink } from 'react-icons/hi';

import { useMobile } from '@/components/context/IsMobileProvider';
import { Dance } from '@/components/leistungen/Dance';
import Scroll from '@/components/scroll/Scroll';
import SceneLayer from '@/components/ui/SceneLayer';
import Section from '@/components/ui/Section';

const Neuron = dynamic(
  () => import('@/components/leistungen/Neuron').then((mod) => mod.Neuron),
  { ssr: false }
);

const Earth = dynamic(
  () => import('@/components/leistungen/Earth').then((mod) => mod.Earth),
  { ssr: false }
);

const SPACING_DESKTOP = 1.15;
const SPACING_MOBILE = 1.3;

const DIAGNOSTIK_BEREICHE = [
  'Aufmerksamkeitsstörungen',
  'Gedächtnisstörungen',
  'Exekutive Störungen',
  'Affektive und emotionale Störungen',
  'Verhaltensstörungen',
  'Krankheitseinsicht und Krankheitsverarbeitung',
];

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-praxis"
    >
      {children}
      <HiOutlineExternalLink aria-hidden className="text-sm" />
      <span className="sr-only">(öffnet in neuem Tab)</span>
    </a>
  );
}

function Leistungen() {
  const { isMobile } = useMobile();

  return (
    <>
      <SceneLayer>
        {isMobile ? (
          <>
            <Dance
              scale={0.1}
              position={[-0.5, 0.2, 4]}
              rotation={[Math.PI / 18, 0, 0]}
            />
            <Neuron
              scale={0.2}
              position={[-0.1, -1.15, 4]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <Earth scale={0.02} position={[0, -2.45, 4]} />
          </>
        ) : (
          <>
            <Dance
              scale={0.1}
              position={[0.25, -0.1, 4]}
              rotation={[Math.PI / 18, 0, 0]}
            />
            <Neuron
              scale={0.2}
              position={[0.6, -1.3, 4]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <Earth scale={0.03} position={[0.6, -2.3, 4]} />
          </>
        )}
        <Scroll spacing={isMobile ? SPACING_MOBILE : SPACING_DESKTOP} />
      </SceneLayer>

      <Section id="verhaltenstherapie" innerClassName="flex items-end md:items-center">
        <article className="glass-card max-w-xl max-md:mt-[38vh]">
          <span className="eyebrow">Leistung 01</span>
          <h1 className="heading-praxis">Verhaltenstherapie</h1>
          <div className="prose-praxis mt-6">
            <p>
              Die Verhaltenstherapie bietet einen individuellen Weg zur
              Verbesserung der psychischen Gesundheit. Durch gezielte Analyse
              und Anpassung von Denk- und Verhaltensmustern unterstütze ich Sie
              dabei, eine individuelle Veränderung zu bewirken.
            </p>
            <p>
              Hilfreiche Anregungen finden Sie auf der Website{' '}
              <ExternalLink href="https://www.psychotipps.com/">
                Psychotipps
              </ExternalLink>
              .
            </p>
          </div>
        </article>
      </Section>

      <Section id="neuropsychologie" innerClassName="flex items-end md:items-center">
        <article className="glass-card max-w-2xl max-md:mt-[38vh]">
          <span className="eyebrow">Leistung 02</span>
          <h2 className="heading-praxis">
            Neuropsychologische Diagnostik &amp; Therapie
          </h2>
          <div className="prose-praxis mt-6">
            <p>
              Die neuropsychologische Diagnostik und Therapie bietet einen
              präzisen Einblick in die Funktionsweise Ihres Gehirns. Sie ist
              eine umfangreiche Untersuchung von kognitiven und emotional
              affektiven Funktionen und deren Auswirkungen auf das Verhalten.
            </p>
            <p>Untersucht werden beispielsweise folgende Funktionsbereiche:</p>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {DIAGNOSTIK_BEREICHE.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-100 md:text-base"
              >
                <HiCheck
                  aria-hidden
                  className="mt-0.5 shrink-0 text-lg text-brand-rose"
                />
                {item}
              </li>
            ))}
          </ul>
          <div className="prose-praxis mt-6">
            <p>
              In meiner Praxis werden Sie ausführlich informiert. Weitere
              Informationen finden Sie bei der{' '}
              <ExternalLink href="https://www.gnp.de/">
                Gesellschaft für Neuropsychologie e.V.
              </ExternalLink>
            </p>
          </div>
        </article>
      </Section>

      <Section id="interkulturell" innerClassName="flex items-end md:items-center">
        <article className="glass-card max-w-xl max-md:mt-[38vh]">
          <span className="eyebrow">Leistung 03</span>
          <h2 className="heading-praxis">Interkulturelle Psychotherapie</h2>
          <div className="prose-praxis mt-6">
            <p>
              Die interkulturelle Psychotherapie respektiert die Vielfalt
              individueller Hintergründe und schafft einen Raum für
              kultursensible Unterstützung.
            </p>
            <p>
              Ich erkenne an, dass kulturelle Einflüsse die psychische
              Gesundheit beeinflussen, und biete eine individuelle Therapie an,
              die Ihre persönlichen kulturellen Bedürfnisse berücksichtigt.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/homepage/kontakt" className="btn-primary">
              Termin anfragen <HiArrowRight />
            </Link>
            <Link href="/homepage/team" className="btn-ghost">
              Über mich
            </Link>
          </div>
        </article>
      </Section>
    </>
  );
}

export default Leistungen;
