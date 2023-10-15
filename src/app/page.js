'use client';

import Models from '@/components/intro/models/Models';

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-t from-slate-100 via-blue-100 to-sky-200 h-screen">
        {/* jumbo */}

        <div className="flex w-full flex-col items-center justify-center p-12 text-center translate-y-full translate-x-60  ">
          <span className="w-full text-2xl">Willkommen bei</span>
          <h1 className="my-4 text-5xl font-bold leading-tight">Praxis Hirt</h1>
          <p className="mb-8 text-2xl leading-normal">
            Wo Fachkompetenz und Fürsorge eine Brücke schlagen
          </p>
        </div>

        <Models />
      </main>
    </>
  );
}
