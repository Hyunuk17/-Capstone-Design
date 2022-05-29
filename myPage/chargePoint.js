"use strict";

let point = document.querySelector(".point");
function showValue(obj) {
  point.value = obj.value;
}

function checkMsg() {
  if (confirm("결제하시겠습니까?") === false) {
    return false;
  }
}
