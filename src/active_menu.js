"use strict";
// 구현 계획
// 1. 모든 섹션 요소들과 메뉴 아이템들으르 가지고 온다.
// 2. IntersectionObserver 를 사용해서 모든 섹션들을 관찰해야 한다.
// 3. 섹션이 보여지면 해당 메뉴 아이템을 활성화 시킨다.
// 섹션의 priority 규칙:
// - 다수의 섹션이 동시에 보여진다면, 상위 배치의 메뉴를 활성화
// - 예외 규칙: Contact 섹션이 보여진다면, Contact 메뉴를 활성화

const sectionIds = [
  "#home",
  "#about",
  "#skills",
  "#work",
  "#testimonial",
  "#contact",
];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[href="${id}"]`)
);
const visibleSections = sectionIds.map(() => false);
let activeNavItem = navItems[0];

const options = {
  rootMargin: "-30% 0px 0px 0px",
  threshold: [0, 0.98],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne;

  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);

    visibleSections[index] = entry.isIntersecting;

    selectLastOne =
      index === sectionIds.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.97;
  });

  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersection(visibleSections);

  selectNavItem(navIndex);
}

function findFirstIntersection(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}

function selectNavItem(index) {
  const navItem = navItems[index];
  if (!navItem) return;
  activeNavItem.classList.remove("active");
  activeNavItem = navItem;
  activeNavItem.classList.add("active");
}
