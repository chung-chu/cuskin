import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function App() {
  const [popupOpen, setPopupOpen] = useState(true);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cuskin_cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cuskin_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingIndex = cart.findIndex((item) => item.id === product.id);
    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Danh sách sản phẩm mẫu để demo chức năng
  const sampleProducts = [
    { id: 1, name: "Sữa rửa mặt CUSKIN" },
    { id: 2, name: "Kem dưỡng ẩm CUSKIN" },
    { id: 3, name: "Mặt nạ thiên nhiên" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-300 to-rose-500 text-white flex flex-col justify-between">
      {/* Header */}
      <header className="w-full p-4 bg-white/10 backdrop-blur-md shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">💎 CUSKIN</h1>
        <div className="relative">
          <Button className="bg-white text-rose-500 font-bold px-4 py-2 rounded-xl">
            Giỏ hàng ({cart.reduce((total, item) => total + item.quantity, 0)})
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-md mb-4 text-center">
          🌸 Chăm sóc sắc đẹp cùng CUSKIN
        </h2>
        <p className="text-lg md:text-xl text-center max-w-xl mb-6">
          Mỹ phẩm thiên nhiên, dịu nhẹ cho làn da Việt – Từ Hàn Quốc đến tay bạn 💖
        </p>

        <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-6 w-full max-w-md">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Tên sản phẩm bạn muốn tìm..."
              className="p-3 rounded-xl border-none focus:ring-2 focus:ring-white bg-white/70 text-black placeholder-gray-500"
            />
            <Button className="bg-white text-rose-500 font-semibold py-2 hover:bg-pink-200 transition rounded-xl">
              Tìm kiếm ngay
            </Button>
          </form>
        </div>

        {/* Danh sách sản phẩm mẫu */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sampleProducts.map((product) => (
            <div key={product.id} className="bg-white/20 p-4 rounded-xl backdrop-blur-md text-black shadow-lg flex flex-col items-center">
              <h4 className="font-bold mb-2">{product.name}</h4>
              <Button
                onClick={() => addToCart(product)}
                className="bg-rose-500 text-white px-4 py-2 rounded-xl hover:bg-rose-600"
              >
                Thêm vào giỏ
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold">🎁 Ưu đãi đặc biệt hôm nay!</h3>
          <p className="text-md mb-4">Đăng ký nhận mã giảm giá 10% cho đơn hàng đầu tiên!</p>
          <Button className="bg-yellow-300 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition">
            Đăng ký ngay
          </Button>
        </div>
      </main>

      {/* Cart Preview */}
      <div className="p-4 bg-white/20 text-black">
        <h4 className="text-xl font-bold text-white mb-2">🛒 Giỏ hàng của bạn</h4>
        {cart.length === 0 ? (
          <p className="text-white">Giỏ hàng trống.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="bg-white/80 p-3 rounded-xl flex justify-between items-center">
                <div>
                  <strong>{item.name}</strong> - Số lượng: {item.quantity}
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => decreaseQuantity(item.id)} className="bg-rose-300 text-white rounded-xl px-2">-</Button>
                  <Button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white rounded-xl px-2">X</Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer */}
      <footer className="w-full text-center p-4 bg-white/10 backdrop-blur-md text-sm">
        © 2025 CUSKIN – Made with 💖 by Chung Chu | Hotline: 0123 456 789
      </footer>

      {/* Popup */}
      {popupOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-xl p-6 max-w-sm text-center shadow-lg">
            <h4 className="text-xl font-bold mb-2">🎉 Ưu đãi mới!</h4>
            <p className="mb-4">Mua 2 tặng 1 cho mọi đơn hàng hôm nay!</p>
            <Button onClick={() => setPopupOpen(false)} className="bg-rose-500 text-white px-4 py-2 rounded-xl">
              Đóng
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
