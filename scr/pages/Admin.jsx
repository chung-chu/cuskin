import React, { useState } from "react";
import "./Admin.css";

export default function Admin() {
  const [tab, setTab] = useState("products");
  return (
    <section className="section admin-page">
      <h2>Quản trị CUSKIN</h2>
      <div className="admin-tabs">
        <button className={tab === "products" ? "active" : ""} onClick={() => setTab("products")}>Quản lý sản phẩm</button>
        <button className={tab === "orders" ? "active" : ""} onClick={() => setTab("orders")}>Đơn hàng</button>
        <button className={tab === "contacts" ? "active" : ""} onClick={() => setTab("contacts")}>Liên hệ</button>
      </div>
      <div className="admin-content">
        {tab === "products" && (
          <>
            <h3>Danh sách sản phẩm</h3>
            <p>(Chức năng CRUD: Thêm, Sửa, Xóa sản phẩm sẽ bổ sung sau)</p>
            <ul>
              <li>Serum Phục Hồi Da</li>
              <li>Kem Dưỡng Ẩm Sâu</li>
              <li>Toner Cân Bằng Da</li>
              <li>Sữa Rửa Mặt Dịu Nhẹ</li>
            </ul>
          </>
        )}
        {tab === "orders" && (
          <>
            <h3>Quản lý đơn hàng</h3>
            <p>(Tính năng quản lý đơn hàng sẽ bổ sung sau)</p>
          </>
        )}
        {tab === "contacts" && (
          <>
            <h3>Quản lý liên hệ</h3>
            <p>(Tính năng xem danh sách liên hệ sẽ bổ sung sau)</p>
          </>
        )}
      </div>
    </section>
  );
}
