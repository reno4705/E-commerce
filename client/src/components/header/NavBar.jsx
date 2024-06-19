import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import Amazon_logo from '../../Assets/amazon_logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
            <nav>
                <div className="left">
                    <div className="navlogo">
                        <Link to="/"><img src={Amazon_logo} alt="amazon logo" /></Link>
                    </div>
                    <div className="nav_searchbaar">
                        <input type="text" name="" />
                        <div className="search_icon">
                            <SearchIcon id="search" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="nav_btn">
                        <Link to="/login">signin</Link>
                    </div>
                    <div className="cart_btn">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon id="icon" />
                        </Badge>
                        <p>Cart</p>
                    </div>
                    <Avatar className="avatar" />
                </div> 
                
            </nav>
        </header>
  )
}

export default Navbar
