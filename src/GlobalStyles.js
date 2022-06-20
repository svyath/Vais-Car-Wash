import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const breakpoint = {
  mobileS: "374px",
  mobile: "767px",
  tablet: "1024px",
};
export const device = {
  mobileS: `max-width: ${breakpoint.mobileS}`,
  mobile: `max-width: ${breakpoint.mobile}`,
  tablet: `max-width: ${breakpoint.tablet}`,
};

export const font = {};

export const color = {
  white: "#ffffff",
  mainBg: "0B0F10",
  footerBg: "#04090B",
  brightRed: "#FF013E",
  grayLight: "#888888",
  yellowOrange: "#F3B10E",
  blue: "#1DABF2",
  lime: "#46D68C",
  greyNavLink: "#D9D9D9",
};

export const GlobalStyles = css`
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
  padding: 60px;
  margin: 0 auto;
`;
