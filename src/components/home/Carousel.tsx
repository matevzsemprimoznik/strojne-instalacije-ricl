'use client'
import React, {Component, ReactElement} from "react";
import Slider from "react-slick";
import ProjectsCard from "@/components/ProjectsCard";
import Arrow from "@/components/home/Arrow";

interface CarouselProps {
    children: any
}

export default class Carousel extends Component<CarouselProps> {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            nextArrow: <Arrow />,
            prevArrow: <Arrow direction='left'/>,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        };
        return <Slider {...settings}>
            {this.props.children}
        </Slider>

    }
}