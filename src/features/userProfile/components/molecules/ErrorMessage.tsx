import styled from 'styled-components';

const StyledErrorMessage = styled.p`
  color: #cb2431;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding: 0.75rem;
  background-color: #ffeef0;
  border-radius: 6px;
  border: 1px solid #f97583;
  margin-bottom: 0.5rem;
`;

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <StyledErrorMessage>{message}</StyledErrorMessage>
);
