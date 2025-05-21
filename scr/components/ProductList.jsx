import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

export default function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map(prod => <ProductCard key={prod.id} product={prod} />)}
    </div>
  );
}
