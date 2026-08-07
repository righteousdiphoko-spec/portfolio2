import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/interactive/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Tshiamo Diphoko | Modern Full Stack Developer Portfolio',
  description:
    'Portfolio of Tshiamo Diphoko, a Modern Full Stack Developer and Informatics Specialist seeking junior software engineering and internship opportunities.',
  keywords: [
    'Tshiamo Diphoko',
    'Full Stack Developer',
    'Informatics',
    'Software Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'System Analysis',
    'South Africa'
  ],
  authors: [{ name: 'Tshiamo Diphoko' }],
  openGraph: {
    title: 'Tshiamo Diphoko | Modern Full Stack Developer',
    description:
      'Informatics specialist and full-stack software engineer seeking junior engineering & internship opportunities.',
    type: 'website',
    url: 'https://tshiamodiphoko.vercel.app'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
