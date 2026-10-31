'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { HiArrowRight } from 'react-icons/hi';

import { useMobile } from '@/components/context/IsMobileProvider';
import Brain from '@/components/homepage/brain/Brain';
import BrainParticles from '@/components/homepage/brain/Particles';
import DNA from '@/components/homepage/dna/DNA';
import DNAParticles from '@/components/homepage/dna/DNAParticles';
import Heart from '@/components/homepage/heart/Heart';
import HeartParticles from '@/components/homepage/heart/HeartParticles';
import Scroll from '@/components/scroll/Scroll';
import SceneLayer from '@/components/ui/SceneLayer';
import Section from '@/components/ui/Section';

// World-space distance between the stacked models; must match Scroll spacing.
const SPACING_DESKTOP = 1.2;
const SPACING_MOBILE = 1.1;

function Models({ isMobile }) {
  const x = isMobile ? 0 : 0.6;
  const brainY = isMobile ? 0.2 : 0.1;
  const s = isMobile ? SPACING_MOBILE : SPACING_DESKTOP;
  const heartProps = {
    scale: isMobile ? 0.3 : 0.45,
    position: [x, brainY - s - 0.1, 4],
    rotation: [-Math.PI / 2, 0, 120],
  };
  return (
    <Suspense fallback={null}>
      <Brain position={[x, brainY, 4]} scale={isMobile ? 2 : 3} />
      <BrainParticles position={[x, brainY, 4]} scale={isMobile ? 2 : 3} />
      <Heart {...heartProps} />
      <HeartParticles {...heartProps} />
      <DNA position={[x, brainY - 2 * s - 0.1, 4]} scale={isMobile ? 1.5 : 2} />
      <DNAParticles
        position={[x, brainY - 2 * s - 0.1, 4]}
        scale={isMobile ? 1.5 : 2}
      />
    </Suspense>
  );
}

function ScrollHint() {
  return (
    <a
      href="#herz"
      aria-label="Weiter nach unten scrollen"
      className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-300 transition-colors hover:text-brand-rose md:flex"
    >
      Entdecken
      <span className="relative flex h-10 w-6 justify-center rounded-full border border-current pt-2">
        <span className="h-2 w-1 animate-scroll-dot rounded-full bg-current" />
      </span>
    </a>
  );
}

function Homepage() {
  const { isMobile } = useMobile();

  return (
    <>
      <SceneLayer>
        <Models isMobile={isMobile} />
        <Scroll spacing={isMobile ? SPACING_MOBILE : SPACING_DESKTOP} />
      </SceneLayer>

      <Section
        id="kopf"
        innerClassName="flex items-end md:items-center"
        overlay={<ScrollHint />}
      >
        <div className="glass-card max-w-xl max-md:mt-[38vh]">
          <span className="eyebrow">Psychotherapie in Bruchsal</span>
          <h1 className="heading-praxis">
            Der Schlüssel zu unserer inneren Stärke
          </h1>
          <div className="prose-praxis mt-6">
            <p>
              In den Tiefen unseres Gehirns verbirgt sich der Schlüssel zu
              unserer inneren Stärke. Die Psychotherapie öffnet die Tore zur
              Veränderung und zum Wachstum, indem wir die einzigartige Landkarte
              der Gedanken gemeinsam erforschen.
            </p>
            <p className="font-medium text-white">
              Hier beginnt die Reise zur ganzheitlichen Gesundheit.
            </p>
          </div>
        </div>
      </Section>

      <Section id="herz" innerClassName="flex items-end md:items-center">
        <div className="glass-card max-w-xl max-md:mt-[38vh]">
          <span className="eyebrow">Herz, Kopf &amp; Bauch</span>
          <h2 className="heading-praxis">Im Einklang mit sich selbst</h2>
          <div className="prose-praxis mt-6">
            <p>
              In meiner Praxis schlagen Herz, Kopf und Bauch im Einklang. Das
              Ziel ist es, Sie emotional zu unterstützen, damit Sie Ihr inneres
              Gleichgewicht finden.
            </p>
            <p>
              Ich möchte mit Ihnen gemeinsam Ihre Ressourcen stärken, an Ihren
              Zielen arbeiten und Sie bei der Gestaltung eines selbstbestimmten
              und zufriedenen Lebens unterstützen.
            </p>
          </div>
        </div>
      </Section>

      <Section id="dna" innerClassName="flex items-end md:items-center">
        <div className="glass-card max-w-xl max-md:mt-[38vh]">
          <span className="eyebrow">Einzigartig</span>
          <h2 className="heading-praxis">Jeder Mensch kann wachsen</h2>
          <div className="prose-praxis mt-6">
            <p>
              Ähnlich wie jeder DNA-Strang bei jedem Menschen einzigartig ist,
              sind auch die eigenen Emotionen, Denk- und Verhaltensmuster
              einzigartig.
            </p>
            <p>
              Jeder Mensch hat die Kapazität zu lernen, sich zu verändern, zu
              wachsen und zu einem selbstbestimmten Wesen zu werden. Es geht um
              die Veränderung in der gesamten Art der Organisation und der Art
              der Reaktion.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/homepage/leistungen" className="btn-primary">
              Meine Leistungen <HiArrowRight />
            </Link>
            <Link href="/homepage/kontakt" className="btn-ghost">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Homepage;
