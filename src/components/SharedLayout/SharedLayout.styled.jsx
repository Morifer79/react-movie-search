import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoHomeSharp } from 'react-icons/io5';
import { ImFilm } from 'react-icons/im';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-bottom: ${p => p.theme.spacing(8)};
`;

export const Header = styled.header`
  padding: 10px 0 12px 20px;
  margin-bottom: ${p => p.theme.spacing(8)};

  display: flex;
  gap: ${p => p.theme.spacing(6)};
  align-items: center;
  height: 60px;
  border-bottom: 1px solid ${p => p.theme.colors.bernred};
  box-shadow: 0 0 13px 3px ${p => p.theme.colors.bernred};
`;

export const BtnList = styled.ul`
  display: flex;
  align-items: center;
  column-gap: ${p => p.theme.spacing(8)};
`;

export const StyledLink = styled(NavLink)`
  max-width: 60px;
  font-weight: 600;
  color: ${p => p.theme.colors.white};
  padding: 8px 16px;
  border-radius: ${p => p.theme.radii.sm};
  transition: color 300ms linear, background 350ms linear;

  &:hover {
    color: ${p => p.theme.colors.bernred};
  }

  &.active {
    font-weight: 900;
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.bernred};
  }
`;

export const IconHome = styled(IoHomeSharp)`
  vertical-align: sub;
  margin-right: ${p => p.theme.spacing(3)};
  width: 20px;
  height: 20px;
`;

export const IconMovie = styled(ImFilm)`
  vertical-align: sub;
  margin-right: ${p => p.theme.spacing(3)};
  width: 20px;
  height: 20px;
`;
