import "./App.css";
import Navbar from "./components/header/NavBar";
import Newnav from "./components/new navbar/Newnav";
import Maincomp from "./components/home/Maincomp";
import Footer from "./components/footer/Footer";
import Signin from "./components/register_pages/Signin";
import Signup from "./components/register_pages/Signup";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Buynow from "./components/buynow/Buynow";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setData(true);
        }, 2000);
    }, []);
    return (
        <div className="App">
            {data ? (
                <>
                    <Navbar />
                    <Newnav />
                    <Routes>
                        <Route path="/" element={<Maincomp />} />
                        <Route path="/register" element={<Signup />} />
                        <Route path="/login" element={<Signin />} />
                        <Route path="/getproductsone/:id" element={<Cart />} />
                        <Route path="/buynow" element={<Buynow />} />
                    </Routes>
                    <Footer />
                </>
            ) : (
                <div className="circle">
                    <CircularProgress />
                    <h2>Loadinng...</h2>
                </div>
            )}
        </div>
    );
}

export default App;
