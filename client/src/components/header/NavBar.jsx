import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import Amazon_logo from "../../Assets/amazon_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import { Drawer, IconButton, List, ListItem } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Rightheader from "./Rightheader";
import LogoutIcon from "@mui/icons-material/Logout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
    const { account, setAccount } = useContext(LoginContext);
    // console.log(account);

    const history = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [text, setText] = useState("");
    const [liopen, setLiopen] = useState(true);

    const [dropen, setDropen] = useState(false);

    const getdetailvaliduser = async () => {
        const res = await fetch("http://localhost:8080/validuser", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        const data = await res.json();
        console.log(data);

        if (res.status !== 201) {
            console.log("error");
        } else {
            console.log("data valid");
            setAccount(data);
        }
    };

    const handleopen = () => {
        setDropen(true);
    };

    const handledrclose = () => {
        setDropen(false);
    };

    const logoutuser = async () => {
        const res2 = await fetch("http://localhost:8080/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status !== 201) {
            console.log("error");
        } else {
            console.log("data valid");
            // alert("logged out sucessfully");
            toast.success("logged out", {
                position: "top-center",
            });
            history("/");
            setAccount(false);
        }
    };

    const getText = (items) => {
        setText(items);
        setLiopen(false);
    };

    useEffect(() => {
        getdetailvaliduser();
    }, []);

    const [products, setProducts] = useState([]);

    const getproducts = async () => {
        const prod = await fetch("http://localhost:8080/getproducts", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
        });
        const data = await prod.json();
        // console.log("All products:");
        // console.log(data);
        setProducts(data);
    };

    useEffect(() => {
        getproducts();
    }, []);

    return (
        <header>
            <nav>
                <div className="left">
                    <IconButton className="hamburgur" onClick={handleopen}>
                        <MenuIcon style={{ color: "#fff" }} />
                    </IconButton>
                    <Drawer open={dropen} onClose={handledrclose}>
                        <Rightheader logclose={handledrclose} logoutuser={logoutuser}/>
                    </Drawer>

                    <div className="navlogo">
                        <Link to="/">
                            <img src={Amazon_logo} alt="amazon logo" />
                        </Link>
                    </div>
                    <div className="nav_searchbaar">
                        <input
                            type="text"
                            name=""
                            placeholder="Search your products..."
                            onChange={(e) => getText(e.target.value)}
                        />
                        <div className="search_icon">
                            <SearchIcon id="search" />
                        </div>

                        {/* SEARCH FILTER */}
                        {text && (
                            <List className="extrasearch" hidden={liopen}>
                                {products
                                    .filter((product) =>
                                        product.title
                                            .toLowerCase()
                                            .includes(text.toLowerCase())
                                    )
                                    .map((product) => (
                                        <ListItem>
                                            <Link
                                                to={`/getproductsone/${product.id}`}
                                                onClick={() => setLiopen(true)}
                                            >
                                                {product.title}
                                            </Link>
                                        </ListItem>
                                    ))}
                            </List>
                        )}
                    </div>
                </div>
                <div className="right">
                    <div className="nav_btn">
                        <Link to="/login">signin</Link>
                    </div>
                    <div className="cart_btn">
                        {account ? (
                            <Link to="/buynow">
                                <Badge
                                    badgeContent={account.carts.length}
                                    color="primary"
                                >
                                    <ShoppingCartIcon id="icon" />
                                </Badge>
                            </Link>
                        ) : (
                            <Link to="/buynow">
                                <Badge badgeContent={0} color="primary">
                                    <ShoppingCartIcon id="icon" />
                                </Badge>
                            </Link>
                        )}

                        <p>Cart</p>
                    </div>
                    {account ? (
                        <Avatar
                            className="avtar2"
                            id="composition-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            {account.fname[0].toUpperCase()}
                        </Avatar>
                    ) : (
                        <Avatar
                            className="avtar"
                            id="composition-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-expanded={open ? "true" : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        ></Avatar>
                    )}

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        {account ? (
                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                    logoutuser();
                                }}
                            >
                                <LogoutIcon
                                    style={{ fontSize: 16, marginRight: 3 }}
                                />
                                Logout
                            </MenuItem>
                        ) : (
                            ""
                        )}
                    </Menu>
                </div>
            </nav>
            <ToastContainer />
        </header>
    );
};

export default Navbar;
