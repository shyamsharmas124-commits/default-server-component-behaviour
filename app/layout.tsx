import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Next.js Server & Client Components Masterclass',
  description: 'Demonstrating Default Server Components, Client Component Marking, Interleaving, and Leaf Node patterns.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, -apple-system, sans-serif', margin: 0, padding: 0, backgroundColor: '#f9fafb', color: '#111827' }}>
        <Header />
        <main style={{ maxWidth: '1000px', margin: '0 auto', minHeight: '80vh', padding: '1rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}