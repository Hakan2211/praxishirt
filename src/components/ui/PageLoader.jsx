import Image from 'next/image';

export default function PageLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-6 bg-gradient-to-b from-brand-navy to-brand-deep text-zinc-200"
    >
      <div className="relative">
        <span className="absolute inset-0 animate-ping rounded-full bg-brand-rose/20" />
        <Image
          src="/logo/LogoPraxisHirt.png"
          width={88}
          height={88}
          alt=""
          priority
          className="relative animate-pulse"
        />
      </div>
      <p className="font-display text-lg tracking-wide">
        Einen Augenblick noch…
      </p>
    </div>
  );
}
