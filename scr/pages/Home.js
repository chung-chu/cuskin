import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="banner">
        <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80" alt="Banner CUSKIN" />
        <div className="banner-text">
          <h1>CUSKIN VIỆT NAM</h1>
          <p>Chăm sóc làn da khỏe mạnh, rạng rỡ mỗi ngày</p>
          <a href="#products" className="cta-btn">Xem sản phẩm</a>
        </div>
      </div>

      <section className="section" id="products">
        <h2>Sản phẩm nổi bật</h2>
        <div className="products">
          <div className="product-card">
            <img src="https://via.placeholder.com/150/FFC0CB/000000?text=Serum+1" alt="Serum 1" />
            <h3>Serum Dưỡng Ẩm</h3>
            <p>250.000₫</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150/FFD700/000000?text=Serum+2" alt="Serum 2" />
            <h3>Serum Sáng Da</h3>
            <p>320.000₫</p>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150/ADD8E6/000000?text=Serum+3" alt="Serum 3" />
            <h3>Serum Chống Lão Hóa</h3>
            <p>400.000₫</p>
          </div>
        </div>
      </section>

      <section className="section reviews">
        <h2>Khách hàng nói gì?</h2>
        <div className="reviews-list">
          <div className="review-card">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="avatar" />
            <div>
              <strong>Trần Lan</strong>
              <p>Sản phẩm tuyệt vời, phù hợp với da nhạy cảm!</p>
            </div>
          </div>
          <div className="review-card">
            <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="avatar" />
            <div>
              <strong>Nam Phạm</strong>
              <p>Chất lượng vượt mong đợi, sẽ tiếp tục ủng hộ.</p>
            </div>
          </div>
          <div className="review-card">
            <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="avatar" />
            <div>
              <strong>Nguyễn Hồng</strong>
              <p>Da mình cải thiện rõ rệt sau 1 tháng sử dụng!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
