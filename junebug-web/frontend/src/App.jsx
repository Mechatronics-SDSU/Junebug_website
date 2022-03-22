import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  About,
  Home,
  Footer,
  Login,
  Order,
  Cart,
} from "./components";


function App() {
  return (
    <Router>
      <Navbar />
      <div className='wrapper'>
        <Routes>
          <Route exact path="/Junebug_website" element={<Home />} />
          <Route exact path="/Junebug_website/about" element={<About />} />
          <Route exact path="/Junebug_website/login" element={<Login />} />
          <Route exact path="/Junebug_website/order" element={<Order />} />
          <Route exact path="/Junebug_website/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
