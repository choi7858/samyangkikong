document.addEventListener("DOMContentLoaded", () => {
  const prefix = window.location.pathname.includes("/samyangkikong/")
    ? "/samyangkikong/"
    : "/";

  fetch(`${prefix}header.html`)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("header").innerHTML = html;

      // ✅ 로고 이미지와 링크 설정
      const logoImg = document.getElementById("site-logo");
      const logoLink = document.getElementById("logo-link");
      if (logoImg) logoImg.src = `${prefix}assets/images/SYlogo.png`;
      if (logoLink) logoLink.href = `${prefix}index.html`; // 홈으로 이동

      // ✅ 메뉴 링크 경로 설정
      document.querySelectorAll(".menu-link").forEach((el) => {
        const page = el.getAttribute("data-page");
        el.setAttribute("href", `${prefix}${page}`);
      });
    });

  fetch(`${prefix}footer.html`)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("footer").innerHTML = html;
    });

  // ✅ 브레드크럼 홈 경로 보정
  const homeLink = document.getElementById("breadcrumb-home");
  if (homeLink) homeLink.setAttribute("href", prefix);
});
