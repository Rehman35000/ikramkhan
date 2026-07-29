'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';

export default function ServicePageWrapper({ children }: { children: ReactNode }) {
  const c = useThemeColors();

  return (
    <main style={{ minHeight: '100vh', background: c.bg }}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
