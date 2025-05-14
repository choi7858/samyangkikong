document.addEventListener("DOMContentLoaded", () => {
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

  // ✅ 브레드크럼 링크 수정 (로컬/웹 모두 대응)
  const homeLink = document.getElementById("breadcrumb-home");
  if (homeLink) {
    homeLink.setAttribute("href", prefix);
  }
});
