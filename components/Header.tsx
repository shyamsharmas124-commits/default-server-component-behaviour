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
        <Link href="/todos" style={{ color: '#a78bfa', textDecoration: 'none' }}>2.19: Interleaving</Link>
        <Link href="/products" style={{ color: '#38bdf8', textDecoration: 'none' }}>2.18: Selective Client</Link>
        <Link href="/products-all-client" style={{ color: '#f87171', textDecoration: 'none' }}>2.18: All-Client</Link>
        <Link href="/articles" style={{ color: '#cbd5e1', textDecoration: 'none' }}>2.17: RSC</Link>
        <span style={{ backgroundColor: '#10b981', color: '#ffffff', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>2.20: Leaf Nodes</span>
      </nav>
      {/* Only the toggle is interactive. The rest of the Header stays on the Server. */}
      <ThemeToggle />
    </header>
  );
}