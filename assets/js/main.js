document.addEventListener("DOMContentLoaded", () => {
  const isGithub = location.hostname.includes("github.io");
  const prefix = isGithub ? "/samyangkikong/" : "/";

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
    })
    .catch((err) => console.error("헤더 로딩 실패:", err));

  fetch(`${prefix}footer.html`)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch((err) => console.error("푸터 로딩 실패:", err));

  const homeLink = document.getElementById("breadcrumb-home");
  if (homeLink) homeLink.href = prefix;

  document.querySelectorAll("img.lazy-img").forEach((img) => {
    const path = img.getAttribute("data-src");
    if (path) img.setAttribute("src", `${prefix}${path}`);
  });
});
