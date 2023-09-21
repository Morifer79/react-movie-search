import styled from 'styled-components';

export const CastWrapper = styled.div`
  padding-top: ${p => p.theme.spacing(15)};
  padding-bottom: ${p => p.theme.spacing(15)};
`;

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(10)};
`;

export const WikiLink = styled.a`
  //для перехода на Википедию и отсутствия конфликта
`;

export const CastItem = styled.li`
  width: 200px;
  overflow: hidden;

  p:not(:last-child) {
    margin-top: ${p => p.theme.spacing(2.5)};
    margin-bottom: ${p => p.theme.spacing(2.5)};
  }

  &:hover img {
    filter: grayscale(1);
    transition: 300ms ease-in-out;
  }
`;

export const ActorsImg = styled.img`
  height: 300px;
  border: 3px dotted ${p => p.theme.colors.bernred};
  border-top-left-radius: ${p => p.theme.radii.lg};
  border-bottom-right-radius: ${p => p.theme.radii.lg};
  filter: grayscale(0);
`;
