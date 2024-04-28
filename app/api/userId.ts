// pages/api/current-user.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { currentUser } from '@clerk/nextjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const user = await currentUser();
    const userId = user ? user.id : null;
    res.status(200).json({ userId });
  } catch (error) {
    console.error('Error fetching current user:', error);
    res.status(500).json({ error: 'An error occurred while fetching the current user' });
  }
}
