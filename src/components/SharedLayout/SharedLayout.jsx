import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Header,
  IconHome,
  IconMovie,
  Nav,
  StyledLink,
  Wrapper,
} from 'components/SharedLayout/SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header>
        <Nav>
          <ul>
            <li>
              <StyledLink to="/">
                <IconHome /> <span>Home</span>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">
                <IconMovie /> Movies
              </StyledLink>
            </li>
          </ul>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default SharedLayout;