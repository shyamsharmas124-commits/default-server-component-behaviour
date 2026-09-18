'use client';

import { useState } from 'react';

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 699 },
  { id: 3, name: 'Tablet', price: 399 },
];

export default function ProductsAllClientPage() {
  const [addedMap, setAddedMap] = useState<Record<number, boolean>>({});

  const handleAdd = (id: number, name: string) => {
    setAddedMap((prev) => ({ ...prev, [id]: true }));
    console.log(`Added ${name} (Client Component Page)`);
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  return (
    <main style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ marginBottom: '1.5rem', backgroundColor: '#fee2e2', border: '1px solid #ef4444', padding: '1rem', borderRadius: '6px' }}>
        <h1 style={{ fontSize: '1.8rem', color: '#991b1b', margin: '0 0 0.5rem 0' }}>
          Products (Entire Page as Client Component - Anti-Pattern)
        </h1>
        <p style={{ color: '#7f1d1d', margin: 0 }}>
          This page has <code>&apos;use client&apos;</code> at the root. The entire page structure, product data, and all components ship as JavaScript to the browser, bloating client bundles.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              padding: '1.25rem',
              borderRadius: '8px',
              backgroundColor: '#ffffff',
            }}
          >
            <h2>{product.name}</h2>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>${product.price}</p>
            <button
              onClick={() => handleAdd(product.id, product.name)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: addedMap[product.id] ? '#22c55e' : '#dc2626',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              {addedMap[product.id] ? '✓ Added!' : 'Add to Cart (Bloated)'}
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}