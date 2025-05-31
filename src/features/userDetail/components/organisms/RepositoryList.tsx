import { memo } from 'react';
import styled from 'styled-components';
import type { Repository } from '../../types';
import { RepositoryCard } from '../molecules/RepositoryCard';
import { LoadingSpinner } from '@/components/common/Loading/Spinner';
import { ErrorMessage } from '../molecules/ErrorMessage';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Header = styled.header`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 0.5rem 0;
`;

const Subtitle = styled.p`
  color: #586069;
  margin: 0;
  font-size: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #586069;
  background: #f6f8fa;
  border-radius: 6px;
  border: 1px solid #e1e4e8;
`;

interface RepositoryListProps {
  username: string;
  repos: Repository[];
  isLoading: boolean;
  error: string | null;
}

export const RepositoryList: React.FC<RepositoryListProps> = memo(
  ({ username, repos, isLoading, error }) => {
    if (isLoading) {
      return (
        <Container>
          <LoadingSpinner size="large" />
        </Container>
      );
    }

    if (error) {
      return (
        <Container>
          <ErrorMessage message={error} />
        </Container>
      );
    }

    return (
      <Container>
        <Header>
          <Title>{username}'s Repositories</Title>
          <Subtitle>Public repositories on GitHub</Subtitle>
        </Header>

        {repos.length === 0 ? (
          <EmptyState>
            <p>No repositories found</p>
          </EmptyState>
        ) : (
          <Grid>
            {repos.map(repo => (
              <RepositoryCard key={repo.id} repo={repo} />
            ))}
          </Grid>
        )}
      </Container>
    );
  }
);

RepositoryList.displayName = 'RepositoryList';
