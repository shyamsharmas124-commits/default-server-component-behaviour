'use server';

import crypto from 'crypto'; // This proves we are on the server (Node.js built-in)

export async function submitContactForm(prevState: any, formData: FormData) {
  // Wait a second to simulate network/DB delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get('name');
  const message = formData.get('message');

  // Basic server-side validation
  if (!name || !message) {
    return { error: 'Name and message are required.' };
  }

  // Simulate writing to a database using a server-generated ID
  const entryId = crypto.randomUUID();
  
  // This will log in the server terminal, not the browser console
  console.log(`[SERVER] Saved contact message from ${name} with ID: ${entryId}`);

  // Return serializable data to the client
  return { 
    success: true, 
    id: entryId, 
    message: `Thank you, ${name}! Your message has been safely stored.` 
  };
}