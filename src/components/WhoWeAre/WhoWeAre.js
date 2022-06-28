import React from "react";
import {
  FounderImg,
  FounderInfo,
  WhoWeAreContainer,
  WhoWeAreDesc,
  WhoWeAreInner,
  WhoWeAreQuotation,
  WhoWeAreSection,
  WhoWeAreText,
  WhoWeAreTitle,
} from "./WhoWeAre.style";

import founder from "../../assets/svgs/founder.svg";
import quotation_mark from "../../assets/svgs/quotation_mark.svg";

export const WhoWeAre = () => {
  return (
    <WhoWeAreSection>
      <WhoWeAreContainer>
        <WhoWeAreInner>
          <FounderImg>
            <img src={founder} alt="" />
            <FounderInfo>
              <h5>Luka Lojk</h5>
              <h6>FOUNDER &amp; CEO</h6>
            </FounderInfo>
          </FounderImg>
          <WhoWeAreDesc>
            <WhoWeAreTitle>Who We Are?</WhoWeAreTitle>
            <WhoWeAreText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </WhoWeAreText>
            <WhoWeAreQuotation>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <img src={quotation_mark} alt="quote sign" />
            </WhoWeAreQuotation>
          </WhoWeAreDesc>
        </WhoWeAreInner>
      </WhoWeAreContainer>
    </WhoWeAreSection>
  );
};
