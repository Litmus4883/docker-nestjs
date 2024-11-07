'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from '@prisma/client';

export function useQueryUser() {
  const [data, setData] = useState<Omit<User, 'password'> | null>(null);
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get<Omit<User, 'password'>>(
          `${process.env.NEXT_PUBLIC_API_URL}/users/me`,
        );
        const userData = await response.data;
        setData(userData);
        setStatus('success');
      } catch (error) {
        setStatus('error');
        if (axios.isAxiosError(error) && error.response) {
          setError(error.response.data.message || 'An error occurred');
        } else {
          setError('An unexpected error occurred');
        }
      }
    }
    fetchUser();
  }, []);

  return { data, status, error };
}
