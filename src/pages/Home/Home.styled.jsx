import styled from 'styled-components';

export const PulsarTitle = styled.h1`
  margin: 30px 0 0 20px;

  font-family: 'Bad Script';
  --interval: 1000ms;
  display: block;
  text-shadow: 0 0 10px var(--color1), 0 0 20px var(--color2),
    0 0 40px var(--color3), 0 0 80px var(--color4);
  will-change: filter, color;
  filter: saturate(60%);

  animation: flicker steps(100) var(--interval) 1000ms infinite;
  color: azure;
  --color1: azure;
  --color2: aqua;
  --color3: dodgerblue;
  --color4: blue;

  @keyframes flicker {
    50% {
      color: ${p => p.theme.colors.white};
      filter: saturate(200%) hue-rotate(20deg);
    }
  }
`;

export const Quotation = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    padding: ${p => p.theme.spacing(10)};

    font-family: 'Bad Script';
    font-size: 36px;
    text-align: center;
    color: ${p => p.theme.colors.bernred};
    position: absolute;
    top: 40%;
    right: 10%;

    span {
      font-size: 28px;
      color: ${p => p.theme.colors.white};
    }
  }
`;
