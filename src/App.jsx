
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLinks from "./Components/NavLinks";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Outstand from "./pages/Outstand";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rank from "./Components/Rank";
import Challenges from "./Components/Challenges";
import Forgotpassword from "./Components/Forgotpassword";

function App() {
  return (
    
    <BrowserRouter>
    <NavLinks/>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/outstand" element={<Outstand />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/challenges" element={<Challenges />} />
        
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
