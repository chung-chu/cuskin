import React from "react";
import "./Home.css";

const products = [
  { id: 1, name: "Sản phẩm 1", image: "https://via.placeholder.com/150", price: "100.000₫" },
  { id: 2, name: "Sản phẩm 2", image: "https://via.placeholder.com/150", price: "200.000₫" },
  { id: 3, name: "Sản phẩm 3", image: "https://via.placeholder.com/150", price: "300.000₫" },
];

const reviews = [
  { id: 1, name: "Khách A", comment: "Sản phẩm rất tốt!", avatar: "https://via.placeholder.com/50" },
  { id: 2, name: "Khách B", comment: "Tôi rất hài lòng!", avatar: "https://via.placeholder.com/50" },
  { id: 3, name: "Khách C", comment: "Sẽ ủng hộ lần sau.", avatar: "https://via.placeholder.com/50" },
];

export default function Home() {
  return (
    <div className="home-container">
      <div className="banner">
        <img src="https://via.placeholder.com/800x250?text=BANNER+CUSKIN" alt="Banner CUSKIN" />
      </div>

      <h2>Sản phẩm nổi bật</h2>
      <div className="products">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
          </div>
        ))}
      </div>

      <h2>Đánh giá khách hàng</h2>
      <div className="reviews">
        {reviews.map((r) => (
          <div className="review-card" key={r.id}>
            <img src={r.avatar} alt={r.name} />
            <div>
              <strong>{r.name}</strong>
              <p>{r.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
