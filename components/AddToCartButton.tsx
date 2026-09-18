'use client';

import { useState } from 'react';

interface AddToCartButtonProps {
  productId: number;
  productName: string;
}

export default function AddToCartButton({
  productId,
  productName,
}: AddToCartButtonProps) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(true);
    console.log(`Added ${productName} (ID: ${productId}) to cart`);
    // In a real app, this would call an API or update global cart state
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={`Add ${productName} to cart`}
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: added ? '#22c55e' : '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: '500',
        transition: 'background-color 0.2s',
      }}
    >
      {added ? '✓ Added!' : 'Add to Cart'}
    </button>
  );
}