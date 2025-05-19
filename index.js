// Danh sách sản phẩm mẫu
const products = [
  { id: 1, name: 'Sữa rửa mặt dịu nhẹ', price: '190.000đ' },
  { id: 2, name: 'Kem chống nắng SPF50+', price: '250.000đ' },
  { id: 3, name: 'Serum phục hồi', price: '320.000đ' }
];

const productList = document.getElementById('product-list');
if (productList) {
  productList.innerHTML = products.map(product => `
    <div class="card" style="padding:1em;margin-bottom:1em;">
      <h3>${product.name}</h3>
      <p>Giá: <strong>${product.price}</strong></p>
      <button class="btn" onclick="alert('Đã thêm ${product.name} vào giỏ hàng!')">Thêm vào giỏ</button>
    </div>
  `).join('');
}

// Xử lý form tìm kiếm (nếu cần)
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Tính năng tìm kiếm đang phát triển!');
});
