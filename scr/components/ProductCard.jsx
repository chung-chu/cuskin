import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.shortDesc}</p>
        <button>Xem chi tiết</button>
      </div>
    </div>
  );
}
