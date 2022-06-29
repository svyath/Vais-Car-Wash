import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import {
  DryCleaningContainer,
  DryCleaningContent,
  DryCleaningDescription,
  DryCleaningFlexDiv,
  DryCleaningInner,
  DryCleaningSection,
  DryCleaningSlider,
  DryCleaningSliderContainer,
  DryCleaningTitle,
  SliderActionBtn,
  SliderActionBtnNext,
  SliderActionBtnPrev,
  SliderItemImg,
  ViewMoreBtn,
} from "./DryCleaning.style";
import DryCleaningSliderImg1 from "../../assets/images/DryCleaningSliderImg1.jpg";
import arrow_prev_icon from "../../assets/svgs/arrow_prev_icon.svg";
import arrow_next_icon from "../../assets/svgs/arrow_next_icon.svg";

export const DryCleaning = () => {
  const slider = useRef();
  const [prevActive, setPrevActive] = useState(false);
  const [nextActive, setNextActive] = useState(true);
  const initialSlide = 0;
  const lastSlide = 3;
  // slider custom settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    afterChange: function (index) {
      if (index === initialSlide) {
        setPrevActive(false);
        setNextActive(true);
      } else if (index === lastSlide) {
        setPrevActive(true);
        setNextActive(false);
      } else {
        setPrevActive(true);
        setNextActive(true);
      }
    },
  };

  const prevSlide = () => {
    slider.current.slickPrev();
  };
  const nextSlide = () => {
    slider.current.slickNext();
  };

  return (
    <DryCleaningSection>
      <DryCleaningContainer>
        <DryCleaningInner>
          <DryCleaningContent>
            <DryCleaningTitle>
              Dry Cleaning Any Dirt Inside The Car.
            </DryCleaningTitle>
            <DryCleaningDescription>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </DryCleaningDescription>
            <DryCleaningFlexDiv>
              <ViewMoreBtn>View More</ViewMoreBtn>
              <SliderActionBtn>
                <SliderActionBtnPrev
                  onClick={() => prevSlide()}
                  active={prevActive}
                >
                  <img src={arrow_prev_icon} alt="" />
                </SliderActionBtnPrev>
                <SliderActionBtnNext
                  onClick={() => nextSlide()}
                  active={nextActive}
                >
                  <img src={arrow_next_icon} alt="" />
                </SliderActionBtnNext>
              </SliderActionBtn>
            </DryCleaningFlexDiv>
          </DryCleaningContent>
          <DryCleaningSliderContainer>
            <DryCleaningSlider ref={slider} {...settings}>
              <SliderItemImg src={DryCleaningSliderImg1} />
              <SliderItemImg src={DryCleaningSliderImg1} />
              <SliderItemImg src={DryCleaningSliderImg1} />
              <SliderItemImg src={DryCleaningSliderImg1} />
            </DryCleaningSlider>
          </DryCleaningSliderContainer>
        </DryCleaningInner>
      </DryCleaningContainer>
    </DryCleaningSection>
  );
};
