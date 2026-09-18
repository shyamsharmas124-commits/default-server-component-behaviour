import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Server & Client Components Masterclass',
  description: 'Demonstrating Default Server Components, Client Component Marking, and Interleaving patterns in Next.js App Router',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, -apple-system, sans-serif', margin: 0, padding: 0, backgroundColor: '#f9fafb', color: '#111827' }}>
        <header style={{ backgroundColor: '#1f2937', color: '#ffffff', padding: '1rem 2rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <nav style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
            <a href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>Next.js Masterclass</a>
            <a href="/todos" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: '600' }}>2.19: Interleaving (New!)</a>
            <a href="/products" style={{ color: '#38bdf8', textDecoration: 'none' }}>2.18: Selective Client</a>
            <a href="/products-all-client" style={{ color: '#f87171', textDecoration: 'none' }}>2.18: All-Client (Bloat)</a>
            <a href="/articles" style={{ color: '#cbd5e1', textDecoration: 'none' }}>2.17: Articles (RSC)</a>
          </nav>
        </header>
        <div style={{ maxWidth: '1000px', margin: '0 auto', minHeight: '80vh', padding: '1rem' }}>
          {children}
        </div>
      </body>
    </html>
  );
}