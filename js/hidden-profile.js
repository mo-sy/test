const closeBtn = document.querySelectorAll(".btn--close");
const profile_pannel__rabbit = document.querySelector(
  ".hidden-profile--rabbit"
);

const profile_pannel__cookie = document.querySelector(
  ".hidden-profile--cookie"
);
const profile_pannel__coco = document.querySelector(".hidden-profile--coco");
const profile_pannel__lion = document.querySelector(".hidden-profile--lion");
const profile_pannel__tom = document.querySelector(".hidden-profile--tom");

const friends = document.querySelectorAll(".friends-user");

closeBtn[0].addEventListener("click", function () {
  profile_pannel__rabbit.classList.remove("show");
});

closeBtn[1].addEventListener("click", function () {
  profile_pannel__cookie.classList.remove("show");
});

closeBtn[2].addEventListener("click", function () {
  profile_pannel__coco.classList.remove("show");
});

closeBtn[3].addEventListener("click", function () {
  profile_pannel__lion.classList.remove("show");
});

closeBtn[4].addEventListener("click", function () {
  profile_pannel__tom.classList.remove("show");
});

friends[0].addEventListener("click", function () {
  profile_pannel__rabbit.classList.add("show");
});

friends[1].addEventListener("click", function () {
  profile_pannel__cookie.classList.add("show");
});

friends[2].addEventListener("click", function () {
  profile_pannel__coco.classList.add("show");
});

friends[3].addEventListener("click", function () {
  profile_pannel__lion.classList.add("show");
});

friends[4].addEventListener("click", function () {
  profile_pannel__tom.classList.add("show");
});
