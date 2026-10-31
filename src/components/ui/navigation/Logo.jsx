import Image from 'next/image';

export default function Logo() {
  return (
    <span className="flex items-center gap-3">
      <Image
        src="/logo/LogoPraxisHirt.png"
        width={56}
        height={56}
        alt=""
        priority
        className="h-11 w-11 transition-transform duration-500 group-hover:rotate-6 md:h-14 md:w-14"
      />
      <span className="font-display text-lg tracking-[0.2em] text-white md:text-xl">
        <span className="text-brand-rose">P</span>raxis
        <span className="text-brand-rose">H</span>irt
      </span>
    </span>
  );
}
