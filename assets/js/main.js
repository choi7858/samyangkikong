document.addEventListener("DOMContentLoaded", () => {
  // 1) 환경 판별 & prefix 결정
  const isGithub = location.hostname.includes("github.io");
  const prefix = isGithub ? "/samyangkikong/" : "/";

  // 2) <base> 태그를 head 최상단에 삽입
  document.head.insertAdjacentHTML("afterbegin", `<base href="${prefix}">`);

  // 3) header.html / footer.html 불러오기
  const loadInclude = (id, file) => {
    fetch(`${prefix}${file}`)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.text();
      })
      .then((html) => (document.getElementById(id).innerHTML = html))
      .catch((err) => console.error(`${file} 로딩 실패:`, err));
  };
  loadInclude("header", "header.html");
  loadInclude("footer", "footer.html");

  // 4) Lazy-loading 이미지 처리 (data-src → src)
  document.querySelectorAll("img.lazy-img").forEach((img) => {
    const src = img.dataset.src;
    if (src) img.src = src;
  });
});
