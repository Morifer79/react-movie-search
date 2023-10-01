import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { BsCameraReels } from 'react-icons/bs';
import { FaMasksTheater, FaScroll } from 'react-icons/fa6';

export const PageWrapper = styled.section`
  padding: ${p => p.theme.spacing(5)};
`;

export const ReturnBtn = styled(NavLink)`
  padding: 7px 10px;
  margin-left: ${p => p.theme.spacing(8)};
  margin-bottom: ${p => p.theme.spacing(2)};

  display: inline-flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  color: ${p => p.theme.colors.white};
  border: transparent;
  border-radius: ${p => p.theme.radii.md};
  font-weight: 600;
  box-shadow: 0 0 13px 3px ${p => p.theme.colors.bernred};
  transition: color 300ms linear, box-shadow 300ms linear;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.bernred};
    box-shadow: 0 0 13px 7px ${p => p.theme.colors.bernred};
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${p => p.theme.spacing(20)};
  padding: ${p => p.theme.spacing(10)};
`;

export const Thumb = styled.div`
  width: 270px;
  overflow: hidden;

  img {
    border: 1px solid ${p => p.theme.colors.bernred};
    border-radius: ${p => p.theme.radii.md};
		transition: 1s;
    transform: scale(1);
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const Info = styled.div`
  width: 500px;
  text-align: justify;
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.spacing(8)};

  font-family: 'Bad Script';
  font-size: 28px;
  --interval: 5000ms;
  display: block;
  text-shadow: 0 0 10px var(--color1), 0 0 20px var(--color2),
    0 0 40px var(--color3), 0 0 80px var(--color4);
  will-change: filter, color;
  filter: saturate(60%);

  animation: flicker steps(100) var(--interval) 1000ms infinite;
  color: lightpink;
  --color1: pink;
  --color2: orangered;
  --color3: red;
  --color4: magenta;

  @keyframes flicker {
    50% {
      color: ${p => p.theme.colors.white};
      filter: saturate(200%) hue-rotate(20deg);
    }
  }
`;

export const InfoList = styled.ul`
  h3 {
    margin-bottom: ${p => p.theme.spacing(8)};

    font-family: 'Bad Script';
    font-size: 22px;
    --interval: 5000ms;
    display: block;
    text-shadow: 0 0 10px var(--color1), 0 0 20px var(--color2),
      0 0 40px var(--color3), 0 0 80px var(--color4);
    will-change: filter, color;
    filter: saturate(60%);

    animation: flicker steps(100) var(--interval) 1s infinite;
    color: lightpink;
    --color1: pink;
    --color2: orangered;
    --color3: red;
    --color4: magenta;

    @keyframes flicker {
      50% {
        color: ${p => p.theme.colors.white};
        filter: saturate(200%) hue-rotate(20deg);
      }
    }
  }
`;

export const Item = styled.li`
  p span {
    padding-left: ${p => p.theme.spacing(2.5)};
    padding-right: ${p => p.theme.spacing(2.5)};
    margin-left: ${p => p.theme.spacing(5)};

    font-weight: 900;
    vertical-align: middle;
    color: ${p => p.theme.colors.white};
    width: 50px;
    height: 20px;
    border-radius: ${p => p.theme.radii.md};
    background-color: ${p => p.theme.colors.black};
    box-shadow: 0 0 20px 2px ${p => p.theme.colors.bernred};
  }

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.spacing(10)};
  }
`;

export const CameraReels = styled(BsCameraReels)`
  margin-right: ${p => p.theme.spacing(8)};
`;

export const SubInfoWrapper = styled.div`
  padding-left: ${p => p.theme.spacing(10)};
`;

export const SubInfoTitle = styled.h3`
  padding-left: ${p => p.theme.spacing(20)};
  margin-bottom: ${p => p.theme.spacing(10)};
`;

export const SubInfoList = styled.ul`
  display: flex;
  gap: ${p => p.theme.spacing(10)};
  margin-bottom: ${p => p.theme.spacing(15)};
`;

export const SubInfoLink = styled(Link)`
  padding: 8px 5px;

  text-align: center;
  border: solid 1px ${p => p.theme.colors.bernred};
  border-radius: ${p => p.theme.radii.md};
  width: 125px;
  display: block;
  transition: color 300ms linear, box-shadow 300ms linear;

  &:hover {
    color: ${p => p.theme.colors.bernred};
    box-shadow: 0 0 13px 3px ${p => p.theme.colors.bernred};
  }
`;

export const IconMasks = styled(FaMasksTheater)`
  vertical-align: sub;
  height: 20px;
  width: 20px;
`;

export const IconScroll = styled(FaScroll)`
  vertical-align: sub;
  height: 20px;
  width: 20px;
`;

export const Hr = styled.div`
  border-top: 1px solid ${p => p.theme.colors.bernred};
  box-shadow: 0 0 13px 3px ${p => p.theme.colors.bernred};
`;
