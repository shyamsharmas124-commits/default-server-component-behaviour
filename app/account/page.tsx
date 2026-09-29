import { notFound } from 'next/navigation';
import React from 'react';

// Force dynamic so we can read simulated searchParams for error testing if needed
export const dynamic = 'force-dynamic';

// --- Data Loaders ---

async function getUserByEmail(email: string) {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (email === 'notfound@example.com') {
    return null;
  }
  
  return { id: 'usr_123', name: 'Ava', email };
}

async function getOrdersForUser(userId: string) {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  if (userId === 'fail') {
    throw new Error('Database connection failed');
  }
  
  return [
    { id: 'ord_1', total: '$120.00', date: '2023-10-01' },
    { id: 'ord_2', total: '$45.50', date: '2023-10-15' },
  ];
}

async function getSitePreferences() {
  await new Promise(resolve => setTimeout(resolve, 600));
  return { theme: 'dark', notifications: true };
}

export default async function AccountPage({
  searchParams,
}: {
  searchParams: { email?: string; failOrders?: string };
}) {
  const email = searchParams.email || 'ava@example.com';
  const shouldFailOrders = searchParams.failOrders === 'true';

  // 1. Parallelize Unrelated Data
  // Start the independent fetch early so it runs concurrently with the user fetch.
  // Preferences don't rely on the user ID, so we don't await it sequentially.
  const preferencesPromise = getSitePreferences();

  // 2. Sequential Dependent Fetch
  const user = await getUserByEmail(email);

  // 3. Error Handling Step 1: User missing
  // If user is null, we can't fetch orders anyway, so we halt the route early.
  if (!user) {
    notFound();
  }

  let orders = null;
  let ordersError = null;

  try {
    // We only wait for orders and preferences here.
    // Required: getOrdersForUser strictly needs user.id from the first fetch.
    // This is a genuine sequential dependency.
    const [fetchedOrders, preferences] = await Promise.all([
      getOrdersForUser(shouldFailOrders ? 'fail' : user.id),
      preferencesPromise,
    ]);
    
    orders = fetchedOrders;
  } catch (err) {
    // 4. Error Handling Step 2: Dependent fetch failure
    // If orders fail, we still have the user profile. We scope the failure.
    ordersError = 'Failed to load order history. Please try again later.';
  }

  return (
    <main style={{ padding: '2.5rem', maxWidth: '800px', margin: '2rem auto', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
      <header style={{ marginBottom: '2rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#111827', margin: '0 0 0.5rem 0' }}>Account Settings</h1>
        <p style={{ color: '#6b7280', margin: 0 }}>Loaded using Sequential Data Fetching</p>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Profile Information</h2>
        <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Internal ID:</strong> {user.id}</p>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0' }}>Order History</h2>
        {ordersError ? (
          <div style={{ padding: '1rem', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '6px' }}>
            <p style={{ margin: 0 }}><strong>Error:</strong> {ordersError}</p>
          </div>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {orders?.map(order => (
              <li key={order.id} style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '6px', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 'bold' }}>{order.id}</span> &mdash; {order.total} on {order.date}
              </li>
            ))}
          </ul>
        )}
      </section>

      <div style={{ padding: '1.5rem', backgroundColor: '#eff6ff', borderLeft: '4px solid #3b82f6', color: '#1e3a8a' }}>
        <h3 style={{ margin: '0 0 0.5rem 0' }}>Testing Error States</h3>
        <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
          <li><a href="/account?email=notfound@example.com" style={{ color: '#2563eb' }}>Test Missing User (404 Not Found)</a></li>
          <li><a href="/account?failOrders=true" style={{ color: '#2563eb' }}>Test Order Fetch Failure (Scoped Error)</a></li>
          <li><a href="/account" style={{ color: '#2563eb' }}>Reset to Normal</a></li>
        </ul>
      </div>
    </main>
  );
}