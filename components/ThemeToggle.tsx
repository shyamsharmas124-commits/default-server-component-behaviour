'use client';
import { useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: isDark ? '#374151' : '#f3f4f6',
        color: isDark ? '#f9fafb' : '#111827',
        border: '1px solid ' + (isDark ? '#4b5563' : '#d1d5db'),
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'all 0.2s',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}