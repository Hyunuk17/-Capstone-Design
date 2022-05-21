"use strict";

let goBack = document.querySelector(".goback");

function goBack2() {
  //main홈페이지로 이동하게끔 링크 바꾸기
  location.href = "signup.html"; //임시로 signup에 링크
}
goBack.addEventListener("click", goBack2);
