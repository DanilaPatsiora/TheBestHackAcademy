window.onload = function() {
let main_modal = document.getElementById("mainModal");
let cross_main = document.getElementById("cross_main");

let forgot_modal = document.getElementById("forgot_modal");
let cross_forgot = document.getElementById("cross_forgot");

let sign_up_modal = document.getElementById("sign_up_modal");
let cross_sign_up = document.getElementById("cross_sign_up");
let sign_up_btn = document.getElementById("sign_up-button_action");

window.top_login_btn = function () {
  main_modal.style.display = "block";
}

window.forgot_btn = function () {
  main_modal.style.display = "none";
  forgot_modal.style.display = "block";
}

window.sign_up_btn = function () {
  main_modal.style.display = "none";
  sign_up_modal.style.display = "block";
}

cross_main.onclick = function() {
  main_modal.style.display = "none";
}

cross_forgot.onclick = function() {
  forgot_modal.style.display = "none";
}

cross_sign_up.onclick = function() {
  sign_up_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == main_modal){
  main_modal.style.display = "none";
  }
  if (event.target == forgot_modal){
  forgot_modal.style.display = "none";
  }
  if (event.target == sign_up_modal){
  sign_up_modal.style.display = "none";
  }
}
}
