import { memo } from 'react';
import { Spinner, SpinnerContainer } from './styled';

type SpinnerSize = 'small' | 'medium' | 'large';

interface LoadingSpinnerProps {
  size?: SpinnerSize;
}

export const LoadingSpinner = memo(({ size = 'medium' }: LoadingSpinnerProps) => {
  return (
    <SpinnerContainer>
      <Spinner size={size} />
    </SpinnerContainer>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';
