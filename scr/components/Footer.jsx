import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="cuskin-footer">
      <div className="container">
        <div>© {new Date().getFullYear()} CUSKIN – Made with 💖 by Chung Chu</div>
        <div>Hotline: 0123 456 789 | Địa chỉ: 18 Phổ Quang, Q.Tân Bình, TP.HCM</div>
      </div>
    </footer>
  );
}
