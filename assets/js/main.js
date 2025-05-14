document.addEventListener("DOMContentLoaded", () => {
  const prefix = window.location.pathname.includes("/samyangkikong/")
    ? "/samyangkikong/"
    : "/";

  // ✅ header
  fetch(`${prefix}header.html`)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("header").innerHTML = html;

      const logo = document.getElementById("site-logo");
      if (logo) logo.src = `${prefix}assets/images/SYlogo.png`;

      const logoLink = document.getElementById("logo-link");
      if (logoLink) logoLink.href = `${prefix}index.html`;

      document.querySelectorAll(".menu-link").forEach((el) => {
        const page = el.getAttribute("data-page");
        el.setAttribute("href", `${prefix}${page}`);
      });
    });

  // ✅ footer
  fetch(`${prefix}footer.html`)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("footer").innerHTML = html;
    });

  // ✅ 브레드크럼 홈
  const homeLink = document.getElementById("breadcrumb-home");
  if (homeLink) homeLink.href = prefix;

  // ✅ 코드 이미지 src 경로 설정
  document.querySelectorAll(".code-img").forEach((img) => {
    const src = img.getAttribute("data-src");
    img.setAttribute("src", `${prefix}assets/${src}`);
  });
});
