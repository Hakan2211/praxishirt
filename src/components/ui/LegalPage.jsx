import SceneLayer from '@/components/ui/SceneLayer';

export default function LegalPage({ title, children }) {
  return (
    <>
      <SceneLayer />
      <div className="relative z-10 container mx-auto px-5 pb-24 pt-28 md:px-10 md:pt-36 lg:px-16">
        <header className="mx-auto max-w-3xl">
          <span className="eyebrow">Rechtliches</span>
          <h1 className="heading-praxis">{title}</h1>
        </header>
        <article className="glass-card legal-content mx-auto mt-10 max-w-3xl text-base leading-relaxed md:text-lg">
          {children}
        </article>
      </div>
    </>
  );
}
