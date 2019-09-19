var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[2];
var modal2 = document.getElementById("modal2");
var modal2 = document.getElementById("modal3");
var span2 = document.getElementsByClassName("close")[0];
var span3 = document.getElementsByClassName("close")[1];
var btn2 = document.getElementById("forgotBtn");
var btn3 = document.getElementById("sign_up_button_action");
btn.onclick = function () {
  modal.style.display = "block";
}
btn2.onclick = function () {
  modal.style.display = "none";
  modal2.style.display = "block";
}
btn3.onclick = function () {
  modal.style.display = "none";
  modal3.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal){
  modal.style.display = "none";
  }
  if (event.target == modal2){
  modal2.style.display = "none";
  }
  if (event.target == modal3){
  modal3.style.display = "none";
  }
}
