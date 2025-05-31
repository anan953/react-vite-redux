import { useState, useCallback, useEffect } from 'react';
import type { Repository } from '../types';
import { githubApi } from '@/services/github/api';

export const useRepositories = (username: string) => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRepos = useCallback(async () => {
    if (!username) return;

    setIsLoading(true);
    setError(null);

    try {
      const data = await githubApi.getUserRepos(username);
      setRepos(data ?? []);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      setRepos([]);
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return { repos, error, isLoading, refetch: fetchRepos };
};
