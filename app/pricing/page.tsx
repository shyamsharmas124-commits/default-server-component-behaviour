// app/pricing/page.tsx
import { refreshPricing } from './actions';

// ISR: This page will be statically generated at build time,
// but it will revalidate in the background every 60 seconds when visited.
export const revalidate = 60;

async function getPricingData() {
  // Simulate an API call or database query
  return {
    generatedAt: new Date().toISOString(),
    items: [
      { id: 1, name: 'Basic Plan', price: '$10/mo' },
      { id: 2, name: 'Pro Plan', price: '$29/mo' },
      { id: 3, name: 'Enterprise', price: 'Contact Us' },
    ],
  };
}

export default async function PricingPage() {
  const data = await getPricingData();

  return (
    <main style={{ padding: '2.5rem', maxWidth: '800px', margin: '2rem auto', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
      <header style={{ marginBottom: '2rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#111827', margin: '0 0 0.5rem 0' }}>Pricing Plans</h1>
        <p style={{ color: '#6b7280', margin: 0 }}>This page uses Incremental Static Regeneration (ISR).</p>
      </header>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {data.items.map((item) => (
          <div key={item.id} style={{ padding: '1.5rem', border: '1px solid #e5e7eb', borderRadius: '8px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.25rem', color: '#374151', margin: '0 0 1rem 0' }}>{item.name}</h2>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb', margin: 0 }}>{item.price}</p>
          </div>
        ))}
      </div>

      <div style={{ padding: '1.5rem', backgroundColor: '#f3f4f6', borderRadius: '8px', borderLeft: '4px solid #3b82f6', color: '#1f2937' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Stale-While-Revalidate Demonstration</h3>
        <p style={{ margin: '0 0 1rem 0' }}>
          <strong>Last Generated At:</strong> <code style={{ backgroundColor: '#e5e7eb', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>{data.generatedAt}</code>
        </p>
        <p style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: '1.5', marginBottom: '1rem' }}>
          This timestamp updates automatically in the background every 60 seconds (<code>revalidate = 60</code>). 
          For urgent updates (like an admin changing a price), we can trigger on-demand revalidation using <code>revalidatePath</code>.
        </p>
        
        <form action={refreshPricing}>
          <button 
            type="submit" 
            style={{ 
              padding: '0.75rem 1.5rem', 
              backgroundColor: '#2563eb', 
              color: 'white', 
              border: 'none', 
              borderRadius: '6px', 
              fontWeight: 'bold', 
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            Force On-Demand Revalidation
          </button>
        </form>
      </div>
    </main>
  );
}