import styled from "@emotion/styled";
import { color, Container, device } from "../../GlobalStyles";

export const WhoWeAreSection = styled.section``;
export const WhoWeAreContainer = styled(Container)`
  padding-top: 60px;
  padding-bottom: 60px;
`;
export const WhoWeAreInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (${device.tablet}) {
    flex-direction: column;
  }
`;
export const FounderImg = styled.div`
  position: relative;
  img {
    filter: drop-shadow(0px 4px 9px rgba(0, 0, 0, 0.25));
    @media screen and (${device.mobile}) {
      width: 100%;
    }
  }
`;
export const FounderInfo = styled.div`
  position: absolute;
  bottom: 3px;
  right: -2px;

  h5 {
    font-weight: 900;
    font-size: 20px;
    line-height: 50px;
    text-transform: uppercase;
    font-feature-settings: "salt" on, "liga" off;
    background: linear-gradient(
      222.19deg,
      ${color.brightRed} 32.82%,
      #ca4364 76.6%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  h6 {
    font-size: 12px;
    line-height: 26px;
    font-feature-settings: "salt" on, "liga" off;
  }
`;
export const WhoWeAreDesc = styled.div`
  padding-left: 75px;
  @media screen and (${device.tablet}) {
    padding-left: 0px;
  }
`;
export const WhoWeAreTitle = styled.h3`
  font-size: 50px;
  line-height: 60px;
  font-weight: 900;
  margin-bottom: 20px;
  @media screen and (${device.mobile}) {
    font-size: 35px;
  }
`;

export const WhoWeAreText = styled.p`
  font-size: 20px;
  line-height: 28px;
  opacity: 0.5;
  margin-bottom: 40px;
  @media screen and (${device.mobile}) {
    font-size: 18px;
  }
`;
export const WhoWeAreQuotation = styled.div`
  position: relative;
  div {
    font-size: 20px;
    line-height: 28px;
    padding-left: 40px;
    @media screen and (${device.mobile}) {
      font-size: 18px;
    }
  }
  img {
    position: absolute;
    top: -10px;
    left: 15px;
    z-index: -1;
    @media screen and (${device.mobile}) {
      width: 35px;
      top: -5px;
      left: 24px;
    }
  }
`;
