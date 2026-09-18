// components/Footer.tsx (Server Component)
import CounterButton from './CounterButton';

export default function Footer() {
  return (
    <footer style={{ 
      padding: '2rem', 
      borderTop: '1px solid #e5e7eb', 
      backgroundColor: '#ffffff', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginTop: '3rem',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      <div style={{ color: '#4b5563' }}>
        <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Server Component Footer</p>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>This entire footer is static HTML rendered on the server.</p>
      </div>
      
      {/* Only this button is interactive. */}
      <CounterButton />
    </footer>
  );
}