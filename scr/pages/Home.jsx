import React from "react";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
import products from "../data/products.json";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="section">
        <h2>Sản phẩm nổi bật</h2>
        <ProductList products={products.slice(0, 4)} />
      </section>
      <section className="section about">
        <h2>Về CUSKIN</h2>
        <p>
          CUSKIN là thương hiệu dược mỹ phẩm hàng đầu Hàn Quốc, chuyên cung cấp các giải pháp chăm sóc da an toàn, hiệu quả và được tin dùng tại Việt Nam.
        </p>
      </section>
    </>
  );
}
