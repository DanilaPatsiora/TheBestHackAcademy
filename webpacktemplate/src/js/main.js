var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[1];
var modal2 = document.getElementById("modal2");
var span2 = document.getElementsByClassName("close")[0];
var btn2 = document.getElementById("forgotBtn");
btn.onclick = function () {
  modal.style.display = "block";
}
btn2.onclick = function () {
  modal.style.display = "none";
  modal2.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal){
  modal.style.display = "none";
  }
  if (event.target == modal2){
  modal2.style.display = "none";
  }
}

const changeBorder = (a) => {
  console.log(a);
  a.style.borderColor="red";
  
}
