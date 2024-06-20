import React, { useEffect, useState } from "react";
import Banner from "./banner";
import "./home.css";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import fest from "../../Assets/festival special.jpg";
import ad_banner from "../../Assets/ad-banner.jpeg";
import Groupcard from "./Groupcard";
import { getProducts } from "../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { products_1 } from "./productdata";
import axios from "axios";

const Maincomp = () => {
    return (
        <div className="home_section">
            <div className="banner_part">
                <Banner />
            </div>

            <div>
                <Groupcard />
            </div>

            <div className="slide_part">
                <div className="left_slide">
                    <Slider1 title="Up to 75% off | Unique products from new businesses"/>
                </div>
                <div className="right_slide">
                    <h4>Festivel latest launches</h4>
                    <img src={fest} alt="" />
                    <a href="#">See More</a>
                </div>
            </div>
            <div className="long_slider">
                <Slider2 title="Min. 50% off | Unique kitchen finds | Amazon Brands & more" />
            </div>
            <div className="long_slider">
                <Slider3 title="Best Sellers in Sports, Fitness & Outdoors" />
            </div>
            <div className="center_img">
                <img src={ad_banner} alt="amazon_prime_ad" />
            </div>
            <div className="long_slider">
                <Slider1 title="Minimum 50% off | Kitchen needs curated from stores nearby" />
            </div>
        </div>
    );
};

export default Maincomp;
