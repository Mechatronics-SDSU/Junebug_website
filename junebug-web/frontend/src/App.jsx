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
  Signup,
  User,
  Checkout
} from "./components";
import CartProvider from './contexts/CartContext';
import useToken from './hooks/useToken';

function App() {
  
  const { token, deleteToken, setToken }  = useToken();

  return (
    <CartProvider>
      <Router>
        <Navbar token={token} deleteToken={deleteToken}/>
        <div className='wrapper'>
          <Routes>
            <Route path="/Junebug_website" element={<Home />} />
            <Route path="/Junebug_website/about" element={<About />} />
            <Route path="/Junebug_website/login" element={<Login setToken={setToken} removeToken={deleteToken}/>} />
            <Route path="/Junebug_website/signup" element={<Signup setToken={setToken} removeToken={deleteToken}/>}/>
            <Route path="/Junebug_website/restaurants" element={<Restaurants />} />
            <Route path="/Junebug_website/cart" element={<Cart />} />
            <Route path="/Junebug_website/menu/:id" element={<Menu />} />
<<<<<<< HEAD
            <Route path="/Junebug_website/user" element={<User />} />
            <Route path="/Junebug_website/checkout" element={<Checkout />}/>
=======
            <Route path="/Junebug_website/user" element={<User token={token} />} />
>>>>>>> 22229fe26ebdf5dadf6e8bcb75ff442972235e11
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
