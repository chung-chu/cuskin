import React from "react";
import "./Banner.css";
import bannerImg from "../assets/banner.jpg";

export default function Banner() {
  return (
    <section className="cuskin-banner">
      <img src={bannerImg} alt="Banner" />
      <div className="banner-content">
        <h1>Chăm sóc làn da chuẩn Hàn Quốc với Cuskin</h1>
        <p>Dược mỹ phẩm nhập khẩu, an toàn & hiệu quả.</p>
      </div>
    </section>
  );
}
