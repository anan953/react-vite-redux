import { ROUTES } from '@/config/routes';
import { Container, ContentWrapper, Description, HomeLink, Title } from './styled';

const NotFound: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title>404</Title>
        <Description>Oops! Page not found.</Description>
        <HomeLink to={ROUTES.HOME}>Go back home</HomeLink>
      </ContentWrapper>
    </Container>
  );
};

export default NotFound;
