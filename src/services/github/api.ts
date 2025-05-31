import type { AxiosError, InternalAxiosRequestConfig } from 'axios';
import type { GitHubError } from './type';
import { APIClient, type APIConfig } from '../base/api';
import {
  userSchema,
  repositoriesSchema,
  type ValidatedUser,
  type ValidatedRepositories,
} from './validation';

const GITHUB_API_BASE_URL = 'https://api.github.com';

class GitHubApiClient extends APIClient {
  constructor() {
    const config: APIConfig = {
      baseURL: GITHUB_API_BASE_URL,
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    };
    super(config);
  }

  protected setupAuthInterceptor(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    if (token && config.headers) {
      config.headers.Authorization = `token ${token}`;
    }
    return config;
  }

  protected handleError(error: AxiosError): Error {
    if (error.response?.data) {
      const githubError = error.response.data as GitHubError;
      return new Error(githubError.message || 'GitHub API request failed');
    }
    return new Error(error.message || 'An unknown error occurred');
  }

  async getUser(username: string): Promise<ValidatedUser> {
    const response = await this.get(`/users/${username}`);
    return userSchema.validate(response, { stripUnknown: true });
  }

  async getUserRepos(username: string): Promise<ValidatedRepositories> {
    const response = await this.get(`/users/${username}/repos`);
    return repositoriesSchema.validate(response, { stripUnknown: true });
  }
}

export const githubApi = new GitHubApiClient();
