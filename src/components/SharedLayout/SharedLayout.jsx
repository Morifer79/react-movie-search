import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  BtnList,
  Header,
  IconHome,
  IconMovie,
  StyledLink,
  Wrapper,
} from 'components/SharedLayout/SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header>
        <nav>
          <BtnList>
            <li>
              <StyledLink to="/">
                <IconHome />
                Home
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">
                <IconMovie /> Movies
              </StyledLink>
            </li>
          </BtnList>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default SharedLayout;
