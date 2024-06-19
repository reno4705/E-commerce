import './App.css';
import Navbar from './components/header/NavBar';
import Newnav from './components/new navbar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Signin from './components/register_pages/Signin';
import Signup from './components/register_pages/Signup';
import { Routes,Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Newnav />
      <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/getproductsone/:id" element={<Cart />} />
        <Route path="/buynow" element={<Buynow />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;