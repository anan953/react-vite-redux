import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useRepositories } from './hooks/useRepositories';
import { RepositoryList } from './components/organisms/RepositoryList';

function UserDetail() {
  const { username } = useParams<{ username: string }>();
  const { repos, error, isLoading } = useRepositories(username || '');

  if (!username) {
    return null;
  }

  return <RepositoryList username={username} repos={repos} isLoading={isLoading} error={error} />;
}

export default memo(UserDetail);
