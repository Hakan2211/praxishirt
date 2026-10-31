import Link from 'next/link';
import { HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import { NAV_LINKS, PRACTICE } from '@/components/ui/navigation/navLinks';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-brand-deep/80 backdrop-blur-md">
      <div className="container mx-auto grid gap-10 px-5 py-12 text-sm text-zinc-300 md:grid-cols-3 md:px-10 lg:px-16">
        <div>
          <p className="font-display text-lg tracking-[0.2em] text-white">
            <span className="text-brand-rose">P</span>raxis
            <span className="text-brand-rose">H</span>irt
          </p>
          <p className="mt-3 max-w-xs leading-relaxed text-zinc-400">
            {PRACTICE.name} in Bruchsal.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-rose">
            Kontakt
          </p>
          <a
            href={PRACTICE.phoneHref}
            className="flex items-center gap-2 transition-colors hover:text-white"
          >
            <HiOutlinePhone className="shrink-0 text-brand-rose" />
            {PRACTICE.phoneDisplay}
          </a>
          <a
            href={PRACTICE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 transition-colors hover:text-white"
          >
            <HiOutlineLocationMarker className="mt-0.5 shrink-0 text-brand-rose" />
            <span>
              {PRACTICE.street}, {PRACTICE.city}
            </span>
          </a>
        </div>

        <nav aria-label="Fußzeile" className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-rose">
            Navigation
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="transition-colors hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/homepage/impressum"
                className="transition-colors hover:text-white"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/homepage/datenschutzerklaerung"
                className="transition-colors hover:text-white"
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {PRACTICE.owner} · Praxis Hirt
      </div>
    </footer>
  );
}
