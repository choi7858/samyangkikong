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

  // ✅ Breadcrumb 생성
  const breadcrumb = document.getElementById("breadcrumb");
  const path = window.location.pathname;

  breadcrumb.innerHTML = `
    <li class="breadcrumb-item"><a href="${prefix}">홈</a></li>
    <li class="breadcrumb-item active" aria-current="page">
      ${path.endsWith("products.html") ? "제품소개" : "페이지"}
    </li>
  `;
});
