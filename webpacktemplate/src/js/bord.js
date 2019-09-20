const RedBorderPassword = () => {
  let password_border = document.getElementById("password_border");
  password_border.style.borderColor="#E84A5F";
}
const FreeBorderPassword = () => {
  let password_border = document.getElementById("password_border");
  let password_value =  document.getElementById("password_input").value;
  let password_regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  let password_help= document.getElementById("password_help");
  let login_box= document.getElementById("login_box");
  if (password_regex.test(password_value) || password_value==""){
    password_border.style.borderColor="rgba(238, 238, 238, 0.2)";
    password_help.style.display = "none";
    login_box.style.marginTop = "60px";
  } else {
    password_border.style.borderColor="red";
    password_help.style.display = "flex";
    login_box.style.marginTop = "0";
  }
}

const RedBorderMail = () => {
  let mail_border = document.getElementById("mail_border");
  mail_border.style.borderColor="#E84A5F";
}
const FreeBorderMail = () => {
  let mail_border = document.getElementById("mail_border");
  let mail_value = document.getElementById("mail_input").value;
  let mail_help = document.getElementById("mail_help");
  let mail_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (mail_regex.test(mail_value)|| mail_value=="") {
    mail_border.style.borderColor="rgba(238, 238, 238, 0.2)";
    mail_help.style.display = "none";
    mail_border.style.marginTop ="23px";
  } else {
    mail_border.style.borderColor="red";
    mail_border.style.marginTop = "0";
    mail_help.style.display = "block";
  }
}
const buttonOn = () => {
  let mail_value = document.getElementById("mail_input").value;
  let mail_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let password_value = document.getElementById("password_input").value;
  let password_regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  let login_button = document.getElementById("main_login");
  if (mail_regex.test(mail_value) && password_regex.test(password_value)){
    login_button.style.opacity="1.0";
    login_button.disabled = false;
  }else{
    login_button.style.opacity="0.2";
    login_button.disabled = true;
  }
}
