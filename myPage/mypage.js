"use strict";
const modal = document.querySelector(".modal");
const btn = document.querySelector(".openModal");
const exit = document.querySelector(".exit");

btn.addEventListener("click", function () {
  modal.style.display = "block";
});
exit.addEventListener("click", function () {
  modal.style.display = "none";
});
