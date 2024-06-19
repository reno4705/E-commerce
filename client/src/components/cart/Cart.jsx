import React, { useEffect, useState } from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import { useParams } from "react-router-dom";

function Cart() {
    const { id } = useParams("");
    const [inddata, setInddata] = useState([]);
    console.log("inddata: "+inddata);
    const getinddata = async () => {
        const res = await fetch(`/getproductsone/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        console.log(data);

        if (res.status !== 201) {
            console.log("no data available");
        } else {
            console.log("getdata");
            setInddata(data);
        }
    };

    useEffect(() => {
        getinddata();
    }, [id]);

    return (
        <div className="cart_section">
            <div className="cart_container">
                <div className="left_cart">
                    <img src="" alt="cart_img" />
                    <div className="cart_btn">
                        <button className="cart_btn1">Add to Cart</button>
                        <button className="cart_btn2">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="right_cart">
                <h3></h3>
                <h4></h4>
                <Divider />
                <p className="mrp"></p>
                <p>
                    Deal of the Day : <span style={{ color: "#B12704" }}></span>
                </p>
                <p>
                    You save : <span style={{ color: "#B12704" }}></span>
                </p>
            </div>
        </div>
    );
}

export default Cart;
