"use strict";

const select = document.querySelector(".choice");
const options = document.querySelectorAll(".option");
const locationValue = document.querySelector(".locationValue");
//클릭한 옵션의 텍스트를 select 안에 넣음
const handleSelect = function (item) {
  select.innerHTML = item.textContent;
  locationValue.value = item.textContent;
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
////
////
////
const select2 = document.querySelector(".choice2");
const options2 = document.querySelectorAll(".option2");
const moneyValue = document.querySelector(".moneyValue");
const handleSelect2 = function (item) {
  select2.innerHTML = item.textContent;
  moneyValue.value = item.value;
  compareValue();
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
//<><>
const select4 = document.querySelector(".choice3");
const options4 = document.querySelectorAll(".option4");
const chargerValue = document.querySelector(".chargerValue");
//클릭한 옵션의 텍스트를 select 안에 넣음
const handleSelect4 = function (item) {
  select4.innerHTML = item.textContent;
  chargerValue.value = item.textContent;
  select4.parentNode.classList.remove("active");
};
// 옵션 클릭시 클릭한 옵션을 넘김
options4.forEach(function (option) {
  option.addEventListener("click", function () {
    handleSelect4(option);
  });
});

select4.addEventListener("click", function () {
  if (select4.parentNode.classList.contains("active")) {
    /*active가 있으면 제거 아니면 추가*/
    select4.parentNode.classList.remove("active");
  } else {
    select4.parentNode.classList.add("active");
  }
});
////
////

////
////
const select3 = document.querySelector(".bChoice");
const options3 = document.querySelectorAll(".option3");
const chargePointValue = document.querySelector(".chargePointValue");
const handleSelect3 = function (item) {
  select3.innerHTML = item.textContent;
  chargePointValue.value = item.value;
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

////
////
const btn = document.querySelector(".pay");
const compareBalance = document.querySelector(".compare");
const balanceValue = document.querySelector(".balance");
function compareValue() {
  if (parseInt(moneyValue.value) > parseInt(balanceValue.textContent)) {
    compareBalance.innerHTML = "잔액이 부족합니다.";
    compareBalance.style.color = "red";
    btn.style.pointerEvents = "none";
    btn.style.backgroundColor = "#777";
  } else {
    compareBalance.innerHTML = "결제를 진행할 수 있습니다.";
    compareBalance.style.color = "#777";
    btn.style.backgroundColor = "#009a7d";
    btn.style.pointerEvents = "";
  }
}
////
////
function pay() {
  document.querySelector(".modal").style.display = "block";
  document.body.style.overflow = "hidden";
}

function yes(obj) {
  if (document.querySelector(".tel").value == "") {
    //번호 입력 안하면 안넘어감
  } else {
    //번호 입력 시 submit
    document.getElementById("frm").submit();
    //alert("결제가 완료되었습니다."); //php에서 띄우는게 나을듯
  }
}

function no(obj) {
  obj.parentNode.parentNode.parentNode.parentNode.style.display = "none";
  document.body.style.overflow = "scroll";
  //window.location.reload();
}

function balance() {
  document.querySelector(".bModal").style.display = "block";
  document.body.style.overflow = "hidden";
}

///
///
