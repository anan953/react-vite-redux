import { useState, useCallback } from 'react';
import type { UserData } from '../types';
import { githubApi } from '@/services/github/api';

export const useGitHubUser = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = useCallback(async (username: string) => {
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const data = await githubApi.getUser(username);
      setUserData(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      setUserData(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { userData, error, isLoading, fetchUser };
};
