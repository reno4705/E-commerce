import React from "react";
import './Gridcard.css';

function Gridcard({head,img1,img2,img3,img4,name1,name2,name3,name4}) {
    return (
        <div className="gridcard-container">
            <h3 className="gridcard-container-head">{head}</h3>
            <div class="block">
                <img src={img1} alt="img" />
                <p>{name1}</p>
            </div>
            <div class="block">
                <img src={img2} alt="img"/>
                <p>{name2}</p>
            </div>
            <div class="block">
                <img src={img3} alt="img"/>
                <p>{name3}</p>
            </div>
            <div class="block">
                <img src={img4} alt="img"/>
                <p>{name4}</p>
            </div>
            <a className="grid-card-btn">See more</a>
        </div>
    );
}

export default Gridcard;
