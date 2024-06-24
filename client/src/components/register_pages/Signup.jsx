import { React, useState } from "react";
import black_logo from "../../Assets/blacklogo.png";
import "./Signup.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Divider } from "@mui/material";

function Signup() {
    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: "",
    });

    console.log(udata);

    const adddata = (e) => {
        const { name, value } = e.target;
        setUdata((pre) => {
            return {
                ...pre,
                [name]: value,
            };
        });
    };

    const senddata = async (e) => {
        e.preventDefault();
        const { fname, email, mobile, password, cpassword } = udata;
        try {
            const res = await fetch("http://localhost:8080/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fname,
                    email,
                    mobile,
                    password,
                    cpassword,
                })
            });
            const data = await res.json();
            // console.log(data);

            if (res.status === 422 || !data) {
                toast.error("Invalid Details! 😒👎", {
                    position: "top-right",
                });
            } else {
                setUdata({
                    ...udata,
                    fname: "",
                    email: "",
                    mobile: "",
                    password: "",
                    cpassword: "",
                });
                toast.success("Registration Successfully done 🫡!", {
                    position: "top-right",
                });
            }
        } catch (error) {
            console.log("Catch-Error" + error.message);
        }
    };

    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src={black_logo} alt="AMAZON-LOGO" />
                </div>
                <div className="sign_form">
                    <form method="POST">
                        <h1>Create Account</h1>
                        <div className="form_data">
                            <label htmlFor="">Your name</label>
                            <input
                                type="text"
                                name="fname"
                                id="fname"
                                onChange={adddata}
                                value={udata.fname}
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                onChange={adddata}
                                value={udata.email}
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="">Mobile number</label>
                            <input
                                type="text"
                                name="mobile"
                                id="mobile"
                                onChange={adddata}
                                value={udata.mobile}
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Atleast 8 characters"
                                onChange={adddata}
                                value={udata.password}
                            />
                        </div>
                        <div className="form_data">
                            <label htmlFor="">Confirm Password</label>
                            <input
                                type="password"
                                name="cpassword"
                                id="cpassword"
                                onChange={adddata}
                                value={udata.cpassword}
                            />
                        </div>
                        <button className="signin_btn" onClick={senddata}>
                            Continue
                        </button>
                        <Divider/>
                        <div className="signin_info">
                            <p>Alreadyhave an account?</p>
                            <Link to="/login">Signin</Link>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </section>
    );
}

export default Signup;
