// src/app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



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
