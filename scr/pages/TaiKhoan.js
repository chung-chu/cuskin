export default function TaiKhoan() {
  return (
    <section className="card">
      <h1>Tài khoản</h1>
      <p>Vui lòng đăng nhập hoặc đăng ký để sử dụng các tính năng dành cho khách hàng.</p>
      <form style={{display: "flex", flexDirection: "column", gap: "1em", maxWidth: 300}}>
        <input type="text" placeholder="Tên đăng nhập" />
        <input type="password" placeholder="Mật khẩu" />
        <button className="btn" type="submit">Đăng nhập</button>
      </form>
    </section>
  );
}
