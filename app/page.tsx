"use client" ;
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Example } from '@/components/component/example';
import { Example2 } from '@/components/component/example2';
import { Dashboard } from '@/components/component/dashboard';
import { Home } from '@/components/component/home';
interface UserData {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
}
export default function Page() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.post('/api/webhooks');
        const userData = response.data;
        setUserData(userData);
        console.log(userData)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
  }, []);
  return (
      <Home/>
    
  );
}
