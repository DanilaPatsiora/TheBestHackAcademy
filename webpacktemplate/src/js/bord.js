const changeBorderPass = () => {
  let btn = document.getElementById("password");
  btn.style.borderColor="#E84A5F";
}
const oldBorderPass = () => {
  let btn = document.getElementById("password");
  let v =  document.getElementById("password_input").value;
  let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  if (strongRegex.test(v)){
    btn.style.borderColor="rgba(238, 238, 238, 0.7)";
  } else {
    btn.style.borderColor="red";
  }
  buttonOn();
}

const changeBorderMail = () => {
  let btn = document.getElementById("mail");
  btn.style.borderColor="#E84A5F";
}
const oldBorderMail = () => {
  let btn = document.getElementById("mail");
  let v = document.getElementById("mail_input").value;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(v)) {
    btn.style.borderColor="rgba(238, 238, 238, 0.7)";
  } else {
    btn.style.borderColor="red";
  }
  buttonOn();
}
const buttonOn = () => {
  let m = document.getElementById("mail_input").value;
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let p =  document.getElementById("password_input").value;
  let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  let but=document.getElementById("main_login");
  if (re.test(m) && strongRegex.test(p)){
    but.style.opacity="1.0";
  }else{
    but.style.opacity="0.2";
  }
}
