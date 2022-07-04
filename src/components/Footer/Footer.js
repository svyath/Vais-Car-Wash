import Car_Wash_Logo from "../../assets/svgs/Car_Wash_Logo.svg";
import footer_facebook from "../../assets/svgs/footer_facebook.svg";
import footer_instagram from "../../assets/svgs/footer_instagram.svg";
import footer_twitter from "../../assets/svgs/footer_twitter.svg";
import {
  AddressColumn,
  CarColumn,
  Copyrights,
  FooterContainer,
  FooterInner,
  FooterLink,
  FooterLogo,
  FooterLogoWrapper,
  FooterSection,
  FooterSocials,
  PageColumn,
  ServicesColumn,
  Title,
  WashAddress,
  WashEmail,
  WashTel,
} from "./Footer.style";

export const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterInner>
          <FooterLogoWrapper>
            <FooterLogo src={Car_Wash_Logo} />
          </FooterLogoWrapper>
          <PageColumn>
            <Title>Page</Title>
            <FooterLink to="/">Privacy and Cookie Policy</FooterLink>
            <FooterLink to="/">Search Term</FooterLink>
            <FooterLink to="/">Orders and Returns</FooterLink>
            <FooterLink to="/">Advanced Search</FooterLink>
            <FooterLink to="/">Contact Us</FooterLink>
          </PageColumn>
          <CarColumn>
            <Title>Car</Title>
            <FooterLink to="/">Privacy and Cookie Policy</FooterLink>
            <FooterLink to="/">Search Term</FooterLink>
            <FooterLink to="/">Orders and Returns</FooterLink>
            <FooterLink to="/">Advanced Search</FooterLink>
            <FooterLink to="/">Contact Us</FooterLink>
          </CarColumn>
          <ServicesColumn>
            <Title>Services</Title>
            <FooterLink to="/">Privacy and Cookie Policy</FooterLink>
            <FooterLink to="/">Search Term</FooterLink>
            <FooterLink to="/">Orders and Returns</FooterLink>
            <FooterLink to="/">Advanced Search</FooterLink>
            <FooterLink to="/">Contact Us</FooterLink>
          </ServicesColumn>
          <AddressColumn>
            <WashTel>
              <a href="tel:(303) 985-0105">(303) 985-0105</a>
              <span>, </span>
              <a href="tel:(303) 985-0105">(303) 985-0105</a>
            </WashTel>
            <WashEmail href="mailto:mifs@info.com">mifs@info.com</WashEmail>
            <WashAddress>
              2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
            </WashAddress>
            <FooterSocials>
              <a href="/">
                <img src={footer_instagram} alt="instagram icon" />
              </a>
              <a href="/">
                <img src={footer_facebook} alt="facebook icon" />
              </a>
              <a href="/">
                <img src={footer_twitter} alt="twitter icon" />
              </a>
            </FooterSocials>
          </AddressColumn>
        </FooterInner>
        <Copyrights>©2021 Car Wash. All Rights Reserved</Copyrights>
      </FooterContainer>
    </FooterSection>
  );
};
