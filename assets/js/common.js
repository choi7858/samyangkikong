// common.js

const basePath =
  location.hostname.includes("localhost") ||
  location.hostname.includes("127.0.0.1")
    ? ""
    : "/samyangkikong";
const rootPath = location.pathname
  .split("/")
  .slice(0, -1)
  .map(() => "..")
  .join("/");

// Load header
fetch(`${rootPath}/header.html`)
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("header").innerHTML = html;

    const logo = document.querySelector("#header a.navbar-brand");
    if (logo)
      logo.setAttribute("href", `${location.origin}${basePath}/index.html`);

    const logoImg = logo?.querySelector("img");
    if (logoImg && logoImg.getAttribute("src").startsWith("./")) {
      const normalized = logoImg.getAttribute("src").replace(/^\.\//, "");
      logoImg.setAttribute("src", `${basePath}/${normalized}`);
    }
  });

// Load footer
fetch(`${rootPath}/footer.html`)
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("footer").innerHTML = html;
  });

// Dynamic breadcrumb setup
const breadcrumbList = document.getElementById("breadcrumb-list");
if (breadcrumbList) {
  const pageTitle =
    document.querySelector("h1")?.textContent.trim() || "현재 위치";
  const fullBase = `${location.origin}${basePath}`;
  breadcrumbList.innerHTML = `
    <li class="breadcrumb-item"><a href="${fullBase}/index.html">홈</a></li>
    <li class="breadcrumb-item"><a href="${fullBase}/products.html">제품소개</a></li>
    <li class="breadcrumb-item active" aria-current="page">${pageTitle}</li>
  `;
}
