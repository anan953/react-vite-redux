import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentWrapper = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: 2rem;
`;

export const HomeLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color, #3b82f6);
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--primary-dark-color, #2563eb);
  }
`;
