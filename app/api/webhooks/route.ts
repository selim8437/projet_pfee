import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { createUser } from '@/app/lib/users';
import { User } from '@/app/lib/types/user';
export async function POST(req: Request) {
  const WEBHOOK_SECRET ='whsec_v2ECDlAITDr2SrzvgOPlho08ZGkchTkh';

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }

  const headerPayload = headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occurred -- no svix headers', {
      status: 400
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

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

  const { id } = evt.data;
  const eventType = evt.type;

  if (eventType === 'user.created') {
    const { id, first_name, last_name } = evt.data;
    const email = evt.data.email_addresses[0].email_address;
    const firstName=first_name ;
    const lastName=last_name ;

    const storeid=null ;
    const type='B' ;

    // Prepare data to send to another endpoint
    const userData :User= { id,storeid,type, email, firstName, lastName };
  console.log('knkjkjkj') ;
    // Send user data to another endpoint
    try {
      const {message}=await createUser(userData);
      console.log(message) ;
    
    } catch (error) {
      console.error('Error sending user data to another endpoint:', error);
      return new Response('Error occurred', {
        status: 500
      });
    }
  }

  console.log(`Webhook with an ID of ${id} and type of ${eventType}`);
  console.log('Webhook body:', body);

  return new Response('', { status: 200 });
}
