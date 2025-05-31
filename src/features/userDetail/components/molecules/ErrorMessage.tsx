import styled from 'styled-components';

const StyledErrorMessage = styled.div`
  color: #cb2431;
  font-size: 0.9rem;
  margin: 1rem 0;
  padding: 1rem;
  background-color: #ffeef0;
  border-radius: 6px;
  border: 1px solid #f97583;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <StyledErrorMessage>
    <svg viewBox="0 0 16 16" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
      />
    </svg>
    {message}
  </StyledErrorMessage>
);
