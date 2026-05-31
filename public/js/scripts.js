/* script.js */

// Lấy phần tử nút ra
const backToTopBtn = document.getElementById("backToTopBtn");

// Lắng nghe sự kiện cuộn chuột
window.addEventListener("scroll", () => {
    // Nếu cuộn xuống quá 300px thì hiện nút
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        // Ngược lại thì ẩn đi
        backToTopBtn.classList.remove("show");
    }
});

// Khi click vào nút thì cuộn mượt mà lên đầu trang
backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Ngăn chặn trang bị giật tung lên đầu
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Hiệu ứng cuộn trượt mượt
    });
});