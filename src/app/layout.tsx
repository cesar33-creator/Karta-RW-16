// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Karang Taruna RW 16',
  description: 'Website resmi Karang Taruna RW 16',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
