import styled from "@emotion/styled";
import { css } from "@emotion/react";
import HolidayFree from "./assets/fonts/HolidayFree.otf";
import RobotoRegular from "./assets/fonts/Roboto-Regular.ttf";
import RobotoLight from "./assets/fonts/Roboto-Light.ttf";
import RobotoMedium from "./assets/fonts/Roboto-Medium.ttf";
import RobotoBold from "./assets/fonts/Roboto-Bold.ttf";
import RobotoBlack from "./assets/fonts/Roboto-Black.ttf";
import PlayfairDisplayRegular from "./assets/fonts/PlayfairDisplay-Regular.ttf";
import PlayfairDisplayBold from "./assets/fonts/PlayfairDisplay-Bold.ttf";
import PlayfairDisplayBlack from "./assets/fonts/PlayfairDisplay-Black.ttf";
import MontserratMedium from "./assets/fonts/Montserrat-Medium.ttf";
import SFProDisplayRegular from "./assets/fonts/SFProDisplay-Regular.ttf";
import SFProDisplaySemiBold from "./assets/fonts/SFProDisplay-Semibold.ttf";

export const breakpoint = {
  mobileS: "376px",
  mobile: "768px",
  tablet: "1024px",
};
export const device = {
  mobileS: `max-width: ${breakpoint.mobileS}`,
  mobile: `max-width: ${breakpoint.mobile}`,
  tablet: `max-width: ${breakpoint.tablet}`,
};

export const font = {
  roboto: "'Roboto', sans-serif",
  playfairDisplay: "'Playfair Display' ,sans-serif",
  holidayFree: "'Holiday Free', sans-serif",
  montserrat: "'Montserrat', sans-serif",
  SFProDisplay: "'SF Pro Display', sans-serif",
};

export const color = {
  white: "#ffffff",
  mainBg: "#0B0F10",
  footerBg: "#04090B",
  brightRed: "#FF013E",
  redHoverOnPrimBtn: "#a10027",
  deepRed: "#FF000F",
  grayLight: "#888888",
  yellowOrange: "#F3B10E",
  blue: "#1DABF2",
  lime: "#46D68C",
  greyNavLink: "#D9D9D9",
};

export const GlobalStyles = css`
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoRegular}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoLight}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoMedium}) format("truetype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoBold}) format("truetype");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoBlack}) format("truetype");
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: "Holiday Free";
    src: url(${HolidayFree}) format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Playfair Display";
    src: url(${PlayfairDisplayRegular}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Playfair Display";
    src: url(${PlayfairDisplayBold}) format("truetype");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: "Playfair Display";
    src: url(${PlayfairDisplayBlack}) format("truetype");
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat";
    src: url(${MontserratMedium}) format("truetype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "SF Pro Display'";
    src: url(${SFProDisplayRegular}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "SF Pro Display'";
    src: url(${SFProDisplaySemiBold}) format("truetype");
    font-weight: 600;
    font-style: normal;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body,
  #root {
    min-height: 100%;
  }

  body {
    width: 100%;
    margin: 0;
    font-family: ${font.roboto};
    font-weight: normal;
    background-color: ${color.mainBg};
    color: ${color.white};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: normal;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 60px;
  margin: 0 auto;
  @media screen and (${device.tablet}) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (${device.mobile}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const PrimaryBtn = styled.button`
  font-weight: 700;
  text-transform: uppercase;
  color: ${color.white};
  background: ${color.brightRed};
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    // replace with variable
    background-color: ${color.redHoverOnPrimBtn};
    box-shadow: inset 0px -7px 7px ${color.redHoverOnPrimBtn};
  }
`;
export const ActionBtn = styled.button`
  color: ${color.white};
  cursor: pointer;
  transition: all 0.1s;
  border-radius: 6.64291px;
  background-color: ${(props) =>
    props.active ? color.brightRed : "transparent"};
  border: ${(props) =>
    props.active ? "0" : `0.664291px solid ${color.white};`};
  opacity: ${(props) => (props.active ? "1" : "0.5")};
  &:active {
    background-color: ${color.redHoverOnPrimBtn};
  }
`;
