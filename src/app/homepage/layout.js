import Navbar from '@/components/ui/navigation/Navbar';
import React from 'react';

export default function HomepageLayout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
