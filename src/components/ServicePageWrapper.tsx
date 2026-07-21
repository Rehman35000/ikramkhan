import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

export default function ServicePageWrapper({ children }: { children: ReactNode }) {
  return (
    <main style={{ minHeight: '100vh', background: '#09090b' }}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
