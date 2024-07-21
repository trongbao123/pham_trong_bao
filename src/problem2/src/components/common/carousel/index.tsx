import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
    children: React.ReactNode,
    focusOnSelect?: boolean,
    infinite?: boolean,
    slidesToShow?: number,
    slidesToScroll?: number,
    initialSlide?: number,
    autoplay?: boolean,
    speed?: number,
    autoplaySpeed?: number,
    cssEase?: string,
    dots?: boolean
}
const Carousel: React.FC<CarouselProps & Settings> = ({
    children,
    focusOnSelect = false,
    infinite = true,
    slidesToShow = 5,
    slidesToScroll = 5,
    initialSlide = 5,
    autoplay = true,
    speed = 4000,
    autoplaySpeed = 2000,
    dots = false,
    cssEase = "linear",
    ...rest
}) => {

    const settings = {
        ...rest,
        focusOnSelect,
        dots,
        infinite,
        slidesToShow,
        slidesToScroll,
        initialSlide,
        autoplay,
        speed,
        autoplaySpeed,
        cssEase,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}

export default Carousel;