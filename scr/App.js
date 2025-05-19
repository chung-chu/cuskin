import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import SanPham from "./pages/SanPham";
import BaiViet from "./pages/BaiViet";
import GioiThieu from "./pages/GioiThieu";
import GioHang from "./pages/GioHang";
import TaiKhoan from "./pages/TaiKhoan";
import ThanhToan from "./pages/ThanhToan";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" end>CUSKIN</NavLink>
        <NavLink to="/sanpham">Sản phẩm</NavLink>
        <NavLink to="/baiviet">Bài viết</NavLink>
        <NavLink to="/gioithieu">Giới thiệu</NavLink>
        <NavLink to="/giohang">Giỏ hàng</NavLink>
        <NavLink to="/taikhoan">Tài khoản</NavLink>
        <NavLink to="/thanhtoan">Thanh toán</NavLink>
      </nav>
      <main style={{maxWidth: 900, margin: "2em auto"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sanpham" element={<SanPham />} />
          <Route path="/baiviet" element={<BaiViet />} />
          <Route path="/gioithieu" element={<GioiThieu />} />
          <Route path="/giohang" element={<GioHang />} />
          <Route path="/taikhoan" element={<TaiKhoan />} />
          <Route path="/thanhtoan" element={<ThanhToan />} />
        </Routes>
      </main>
      <footer>
        © 2025 CUSKIN – Made with 💖 by Chung Chu | Hotline: 0123 456 789
      </footer>
    </BrowserRouter>
  );
}

export default App;
