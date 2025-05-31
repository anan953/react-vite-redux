import styled from 'styled-components';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const Logo = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavLink = styled.a`
  color: #4b5563;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #111827;
  }
`;

export const Main = styled.main`
  flex-grow: 1;
`;

export const MainContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 640px) {
    padding: 2rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;
