import { memo, useCallback } from 'react';
import styled from 'styled-components';
import type { UserData } from '../../types';
import { UserStats } from '../molecules/UserStats';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid #e1e4e8;
  object-fit: cover;
`;

const UserName = styled.h2`
  margin: 0 0 0.5rem 0;
  color: #24292e;
  font-size: 1.5rem;
`;

const UserLogin = styled.p`
  color: #586069;
  margin: 0 0 1rem 0;
  font-size: 1rem;
`;

const Bio = styled.p`
  color: #24292e;
  margin: 0 0 1rem 0;
  line-height: 1.5;
`;

const ProfileLink = styled.a`
  display: inline-block;
  color: #0366d6;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

interface UserCardProps {
  user: UserData;
  onClick: () => void;
}

export const UserCard: React.FC<UserCardProps> = memo(({ user, onClick }) => {
  const handleLinkClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <Card onClick={onClick}>
      <Avatar src={user.avatar_url} alt={user.login} />
      <UserName>{user.name}</UserName>
      <UserLogin>@{user.login}</UserLogin>
      {user.bio && <Bio>{user.bio}</Bio>}

      <UserStats
        stats={{
          public_repos: user.public_repos,
          followers: user.followers,
          following: user.following,
        }}
      />

      <ProfileLink
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleLinkClick}
      >
        View Profile on GitHub →
      </ProfileLink>
    </Card>
  );
});

UserCard.displayName = 'UserCard';
