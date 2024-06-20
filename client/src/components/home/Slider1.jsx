import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { products_1 } from "./productdata";
import { products_1 } from "./productdata";
import "./slide.css";
import { Link } from "react-router-dom";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 2,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const Slider1 = ({title}) => {

    return (
        <div className="products_section">
            <div className="products_deal">
                <h3>{title}</h3>
                <a className="view_link">See all offers</a>
            </div>

            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={true}
                swipeable={true}
                centerMode={true}
                // autoPlay={false}
                // autoPlaySpeed={5000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products_1.map((e) => {
                        return (
                            <Link to={`/getproductsone/${e.id}`}>
                                <div className="products_items">
                                    <img src={e.url} alt="product-image" />
                                </div>
                            </Link>
                        );
                    })
                }
            </Carousel>
        </div>
    );
};

export default Slider1;
