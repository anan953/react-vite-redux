export interface UserData {
  avatar_url: string;
  login: string;
  name?: string | null;
  bio?: string | null;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

export interface UserStats {
  public_repos: number;
  followers: number;
  following: number;
}
