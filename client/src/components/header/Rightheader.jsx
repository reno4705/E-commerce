import React, { useContext } from "react";
import "./rightheader.css";
import { LoginContext } from "../context/ContextProvider";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const Rightheader = ({ logclose,logoutuser }) => {
    const { account, setAccount } = useContext(LoginContext);
    return (
        <>
            <div className="rightheader">
                <div className="right_nav">
                    {account ? (
                        <Avatar className="avtar2">
                            {account.fname[0].toUpperCase()}
                        </Avatar>
                    ) : (
                        <Avatar className="avtar" />
                    )}
                    {account ? (
                        <h3>Hello, {account.fname.toUpperCase()}</h3>
                    ) : (
                        ""
                    )}
                </div>
                <div className="nav_btn" onClick={() => logclose()}>
                    <Link to="/">Home</Link>
                    <Link to="/">Shop By Category</Link>

                    <Divider style={{ width: "100%", marginLeft: "-20px" }} />

                    <Link to="/">Today's Deal</Link>
                    {account ? (
                        <Link to="/buynow">Your Orders</Link>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                    <Divider style={{ width: "100%", marginLeft: "-20px" }} />
                    <div className="flag">
                        <Link to="/">Settings</Link>
                        <img src="" alt="" />
                    </div>
                    {
                        account ? 
                        <div className="flag">
                            <LogoutIcon style={{fontSize:18,marginRight:4}}/>
                            <h3 onClick={()=>logoutuser()} style={{cursor:"pointer",fontWeight:500}}>Logout</h3>
                        </div>
                        :
                        <Link to="/login">SignIn</Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Rightheader;
