import React from "react";

export default function Contact() {
  return (
    <section className="section">
      <h2>Liên hệ với chúng tôi</h2>
      <p>Hotline: 0123 456 789</p>
      <p>Email: info@cuskin.vn</p>
      <p>Địa chỉ: 18 Phổ Quang, Q.Tân Bình, TP.HCM</p>
      <form className="contact-form">
        <input placeholder="Họ tên" required />
        <input placeholder="Email" required type="email" />
        <textarea placeholder="Nội dung" required />
        <button type="submit">Gửi liên hệ</button>
      </form>
    </section>
  );
}
