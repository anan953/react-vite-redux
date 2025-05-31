import { memo, useCallback } from 'react';
import styled from 'styled-components';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { LoadingSpinner } from '@/components/common/Loading/Spinner';

const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

interface SearchBarProps {
  value: string;
  isLoading: boolean;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = memo(
  ({ value, isLoading, onChange, onSearch }) => {
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !isLoading) {
          onSearch();
        }
      },
      [isLoading, onSearch]
    );

    return (
      <SearchContainer>
        <Input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter GitHub username"
          disabled={isLoading}
        />
        <Button onClick={onSearch} $isLoading={isLoading} disabled={isLoading}>
          {isLoading ? (
            <>
              <LoadingSpinner size="small" />
            </>
          ) : (
            'Search'
          )}
        </Button>
      </SearchContainer>
    );
  }
);

SearchBar.displayName = 'SearchBar';
