import React from "react";
import ProductList from "../components/ProductList";
import products from "../data/products.json";

export default function Products() {
  return (
    <section className="section">
      <h2>Tất cả sản phẩm</h2>
      <ProductList products={products} />
    </section>
  );
}
