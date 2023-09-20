import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  margin-top: ${p => p.theme.spacing(7.5)};
  margin-left: ${p => p.theme.spacing(20)};
`;

export const MovieItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(3)};
  }
`;

export const MovieLink = styled(Link)`
  font-family: 'Bad Script';
  font-weight: 500;
  font-size: 16px;
  color: ${p => p.theme.colors.white};
  transition: color 300ms linear;

  &:hover {
    color: ${p => p.theme.colors.bernred};
  }
`;
