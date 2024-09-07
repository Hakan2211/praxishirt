import Footer from '@/components/footer/footer';
import Navbar from '@/components/ui/navigation/Navbar';
import React from 'react';

export const meta = {
  title: 'Filiz Hirt - Homepage',
  description: 'Filiz Hirt - Homepage - Praxis Hirt',
};

export default function HomepageLayout({ children }) {
  return (
    <div className="">
      <Navbar />
      <main className="">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
