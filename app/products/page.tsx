// app/products/page.tsx (Server Component - no 'use client')
import ProductCard from '@/components/ProductCard';

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 699 },
  { id: 3, name: 'Tablet', price: 399 },
];

export default function ProductsPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '2rem', color: '#111827', margin: '0 0 0.5rem 0' }}>
          Products (Server Component Page)
        </h1>
        <p style={{ color: '#4b5563', margin: 0 }}>
          This page and the <code>ProductCard</code>s are Server Components (no <code>&apos;use client&apos;</code>). Only the individual <code>AddToCartButton</code> is a Client Component.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}