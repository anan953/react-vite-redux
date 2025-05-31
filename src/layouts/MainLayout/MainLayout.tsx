import type { ReactNode } from 'react';
import { LayoutContainer, Header, Nav, Logo, Main, MainContent } from './styled';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/config/routes';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <LayoutContainer>
      <Header>
        <Nav>
          <Link to={ROUTES.HOME}>
            <Logo>GitHub User Search</Logo>
          </Link>
        </Nav>
      </Header>

      <Main>
        <MainContent>{children}</MainContent>
      </Main>
    </LayoutContainer>
  );
}
