import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
let userData: any = null; // Declare a variable to store user data globally

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
  let userData: any = null; // Initialize userData variable to store user information

  if (eventType === 'user.created') {
    // Extract user information from the event data
    
    const { id, first_name, last_name } = evt.data;
    const email = evt.data.email_addresses[0].email_address;

    // Store user information globally
    userData = { id, email, first_name, last_name };
  }


  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
  console.log('Webhook body:', body);

  // Extract additional data from the independent POST request

  // Now you can use the additional data

  // Handle the additional data as needed

  return new Response('', { status: 200 });
}
export async function GET(req: Request) {
  if (userData) {
    // Return the user data in the response
    return new Response(JSON.stringify(userData), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    return new Response('User data not available', {
      status: 404,
    });
  }
}