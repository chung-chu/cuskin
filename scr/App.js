import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <NavLink to="/" end className="logo">
            <span>CUSKIN</span>
          </NavLink>
          <NavLink to="/products">Sản phẩm</NavLink>
          <NavLink to="/about">Giới thiệu</NavLink>
          <NavLink to="/contact">Liên hệ</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <div>© 2025 CUSKIN – Made with 💖 by Chung Chu | Hotline: 0123 456 789</div>
      </footer>
    </>
  );
}

export default App;
