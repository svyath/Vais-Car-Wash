import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { color, Container, device } from "../../GlobalStyles";
export const FooterSection = styled.footer`
  background: ${color.footerBg};
`;
export const FooterContainer = styled(Container)`
  padding-top: 60px;
  padding-bottom: 70px;
`;
export const FooterInner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 20%);

  @media screen and (${device.tablet}) {
    grid-template-columns: repeat(auto-fill, 50%);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, 100%);
    justify-items: center;
  }
  & > div {
    margin-bottom: 20px;
  }
`;
export const FooterLogoWrapper = styled.div``;
export const FooterLogo = styled.img`
  max-width: 165px;
  width: 100%;
  cursor: pointer;
`;
export const Title = styled.h5`
  color: ${color.greyNavLink};
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  margin-bottom: 26px;
`;
export const PageColumn = styled.div``;
export const CarColumn = styled.div``;
export const ServicesColumn = styled.div``;
export const FooterLink = styled(Link)`
  display: block;
  font-size: 14px;
  line-height: 26px;
  color: ${color.white};
`;
export const AddressColumn = styled.address`
  font-size: 16px;
  line-height: 29px;
  letter-spacing: 0.5px;
  color: ${color.white};
  margin-bottom: 10px;
`;

export const WashTel = styled.p`
  opacity: 0.5;
  margin-bottom: 20px;
  & > a {
    color: ${color.white};
  }
`;
export const WashEmail = styled.a`
  display: block;
  color: ${color.white};
  margin-bottom: 20px;
`;
export const WashAddress = styled.p`
  opacity: 0.5;
  margin-bottom: 18px;
`;

export const Copyrights = styled.div`
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0.5px;
`;
export const FooterSocials = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.1s;
  & > a {
    margin-right: 65px;
  }
  & > a:hover {
    display: block;
    transform: scale(1.1);
  }
`;
