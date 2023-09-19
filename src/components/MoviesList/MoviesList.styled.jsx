import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  margin: 15px 0 0 40px;
`;

export const MovieItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(3)};
  }
`;

export const MovieLink = styled(Link)`
  font-family: 'Bad Script';
  text-decoration: none;
  font-weight: 500;
  color: ${p => p.theme.colors.white};
  font-size: 16px;
  transition: color 300ms linear;

  &:hover {
    color: ${p => p.theme.colors.bernred};
  }
`;
