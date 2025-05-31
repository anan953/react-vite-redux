import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

type SpinnerSize = 'small' | 'medium' | 'large';

const getSpinnerSize = (size: SpinnerSize) => {
  switch (size) {
    case 'small':
      return '0.75rem';
    case 'medium':
      return '1rem';
    case 'large':
      return '1.5rem';
    default:
      return '1rem';
  }
};

const getBorderWidth = (size: SpinnerSize) => {
  switch (size) {
    case 'small':
      return '1.5px';
    case 'medium':
      return '2px';
    case 'large':
      return '3px';
    default:
      return '2px';
  }
};

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Spinner = styled.div<{ size?: SpinnerSize }>`
  width: ${props => getSpinnerSize(props.size || 'medium')};
  height: ${props => getSpinnerSize(props.size || 'medium')};
  border-radius: 50%;
  border-top: ${props => getBorderWidth(props.size || 'medium')} solid
    ${props => props.theme.colors.primary};
  border-bottom: ${props => getBorderWidth(props.size || 'medium')} solid
    ${props => props.theme.colors.primary};
  animation: ${spin} 1s linear infinite;
`;
