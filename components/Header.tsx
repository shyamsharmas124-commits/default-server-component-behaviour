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
        <Link href="/api/tasks" style={{ color: '#fb923c', textDecoration: 'none', fontWeight: 'bold' }}>2.27: Zod</Link>
        <Link href="/api/users" style={{ color: '#14b8a6', textDecoration: 'none' }}>2.26: Handlers</Link>
        <Link href="/account" style={{ color: '#ec4899', textDecoration: 'none' }}>2.25: Sequential</Link>
        <Link href="/dashboard" style={{ color: '#22c55e', textDecoration: 'none' }}>2.24: Parallel</Link>
        <Link href="/pricing" style={{ color: '#ef4444', textDecoration: 'none' }}>2.23: ISR</Link>
      </nav>
      {/* Only the toggle is interactive. The rest of the Header stays on the Server. */}
      <ThemeToggle />
    </header>
  );
}