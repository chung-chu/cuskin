const featuredProducts = [
  {
    id: 1,
    name: "Sữa rửa mặt dịu nhẹ",
    price: "190.000đ",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=256&q=80"
  },
  {
    id: 2,
    name: "Kem chống nắng SPF50+",
    price: "250.000đ",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=256&q=80"
  },
  {
    id: 3,
    name: "Serum phục hồi",
    price: "320.000đ",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=256&q=80"
  },
  {
    id: 4,
    name: "Toner dưỡng ẩm",
    price: "150.000đ",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=256&q=80"
  }
];

const reviews = [
  {
    name: "Nguyễn Thảo",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Sản phẩm của CUSKIN rất dịu nhẹ, phù hợp với làn da của mình. Giao hàng cũng rất nhanh!",
    stars: 5
  },
  {
    name: "Trần Minh",
    avatar: "https://randomuser.me/api/portraits/men/49.jpg",
    text: "Mình rất thích kem chống nắng, không bị bết dính, thấm nhanh.",
    stars: 4
  },
  {
    name: "Lê Hằng",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Dịch vụ tư vấn của shop rất tốt, sản phẩm chất lượng, mình sẽ ủng hộ tiếp!",
    stars: 5
  }
];

function ReviewStars({stars}) {
  return (
    <span className="review-stars">
      {"★".repeat(stars)}
      {"☆".repeat(5-stars)}
    </span>
  );
}

export default function Home() {
  return (
    <div>
      <div className="banner">
        <div className="banner-content">
          <div className="banner-title">💎 Chăm sóc sắc đẹp cùng CUSKIN</div>
          <div className="banner-desc">
            Mỹ phẩm thiên nhiên, dịu nhẹ cho làn da Việt – Từ Hàn Quốc đến tay bạn.<br />
            <span style={{fontWeight: "bold"}}>Ưu đãi lên tới 30% cho khách hàng mới!</span>
          </div>
          <a href="/sanpham" className="btn" style={{marginTop: "1em", fontWeight: 600}}>Khám phá sản phẩm</a>
        </div>
        <img className="banner-img" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=facearea&w=400&q=80" alt="Banner" />
      </div>

      <div className="poster">
        <div className="poster-content">
          <h2>🎁 Ưu đãi ĐẶC BIỆT hôm nay</h2>
          <p>
            Đăng ký tài khoản ngay để nhận mã giảm giá 10% cho đơn hàng đầu tiên.<br/>
            Mua 2 tặng 1 cho bộ sản phẩm dưỡng da!
          </p>
          <a href="/taikhoan" className="btn" style={{marginTop: "1em"}}>Đăng ký ngay</a>
        </div>
        <img className="poster-img" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=400&q=80" alt="Poster" />
      </div>

      <section className="card">
        <h2>Sản phẩm nổi bật</h2>
        <div className="featured-products">
          {featuredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.img} alt={product.name} />
              <div className="product-name">{product.name}</div>
              <div className="product-price">{product.price}</div>
              <button className="btn">Thêm vào giỏ</button>
            </div>
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <div className="reviews-title">Đánh giá khách hàng</div>
        <div className="reviews-list">
          {reviews.map((review, idx) => (
            <div className="review-card" key={idx}>
              <img className="review-avatar" src={review.avatar} alt={review.name} />
              <div className="review-name">{review.name}</div>
              <ReviewStars stars={review.stars} />
              <div className="review-text">{review.text}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
