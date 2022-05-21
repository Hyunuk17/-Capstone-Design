"use strict";
const select = document.querySelector(".choice");
const options = document.querySelectorAll(".option");
//클릭한 옵션의 텍스트를 select 안에 넣음
const handleSelect = function (item) {
  select.innerHTML = item.textContent;
  select.parentNode.classList.remove("active");
};
// 옵션 클릭시 클릭한 옵션을 넘김
options.forEach(function (option) {
  option.addEventListener("click", function () {
    handleSelect(option);
  });
});

select.addEventListener("click", function () {
  if (select.parentNode.classList.contains("active")) {
    /*active가 있으면 제거 아니면 추가*/
    select.parentNode.classList.remove("active");
  } else {
    select.parentNode.classList.add("active");
  }
});

const select2 = document.querySelector(".choice2");
const options2 = document.querySelectorAll(".option2");
const handleSelect2 = function (item) {
  select2.innerHTML = item.textContent;
  select2.parentNode.classList.remove("active");
};
// 옵션 클릭시 클릭한 옵션을 넘김
options2.forEach(function (option) {
  option.addEventListener("click", function () {
    handleSelect2(option);
  });
});

select2.addEventListener("click", function () {
  if (select2.parentNode.classList.contains("active")) {
    /*active가 있으면 제거 아니면 추가*/
    select2.parentNode.classList.remove("active");
  } else {
    select2.parentNode.classList.add("active");
  }
});

const select3 = document.querySelector(".bChoice");
const options3 = document.querySelectorAll(".option3");
const handleSelect3 = function (item) {
  select3.innerHTML = item.textContent;
  select3.parentNode.classList.remove("active");
};
// 옵션 클릭시 클릭한 옵션을 넘김
options3.forEach(function (option) {
  option.addEventListener("click", function () {
    handleSelect3(option);
  });
});

select3.addEventListener("click", function () {
  if (select3.parentNode.classList.contains("active")) {
    /*active가 있으면 제거 아니면 추가*/
    select3.parentNode.classList.remove("active");
  } else {
    select3.parentNode.classList.add("active");
  }
});

function pay() {
  document.querySelector(".modal").style.display = "block";
}

function yes(obj) {
  alert("결제가 완료되었습니다.");
  obj.parentNode.parentNode.parentNode.style.display = "none";
  window.location.reload();
}

function no(obj) {
  obj.parentNode.parentNode.parentNode.style.display = "none";
}

function balance() {
  document.querySelector(".bModal").style.display = "block";
}
