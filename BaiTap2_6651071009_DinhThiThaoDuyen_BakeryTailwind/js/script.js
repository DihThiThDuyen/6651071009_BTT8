// ============================================================
// script.js - JavaScript thuần xử lý menu điều hướng trên di động
// ============================================================
// Tailwind KHÔNG có sẵn JS như Bootstrap, nên hành vi đóng/mở menu
// mobile phải tự viết tay ở đây.

// 1. Lấy ra 2 phần tử cần thao tác:
//    - Nút hamburger (icon ba gạch ngang) chỉ hiện trên di động
//    - Khối menu di động đang bị ẩn (class "hidden")
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

// 2. Khi người dùng CLICK vào hamburger:
//    toggle (bật/tắt) class "hidden" và "flex" của menu di động.
//    - Nếu đang "hidden" -> bỏ "hidden", thêm "flex" => menu hiện ra
//    - Nếu đang "flex"   -> bỏ "flex", thêm "hidden" => menu ẩn đi
hamburger.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("flex");
});

// 3. Trải nghiệm tốt hơn: khi bấm vào một mục trong menu di động,
//    tự động đóng menu lại cho gọn.
const menuLinks = mobileMenu.querySelectorAll("a");
menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
  });
});
