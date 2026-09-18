'use server';

import { revalidatePath } from 'next/cache';

export async function refreshPricing() {
  // Simulate a database update or mutation
  console.log('Simulating pricing update in database...');
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  // On-demand revalidation: invalidate the cache for /pricing immediately
  revalidatePath('/pricing');
}