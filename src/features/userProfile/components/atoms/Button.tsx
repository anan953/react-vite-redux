import styled from 'styled-components';

interface ButtonProps {
  $isLoading?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: ${({ $isLoading }) => ($isLoading ? '#94d3a2' : '#2ea44f')};
  border: none;
  border-radius: 6px;
  cursor: ${({ $isLoading }) => ($isLoading ? 'wait' : 'pointer')};
  transition: all 0.2s;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover:not(:disabled) {
    background-color: ${({ $isLoading }) => ($isLoading ? '#94d3a2' : '#2c974b')};
  }

  &:active:not(:disabled) {
    background-color: ${({ $isLoading }) => ($isLoading ? '#94d3a2' : '#2a8f47')};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
