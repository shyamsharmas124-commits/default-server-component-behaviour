// components/Header.tsx (Server Component)
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header style={{ 
      backgroundColor: '#1f2937', 
      color: '#ffffff', 
      padding: '1rem 2rem', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'center' }}>
        <Link href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>Next.js Masterclass</Link>
        <Link href="/pricing" style={{ color: '#ef4444', textDecoration: 'none', fontWeight: 'bold' }}>2.23: ISR</Link>
        <Link href="/blog/hello-world" style={{ color: '#f59e0b', textDecoration: 'none' }}>2.21: SSG</Link>
        <Link href="/todos" style={{ color: '#a78bfa', textDecoration: 'none' }}>2.19: Interleaving</Link>
        <Link href="/products" style={{ color: '#38bdf8', textDecoration: 'none' }}>2.18: Selective</Link>
      </nav>
      {/* Only the toggle is interactive. The rest of the Header stays on the Server. */}
      <ThemeToggle />
    </header>
  );
}