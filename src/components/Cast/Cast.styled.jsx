import styled from 'styled-components';

export const CastWrapper = styled.div`
  padding: 15px 10px;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.spacing(10)};
`;

export const CastItem = styled.li`
  width: 200px;
  overflow: hidden;

  img {
    height: 300px;
    border: 3px dotted ${p => p.theme.colors.bernred};
    border-top-left-radius: ${p => p.theme.radii.lg};
    border-bottom-right-radius: ${p => p.theme.radii.lg};
    transition: border 300ms linear, box-shadow 300ms linear;
  }

  p:not(:last-child) {
		margin: 5px 0;
  }
`;
