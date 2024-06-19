import React from "react";
import Carousel from "react-material-ui-carousel";
import "./banner.css";
import banner1 from '../../Assets/banner1.jpg'
import banner2 from '../../Assets/banner2.jpg'
import banner3 from '../../Assets/banner3.jpg'
import banner4 from '../../Assets/banner4.jpg'
import banner5 from '../../Assets/banner5.jpg'

const data = [
    banner1, banner2, banner3, banner4, banner5,
];

const Banner = () => {
    return (
        <div>
            <Carousel
                className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        // background: "#fff",
                        backgroundColor: "transparent" ,
                        color: "black",
                        borderRadius: 0,
                        marginTop: -22,
                        height: "104px",
                    },
                }}
            >
                {data.map((imag, i) => {
                    return (
                        <>
                            <img
                                src={imag}
                                alt="carousel-img"
                                key={i}
                                className="banner_img"
                            />
                        </>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Banner;
