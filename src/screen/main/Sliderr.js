import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from "lottie-react";
import mainAnimation from '../../jsons/MainANimation.json';
import Slider from "react-slick";
import ban from '../../images/ban (1).jpg';
import ban2 from '../../images/ban (4).jpg';
import ban3 from '../../images/ban (3).jpg';
const Sliderr = () => {
    let settings = {
        dots: false,
        autoplay: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,

                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    };
    return (
        <div className="mt-6  mb-40">
           <div className="w-full mx-auto">
                {/* <Slider {...settings}>
                    <div>
                        <img src={ban} alt="" className="w-full h-36 " />
                    </div>
                    <div>
                        <img src={ban2} alt="" className="w-full h-36 " />
                    </div>
                    <div>
                        <img src={ban3} alt="" className="w-full h-36 " />
                    </div>
                </Slider> */}
                <Lottie animationData={mainAnimation} className="h-64 w-full" />
            </div>

        </div>
    );
};

export default Sliderr;