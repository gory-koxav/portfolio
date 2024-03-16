// 페이지 아래로 스크롤 시, Header 에 다크 스타일링 적용
const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// 페이지 아래로 스크롤 시, 콘텐츠 점진적 투명화
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;

document.addEventListener("scroll", () => {
  if (window.scrollY < homeHeight) {
    homeContainerOpacity = 1 - window.scrollY / homeHeight;
  } else {
    homeContainerOpacity = 0;
  }
  home.style.opacity = homeContainerOpacity;
});
