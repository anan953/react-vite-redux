import styled from 'styled-components';
import type { UserStats as UserStatsType } from '../../types';

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem 0;
  padding: 1rem 0;
  border-top: 1px solid #e1e4e8;
  border-bottom: 1px solid #e1e4e8;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #24292e;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #586069;
`;

interface UserStatsProps {
  stats: UserStatsType;
}

export const UserStats = ({ stats }: UserStatsProps) => (
  <StatsContainer>
    <StatItem>
      <StatValue>{stats.public_repos}</StatValue>
      <StatLabel>Repositories</StatLabel>
    </StatItem>
    <StatItem>
      <StatValue>{stats.followers}</StatValue>
      <StatLabel>Followers</StatLabel>
    </StatItem>
    <StatItem>
      <StatValue>{stats.following}</StatValue>
      <StatLabel>Following</StatLabel>
    </StatItem>
  </StatsContainer>
);
