import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="cuskin-header">
      <div className="container">
        <NavLink to="/" className="logo">
          <img src={logo} alt="CUSKIN logo" height={40} />
          <span>CUSKIN VIỆT NAM</span>
        </NavLink>
        <nav>
          <NavLink to="/products" activeclassname="active">Sản phẩm</NavLink>
          <NavLink to="/about" activeclassname="active">Giới thiệu</NavLink>
          <NavLink to="/contact" activeclassname="active">Liên hệ</NavLink>
        </nav>
      </div>
    </header>
  );
}
