"use strict";

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
let homeContainerOpacity = 1;

document.addEventListener("scroll", () => {
  if (window.scrollY < homeHeight) {
    homeContainerOpacity = 1 - window.scrollY / homeHeight;
  } else {
    homeContainerOpacity = 0;
  }
  home.style.opacity = homeContainerOpacity;
});

// 상단 스크롤에서 Arrow-up 숨기기
const arrowUp = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("arrow-up--show");
  } else {
    arrowUp.classList.remove("arrow-up--show");
  }
});

// 모바일 화면에서 햄버거 클릭 시 nav 보이기
const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");

navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// 모바일 화면에서 navbar 메뉴 클릭 시 자동으로 메뉴 닫기
navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});
