'use client';

import Link from 'next/link';

function Footer() {
  return (
    <footer className="z-50 h-20  relative">
      <div className="border-t-[1px] w-full border-slate-500"></div>
      <div className=" w-full flex items-center  justify-end mx-auto px-4 absolute bottom-0 h-full">
        <div className="gap-4 flex">
          <Link
            className="text-white hover:text-red-300"
            href={'/homepage/impressum'}
          >
            Impressum
          </Link>
          <Link
            className="text-white hover:text-red-300"
            href={'/homepage/datenschutzerklaerung'}
          >
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
