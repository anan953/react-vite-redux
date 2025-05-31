export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description?: string | null;
  stargazers_count: number;
  language?: string | null;
  updated_at: string;
  forks_count: number;
}

export interface GitHubError {
  message: string;
  documentation_url?: string;
}
