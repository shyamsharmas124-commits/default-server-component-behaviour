'use client';

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from './actions';

// A tiny submit button that uses useFormStatus for pending state
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button 
      type="submit" 
      disabled={pending}
      style={{
        padding: '0.75rem 1.5rem',
        backgroundColor: pending ? '#9ca3af' : '#2563eb',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        fontWeight: 'bold',
        cursor: pending ? 'not-allowed' : 'pointer'
      }}
    >
      {pending ? 'Sending to Server...' : 'Send Message'}
    </button>
  );
}

export default function ContactPage() {
  // Wire up the Server Action with useFormState to handle the result
  const [state, formAction] = useFormState(submitContactForm, null);

  return (
    <main style={{ padding: '2.5rem', maxWidth: '600px', margin: '2rem auto', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
      <header style={{ marginBottom: '2rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#111827', margin: '0 0 0.5rem 0' }}>Contact Us</h1>
        <p style={{ color: '#6b7280', margin: 0 }}>This form natively invokes a Server Action without a manual fetch.</p>
      </header>

      {state?.error && (
        <div style={{ padding: '1rem', marginBottom: '1.5rem', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '6px' }}>
          <strong>Error:</strong> {state.error}
        </div>
      )}

      {state?.success && (
        <div style={{ padding: '1rem', marginBottom: '1.5rem', backgroundColor: '#dcfce7', color: '#166534', borderRadius: '6px' }}>
          <strong>Success!</strong> {state.message} (Reference ID: {state.id})
        </div>
      )}

      <form action={formAction} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="name" style={{ fontWeight: 'bold' }}>Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            style={{ padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
          />
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="message" style={{ fontWeight: 'bold' }}>Your Message</label>
          <textarea 
            id="message" 
            name="message" 
            required 
            rows={4}
            style={{ padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '6px' }}
          />
        </div>

        <SubmitButton />
      </form>
    </main>
  );
}