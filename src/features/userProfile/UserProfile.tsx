import { memo, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useGitHubUser } from './hooks/useGitHubUser';
import { SearchBar } from './components/molecules/SearchBar';
import { ErrorMessage } from './components/molecules/ErrorMessage';
import { UserCard } from './components/organisms/UserCard';
import { ROUTES } from '@/config/routes';

function UserProfile() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const { userData, error, isLoading, fetchUser } = useGitHubUser();

  const handleSearch = useCallback(() => {
    fetchUser(username);
  }, [fetchUser, username]);

  const handleCardClick = useCallback(() => {
    if (userData) {
      navigate(`${ROUTES.USER_DETAIL.replace(':username', userData.login)}`);
    }
  }, [navigate, userData]);

  return (
    <Container>
      <SearchBar
        value={username}
        isLoading={isLoading}
        onChange={setUsername}
        onSearch={handleSearch}
      />

      {error && <ErrorMessage message={error} />}

      {userData && <UserCard user={userData} onClick={handleCardClick} />}
    </Container>
  );
}

export default memo(UserProfile);

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 0 1rem;
`;
