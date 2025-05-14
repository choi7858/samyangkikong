document.addEventListener("DOMContentLoaded", () => {
  // 현재 경로에서 prefix 추출 (e.g., /samyangkikong/)
  const prefix = window.location.pathname.includes("/samyangkikong/")
    ? "/samyangkikong/"
    : "/";

  fetch(`${prefix}header.html`)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("header").innerHTML = html;
    })
    .catch((err) => console.error("헤더 로딩 실패:", err));

  fetch(`${prefix}footer.html`)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch((err) => console.error("푸터 로딩 실패:", err));
});
