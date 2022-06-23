import styled from "@emotion/styled";
import Slider from "react-slick";
import { color, Container, device, font, PrimaryBtn } from "../../GlobalStyles";

export const HeaderSection = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
`;
//slider bg
export const HeaderBg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.img}) center center no-repeat;
  background-size: cover;
  position: relative;
  &::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(3, 3, 5, 0.76);
  }
`;

export const HeaderContainer = styled(Container)`
  position: absolute;
  top: 0;
  left: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 100%;
  z-index: 1;
`;

export const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderContent = styled.div`
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderBody = styled.div`
  width: 50%;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 80px;
    line-height: 100%;
    font-family: ${font.playfairDisplay};
    margin-bottom: 50px;
    @media screen and (${device.mobile}) {
      font-size: 60px;
    }
    span {
      font-weight: 900;
      text-transform: uppercase;
      color: ${color.brightRed};
    }
  }
  p {
    font-size: 20px;
    font-family: ${font.SFProDisplay};
    font-weight: normal;
    line-height: 28px;
    margin-bottom: 50px;
  }
`;
export const BookNowBtn = styled(PrimaryBtn)`
  font-size: 16px;
  line-height: 16px;
  padding: 25px 123px;
  text-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
  box-shadow: inset 0px -7px 7px ${color.brightRed};
`;

export const SocialIcons = styled.div`
  & > a {
    display: block;
    cursor: pointer;
    margin-bottom: 24px;
    transition: scale 0.1s linear;

    &:last-of-type {
      margin-bottom: 0;
    }
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const SlideControlDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SliderActionBtn = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SlideProgressBar = styled.div`
  width: 200px;
  height: 4px;
  background: ${color.white};
  position: relative;
  padding: 0 10px;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.progressLen + "px"};
    background-color: ${color.deepRed};
    transition: all 0.3s linear;
    z-index: 2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
export const SliderCurrNumber = styled.div`
  padding: 0 20px 0 35px;
  font-weight: 900;
`;
export const SliderAmount = styled.div`
  padding: 0 35px 0 20px;
  font-weight: 900;
`;

// slider customizations

export const StyledSlider = styled(Slider)`
  &.slick-slider {
    height: 100%;
    & .slick-list {
      height: inherit;
      & .slick-track {
        height: inherit;
        & .slick-slide {
          & > div {
            height: 100%;
          }
        }
      }
    }
  }
`;
