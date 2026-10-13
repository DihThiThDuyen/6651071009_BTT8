// ============================================================
// app.js - Ứng dụng Vue 3 cho shop phụ kiện điện thoại
// ============================================================
// GHI CHÚ SO SÁNH: Nếu dùng Vanilla JS, mỗi lần thêm/xoá giỏ hàng
// mình phải tự querySelector phần tử rồi cập nhật DOM thủ công
// (sửa innerHTML, textContent...). Với Vue, mình chỉ cần thay đổi
// DỮ LIỆU (mảng cart), còn giao diện tự cập nhật nhờ "reactivity".
// Tư tưởng cốt lõi: UI = function(data).

const { createApp } = Vue;

createApp({
  // 1. data(): nơi khai báo toàn bộ dữ liệu "reactive" của app.
  //    Khi các biến này đổi, giao diện tự vẽ lại.
  data() {
    return {
      // Từ khoá ô tìm kiếm, liên kết 2 chiều với input qua v-model
      tuKhoa: "",

      // Giỏ hàng: mảng chứa các sản phẩm đã thêm (ban đầu rỗng)
      cart: [],

      // Danh sách sản phẩm (tối thiểu 6 món)
      products: [
        { id: 1, ten: "Ốp lưng silicon",     gia: 120000, moTa: "Ốp mềm chống sốc, nhiều màu.",        anh: "../images/oplung.jpg" },
        { id: 2, ten: "Tai nghe Bluetooth",   gia: 450000, moTa: "Âm thanh sống động, pin 20 giờ.",      anh: "../images/tainghe.jpg" },
        { id: 3, ten: "Sạc dự phòng 10000mAh", gia: 350000, moTa: "Sạc nhanh, nhỏ gọn mang theo.",        anh: "../images/sacduphong.jpg" },
        { id: 4, ten: "Cáp sạc Type-C",       gia: 80000,  moTa: "Dây bền, truyền dữ liệu nhanh.",       anh: "../images/capsac.jpg" },
        { id: 5, ten: "Giá đỡ điện thoại",    gia: 95000,  moTa: "Gập gọn, điều chỉnh góc nhìn.",        anh: "../images/giado.jpg" },
        { id: 6, ten: "Kính cường lực",       gia: 60000,  moTa: "Chống trầy, cảm ứng mượt.",           anh: "../images/kinhcuongluc.jpg" },
      ],
    };
  },

  // 2. computed: giá trị TỰ TÍNH LẠI mỗi khi dữ liệu liên quan đổi.
  computed: {
    // cartCount: số sản phẩm trong giỏ -> hiển thị ở icon giỏ header.
    cartCount() {
      return this.cart.length;
    },

    // tongTien: cộng dồn giá của mọi sản phẩm trong giỏ.
    tongTien() {
      return this.cart.reduce((tong, sp) => tong + sp.gia, 0);
    },

    // danhSachLoc: lọc products theo tuKhoa (không phân biệt hoa thường).
    // Đây là minh hoạ "UI = function của data": gõ tới đâu, lọc tới đó.
    danhSachLoc() {
      const tu = this.tuKhoa.toLowerCase().trim();
      if (tu === "") return this.products; // không gõ gì -> trả về tất cả
      return this.products.filter((sp) =>
        sp.ten.toLowerCase().includes(tu)
      );
    },
  },

  // 3. methods: các hàm xử lý sự kiện (gọi qua @click).
  methods: {
    // themVaoGio: đẩy 1 sản phẩm vào mảng cart.
    // Chỉ cần push, Vue tự cập nhật icon giỏ + aside giỏ hàng.
    themVaoGio(sanPham) {
      this.cart.push(sanPham);
    },

    // xoaKhoiGio: xoá sản phẩm tại vị trí index khỏi giỏ.
    // splice sửa trực tiếp mảng, Vue tự vẽ lại danh sách + tổng tiền.
    xoaKhoiGio(index) {
      this.cart.splice(index, 1);
    },
  },
}).mount("#app"); // gắn app vào thẻ <div id="app"> trong HTML
