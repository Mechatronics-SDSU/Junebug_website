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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
