const changeBorderPass = () => {
  let btn = document.getElementById("password");
  btn.style.borderColor="#E84A5F";
}
const oldBorderPass = () => {
  let btn = document.getElementById("password");
  let v =  document.getElementById("password_input").value;
  let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  let pass= document.getElementById("password_help");
  let login= document.getElementById("LOGIN_BUTTON");
  if (strongRegex.test(v) || v==""){
    btn.style.borderColor="rgba(238, 238, 238, 0.2)";
    pass.style.display = "none";
    login.style.marginTop = "60px";
  } else {
    btn.style.borderColor="red";
    pass.style.display = "flex";
    login.style.marginTop = "0";
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
  if (re.test(v)|| v=="") {
    btn.style.borderColor="rgba(238, 238, 238, 0.2)";
    document.getElementById("mail_help").style.display = "none";
    btn.style.marginTop ="23px";
  } else {
    btn.style.borderColor="red";
    btn.style.marginTop = "0";
    document.getElementById("mail_help").style.display = "block";
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
    document.getElementById("main_login").disabled = false;
  }else{
    but.style.opacity="0.2";
    document.getElementById("main_login").disabled = true;
  }
}
