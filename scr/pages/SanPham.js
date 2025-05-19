const products = [
  { id: 1, name: "Sữa rửa mặt dịu nhẹ", price: "190.000đ" },
  { id: 2, name: "Kem chống nắng SPF50+", price: "250.000đ" },
  { id: 3, name: "Serum phục hồi", price: "320.000đ" },
];

export default function SanPham() {
  return (
    <section className="card">
      <h1>Sản phẩm</h1>
      <div>
        {products.map((product) => (
          <div key={product.id} className="card" style={{padding: "1em", marginBottom: "1em"}}>
            <h3>{product.name}</h3>
            <p>Giá: <strong>{product.price}</strong></p>
            <button className="btn">Thêm vào giỏ</button>
          </div>
        ))}
      </div>
    </section>
  );
}
