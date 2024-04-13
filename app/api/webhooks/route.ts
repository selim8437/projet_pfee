import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import axios from 'axios';

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', {
      status: 400
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occurred', {
      status: 400
    });
  }

  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === 'user.created') {
    // Extract user information from the event data
    const { id, first_name, last_name } = evt.data;
    const email = evt.data.email_addresses[0].email_address;

    // Now you can use this information as needed
    console.log('User created with email:', email);
    console.log('User ID:', id);
    console.log('First name:', first_name);
    console.log('Last name:', last_name);

    // You can perform any additional actions with this user information here
  }

  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
  console.log('Webhook body:', body);

  // Extract additional data from the independent POST request
  const additionalData = await req.json();

  // Now you can use the additional data
  console.log('Additional data from independent POST request:', additionalData);

  // Handle the additional data as needed

  return new Response('', { status: 200 });
}
export async function GET(req: Request) {
  try {
    // Extract the selectedOption query parameter from the request URL
    const payload = await req.json();
    const body = JSON.stringify(payload);
    // Do something with the selected option
    console.log('Selected option:', body);

    // You can perform any further processing with the selected option here

    // Return a response indicating success
    return {
      status: 200,
      body: { message: 'Selected option received successfully' }
    };
  } catch (error) {
    // Handle errors
    console.error('Error handling selected option:', error);

    // Return an error response
    return {
      status: 500,
      body: { error: 'Internal server error' }
    };
  }
}

