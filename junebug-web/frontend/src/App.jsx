import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  About,
  Home,
  Footer,
  Login,
  Restaurants,
  Cart,
  Menu,
} from "./components";
import CartProvider from './contexts/CartContext';


function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className='wrapper'>
          <Routes>
            <Route path="/Junebug_website" element={<Home />} />
            <Route path="/Junebug_website/about" element={<About />} />
            <Route path="/Junebug_website/login" element={<Login />} />
            <Route path="/Junebug_website/restaurants" element={<Restaurants />} />
            <Route path="/Junebug_website/cart" element={<Cart />} />
            <Route path="/Junebug_website/menu/:id" element={<Menu />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
