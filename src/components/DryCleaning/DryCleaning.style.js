import styled from "@emotion/styled";
import Slider from "react-slick";
import {
  ActionBtn,
  color,
  Container,
  device,
  PrimaryBtn,
} from "../../GlobalStyles";

export const DryCleaningSection = styled.section``;
export const DryCleaningContainer = styled(Container)``;
export const DryCleaningInner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (${device.tablet}) {
    flex-direction: column-reverse;
    justify-content: start;
    align-items: center;
  } ;
`;
export const DryCleaningContent = styled.div`
  width: 45%;
  @media screen and (${device.tablet}) {
    width: 100%;
  }
`;
export const DryCleaningTitle = styled.h3`
  font-weight: 900;
  font-size: 50px;
  line-height: 66px;
  letter-spacing: 1px;
  margin-bottom: 20px;
  @media screen and (${device.mobile}) {
    font-size: 40px;
    margin-bottom: 15px;
    line-height: 50px;
  }

  @media screen and (${device.mobileS}) {
    font-size: 30px;
    line-height: 40px;
  }
`;
export const DryCleaningDescription = styled.p`
  font-size: 18px;
  line-height: 30px;
  opacity: 0.5;
  margin-bottom: 50px;
  @media screen and (${device.mobile}) {
    font-size: 16px;
    margin-bottom: 25px;
  }
  @media screen and (${device.mobileS}) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const DryCleaningFlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
`;
export const ViewMoreBtn = styled(PrimaryBtn)`
  background-color: transparent;
  border: 1px solid ${color.white};
  padding: 18px 56px;
  text-transform: none;
  font-size: 16px;
  line-height: 19px;
  color: ${color.grayLight};
  margin-right: 10px;
  @media screen and (${device.mobile}) {
    padding: 16px 48px;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: none;
  }
`;

export const SliderActionBtn = styled.div`
  padding-right: 20px;
  @media screen and (${device.mobileS}) {
    padding-right: 0;
  }
`;
export const SliderActionBtnPrev = styled(ActionBtn)`
  padding: 22.61px 25.69px;
  margin-right: 10px;
  @media screen and (${device.mobile}) {
    padding: 18.61px 20.69px;
  }
  & > img {
    width: 6.25px;
  }
`;

export const SliderActionBtnNext = styled(ActionBtn)`
  padding: 22.61px 25.69px;
  @media screen and (${device.mobile}) {
    padding: 18.61px 20.69px;
  }
  & > img {
    width: 6.25px;
  }
`;
// slider customization
export const DryCleaningSliderContainer = styled.div`
  width: 51%;
  border-radius: 10px;
  @media screen and (${device.tablet}) {
    width: 100%;
  }
  @media screen and (${device.mobile}) {
    margin-bottom: 10px;
  }
`;
export const SliderItemImg = styled.img`
  border-radius: 10px;
  display: block;
  object-fit: cover;
`;

export const DryCleaningSlider = styled(Slider)`
  &.slick-slider {
    height: 100%;
    & .slick-list {
      border-radius: 10px;
      height: 100%;
      & .slick-track {
        height: 100%;
        & .slick-slide {
          height: 100%;
          & > div {
            height: 100%;
            & > img {
              height: 100%;
              display: block !important;
            }
          }
        }
      }
    }
  }
`;
