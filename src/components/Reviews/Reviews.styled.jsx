import styled from 'styled-components';

export const ReviewsWrapper = styled.div`
  padding: 35px 20px;
`;

export const InfoWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(8)};

  :nth-of-type(even) {
    border: 1px solid ${p => p.theme.colors.bernred};
  }
`;

export const InfoBlock = styled.li`
  padding: ${p => p.theme.spacing(8)};
  border: 1px solid ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.lg};

  :not(:last-child) {
    padding: ${p => p.theme.spacing(5)};
  }

  h3 {
    color: ${p => p.theme.colors.bernred};
  }

  p {
    text-align: justify;
  }
`;
