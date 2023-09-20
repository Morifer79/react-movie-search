import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

export const SearchBar = styled.form`
  width: 100%;
  max-width: 450px;
  position: relative;
`;

export const SearchFormInput = styled.input`
  margin: 20px 0 0 40px;
  padding: ${p => p.theme.spacing(5)};

  border-radius: ${p => p.theme.radii.sm};
  border: solid 1px ${p => p.theme.colors.bernred};
  background-color: inherit;
  outline: none;
  color: ${p => p.theme.colors.white};
  width: 100%;
  height: 35px;
  max-width: 450px;
  font-size: 16px;
  transition: box-shadow 400ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 0px 10px 1px ${p => p.theme.colors.bernred};
  }
`;

export const SearchBtn = styled.button`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: -40px;
  background-color: inherit;
  border-radius: ${p => p.theme.radii.sm};
  border: solid 1px ${p => p.theme.colors.bernred};
  height: 35px;
  width: 40px;
  transition: box-shadow 300ms linear;

  &:hover {
    box-shadow: inset 0px 0px 10px 3px ${p => p.theme.colors.bernred};
  }
`;

export const IconSearch = styled(ImSearch)`
  color: ${p => p.theme.colors.bernred};
  width: 20px;
  height: 20px;
`;
