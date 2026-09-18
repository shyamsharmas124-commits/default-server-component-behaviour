// components/ProductCard.tsx (Server Component - no 'use client')
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '1.25rem',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <h2 style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0', color: '#1f2937' }}>
          {product.name}
        </h2>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', margin: '0 0 1rem 0' }}>
          ${product.price}
        </p>
      </div>
      {/* Use the Client Component here */}
      <div>
        <AddToCartButton productId={product.id} productName={product.name} />
      </div>
    </div>
  );
}