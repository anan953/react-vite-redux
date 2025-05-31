import styled from 'styled-components';
import type { Repository } from '../../types';

const Card = styled.article`
  background: white;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 1.25rem;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;

  a {
    color: #0366d6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  color: #586069;
  margin: 0 0 1rem 0;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.75rem;
  color: #586069;
`;

const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &::before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => {
      switch (props.color) {
        case 'JavaScript':
          return '#f1e05a';
        case 'TypeScript':
          return '#2b7489';
        case 'Python':
          return '#3572A5';
        case 'Java':
          return '#b07219';
        case 'Go':
          return '#00ADD8';
        default:
          return '#8250df';
      }
    }};
  }
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    width: 14px;
    height: 14px;
  }
`;

interface RepositoryCardProps {
  repo: Repository;
}

export const RepositoryCard: React.FC<RepositoryCardProps> = ({ repo }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Card>
      <Title>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </Title>

      {repo.description && <Description>{repo.description}</Description>}

      <MetaInfo>
        {repo.language && <Language color={repo.language}>{repo.language}</Language>}

        <Stats title="Stars">
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L8 18.347l-6.116 3.21a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-4.078.592 2.95 2.873a.75.75 0 01.216.664l-.696 4.055 3.686-1.937a.75.75 0 01.698 0l3.686 1.937-.696-4.055a.75.75 0 01.216-.664l2.95-2.873-4.078-.592a.75.75 0 01-.564-.41L8 2.694v.001z"
            />
          </svg>
          {repo.stargazers_count}
        </Stats>

        <Stats title="Forks">
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
            />
          </svg>
          {repo.forks_count}
        </Stats>

        <Stats title="Updated">
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M1.643 3.143a.75.75 0 011.414 0l9.176 9.176a.75.75 0 01-1.06 1.06L1.643 4.203a.75.75 0 010-1.06z"
            />
          </svg>
          {formatDate(repo.updated_at)}
        </Stats>
      </MetaInfo>
    </Card>
  );
};
