import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const userData = req.body;

      // Here you can process the received user data as needed
      console.log('Received user data:', userData);

      // Send a response indicating successful receipt of user data
      res.status(200).json({ message: 'User data received successfully' });
    } catch (error) {
      console.error('Error processing user data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
