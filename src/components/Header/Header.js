import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import arrow_next_icon from "../../assets/svgs/arrow_next_icon.svg";
import arrow_prev_icon from "../../assets/svgs/arrow_prev_icon.svg";
import headerBg1 from "../../assets/images/headerBg1.jpg";
import headerBg2 from "../../assets/images/headerBg2.webp";
import headerBg3 from "../../assets/images/headerBg3.jpg";
import headerBg4 from "../../assets/images/headerBg4.jpg";
import facebook_icon from "../../assets/svgs/facebook_icon.svg";
import instagram_icon from "../../assets/svgs/instagram_icon.svg";
import linkedin_icon from "../../assets/svgs/linkedin_icon.svg";
import twitter_icon from "../../assets/svgs/twitter_icon.svg";
import {
  BookNowBtn,
  HeaderBg,
  HeaderBody,
  HeaderContainer,
  HeaderContent,
  HeaderInner,
  HeaderSection,
  SlideControlDiv,
  SlideProgressBar,
  SliderActionBtn,
  SliderAmount,
  SliderCurrNumber,
  SocialIcons,
  StyledSlider,
} from "./Header.style";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const initialSlide = 1;
  const progressBarRef = useRef();
  const slider = useRef();
  const [slideAmount, setSlideAmount] = useState(null);
  const [slideNumber, setSlideNumber] = useState(initialSlide);
  const [progressLenght, setProgressLenght] = useState(0);
  const navigate = useNavigate();
  // slider settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    afterChange: function (currentSlide) {
      setSlideNumber(currentSlide + 1);
    },
  };
  const prevSlide = () => {
    slider.current.slickPrev();
  };
  const nextSlide = () => {
    slider.current.slickNext();
  };

  //set data from refs into state
  useEffect(() => {
    setProgressLenght(progressBarRef.current.clientWidth);
    setSlideAmount(slider.current.props.children.length);
  }, [progressBarRef]);

  return (
    <HeaderSection>
      <StyledSlider ref={slider} {...settings}>
        <HeaderBg img={headerBg1}></HeaderBg>
        <HeaderBg img={headerBg2}></HeaderBg>
        <HeaderBg img={headerBg3}></HeaderBg>
        <HeaderBg img={headerBg4}></HeaderBg>
      </StyledSlider>
      <HeaderContainer>
        <HeaderInner>
          <HeaderContent>
            <HeaderBody>
              <h1>
                The shine that lasts <span>Forever.</span>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <BookNowBtn type="button" onClick={() => navigate("booking")}>
                Book now
              </BookNowBtn>
            </HeaderBody>
            <SocialIcons>
              <a href="/">
                <img src={twitter_icon} alt="twitter" />
              </a>
              <a href="/">
                <img src={facebook_icon} alt="facebook" />
              </a>
              <a href="/">
                <img src={instagram_icon} alt="instagram" />
              </a>
              <a href="/">
                <img src={linkedin_icon} alt="linkedIn" />
              </a>
            </SocialIcons>
          </HeaderContent>
          <SlideControlDiv>
            <SliderActionBtn onClick={() => prevSlide()}>
              <img src={arrow_prev_icon} alt="prev" />
            </SliderActionBtn>
            <SliderCurrNumber>{slideNumber}</SliderCurrNumber>
            <SlideProgressBar
              ref={progressBarRef}
              progressLen={progressLenght * (slideNumber / slideAmount)}
            ></SlideProgressBar>
            <SliderAmount>{slideAmount}</SliderAmount>
            <SliderActionBtn onClick={() => nextSlide()}>
              <img src={arrow_next_icon} alt="next" />
            </SliderActionBtn>
          </SlideControlDiv>
        </HeaderInner>
      </HeaderContainer>
    </HeaderSection>
  );
};
