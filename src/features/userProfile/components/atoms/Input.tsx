import styled from 'styled-components';

export const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid #e1e4e8;
  border-radius: 6px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #0366d6;
  }

  &:disabled {
    background-color: #f6f8fa;
    cursor: not-allowed;
  }
`;
