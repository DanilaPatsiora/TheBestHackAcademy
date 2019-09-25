window.redBorderPassword = () => {
  let password_border = document.getElementById("password_border");
  password_border.style.borderColor = "#E84A5F";
}
window.freeBorderPassword = () => {
  let password_border = document.getElementById("password_border");
  let password_value = document.getElementById("password_input").value;
  let password_regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  let password_help = document.getElementById("password_help");
  let mail_help = document.getElementById("mail_help");
  let login_box = document.getElementById("login_box");

  if (password_regex.test(password_value) || password_value == "") {
    password_border.style.borderColor = "rgba(238, 238, 238, 0.2)";
    password_help.style.display = "none";

    if (mail_help.style.display == "none") {
      login_box.style.marginTop = "60px";
    }
  } else {
    password_border.style.borderColor = "red";

    if (mail_help.style.display == "none" || mail_help.style.display == "") {
      password_help.style.display = "flex";
      login_box.style.marginTop = "0";
    }
  }
}
window.redBorderMail = () => {
  let mail_border = document.getElementById("mail_border");
  mail_border.style.borderColor = "#E84A5F";
}
window.freeBorderMail = () => {
  let mail_border = document.getElementById("mail_border");
  let mail_value = document.getElementById("mail_input").value;
  let mail_help = document.getElementById("mail_help");
  let password_help = document.getElementById("password_help");
  let mail_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let login_box = document.getElementById("login_box");

  if (mail_regex.test(mail_value) || mail_value == "") {
    mail_border.style.borderColor = "rgba(238, 238, 238, 0.2)";
    mail_help.style.display = "none";
    login_box.style.marginTop = "60px";
    window.freeBorderPassword();
  } else {
    password_help.style.display = "none";
    mail_border.style.borderColor = "red";
    mail_help.style.display = "block";
    login_box.style.marginTop = "0";

  }
}
window.buttonOn = () => {
  let mail_value = document.getElementById("mail_input").value;
  let mail_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let password_value = document.getElementById("password_input").value;
  let password_regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\(\)\-\+\=\|\.\_\,\*])(?=.{8,})");
  let login_button = document.getElementById("main_login");

  if (mail_regex.test(mail_value) && password_regex.test(password_value)) {
    login_button.style.opacity = "1.0";
    login_button.disabled = false;
  } else {
    login_button.style.opacity = "0.2";
    login_button.disabled = true;
  }
}


window.enter_subm_login = (event) => {
  if (event.keyCode == 13) {
    let state = document.getElementById("main_login");

    if (state.disabled == false){
      console.log(14);
    }
  }
}

window.redBorderMailForgot = () => {
  let mail_border_forgot = document.getElementById("mail_border-forgot");
  mail_border_forgot.style.borderColor = "#E84A5F";
}
window.freeBorderMailForgot = () => {
  let mail_border = document.getElementById("mail_border-forgot");
  let mail_value = document.getElementById("mail_input_forgot").value;
  let mail_help = document.getElementById("mail_help-forgot");
  let mail_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let login_box = document.getElementById("reset_box");

  if (mail_regex.test(mail_value) || mail_value == "") {
    mail_border.style.borderColor = "rgba(238, 238, 238, 0.2)";
    mail_help.style.display = "none";
    login_box.style.marginTop = "60px";
  } else {
    password_help.style.display = "none";
    mail_border.style.borderColor = "red";
    mail_help.style.display = "block";
    login_box.style.marginTop = "0";
  }
}

window.buttonOnForgot = () => {
  let mail_value = document.getElementById("mail_input_forgot").value;
  let mail_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let reset_button = document.getElementById("forgot_reset");

  if (mail_regex.test(mail_value)) {
    reset_button.style.opacity = "1.0";
    reset_button.disabled = false;
  } else {
    reset_button.style.opacity = "0.2";
    reset_button.disabled = true;
  }
}

window.enter_subm_forgot = (event) => {
  if (event.keyCode == 13) {
    let state = document.getElementById("forgot_reset");

    if (state.disabled == false){
      console.log(14);
    }
  }
}



window.redBorderMailSignUp = () => {
  let mail_border_forgot = document.getElementById("mail_border-sign_up");
  mail_border_forgot.style.borderColor = "#E84A5F";
}
window.freeBorderMailSignUp = () => {
  let mail_border = document.getElementById("mail_border-sign_up");
  let mail_value = document.getElementById("mail_input_sign_up").value;
  let mail_help = document.getElementById("mail_help_sign_up");
  let password_help = document.getElementById("password_help_sign_up");
  let confirm_help = document.getElementById("confirm_help_sign_up");
  let mail_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let login_box = document.getElementById("create_box");

  if (mail_regex.test(mail_value) || mail_value == "") {
    mail_border.style.borderColor = "rgba(238, 238, 238, 0.2)";
    mail_help.style.display = "none";
    login_box.style.marginTop = "60px";
    window.freeBorderPasswordSignUp();
  } else {
    password_help.style.display = "none";
    confirm_help.style.display = "none";
    mail_border.style.borderColor = "red";
    mail_help.style.display = "block";
    login_box.style.marginTop = "0";
  }
}
window.redBorderPasswordSignUp = () => {
  let password_border = document.getElementById("password_border_sign_up");
  password_border.style.borderColor = "#E84A5F";
}
window.freeBorderPasswordSignUp = () => {
  let password_border = document.getElementById("password_border_sign_up");
  let password_value = document.getElementById("password_input_sign_up").value;
  let password_regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  let password_help = document.getElementById("password_help_sign_up");
  let mail_help = document.getElementById("mail_help_sign_up");
  let login_box = document.getElementById("create_box");
  let confirm_help = document.getElementById("confirm_help_sign_up");

  if (password_regex.test(password_value) || password_value == "") {
      password_border.style.borderColor = "rgba(238, 238, 238, 0.2)";
      password_help.style.display = "none";

      if (mail_help.style.display == "none" || mail_help.style.display == "") {
        login_box.style.marginTop = "60px";
        window.freeBorderConfirmSignUp();
      }
    } else {
      password_border.style.borderColor = "red";
      confirm_help.style.display = "none";
      if (mail_help.style.display == "none" || mail_help.style.display == "") {
        password_help.style.display = "flex";
        login_box.style.marginTop = "0";
      }
    }
}


window.redBorderConfirmSignUp = () => {
  let confirm_border = document.getElementById("confirm_password_border_sign_up");
  confirm_border.style.borderColor = "#E84A5F";
}

window.freeBorderConfirmSignUp = () => {
  let confirm_border = document.getElementById("confirm_password_border_sign_up");
  let password_value = document.getElementById("password_input_sign_up").value;
  let confirm_value = document.getElementById("confirm_password_input_sign_up").value;
  let confirm_help = document.getElementById("confirm_help_sign_up");
  let mail_help = document.getElementById("mail_help_sign_up");
  let password_help = document.getElementById("password_help_sign_up");
  let login_box = document.getElementById("create_box");

  if ( password_value == confirm_value ) {
      confirm_border.style.borderColor = "rgba(238, 238, 238, 0.2)";
      confirm_help.style.display = "none";

      if (mail_help.style.display == "none" || mail_help.style.display == ""  ) {

        if (password_help.style.display == "none" || password_help.style.display == ""  ) {
          login_box.style.marginTop = "60px";
        }
      }
    } else {
      confirm_border.style.borderColor = "red";

      if (mail_help.style.display == "none" || mail_help.style.display == "") {

        if (password_help.style.display == "none" || password_help.style.display == "") {
          confirm_help.style.display = "flex";
          login_box.style.marginTop = "0";
        }
      }
    }
}

window.buttonOnSignUp = () => {
  let mail_value = document.getElementById("mail_input_sign_up").value;
  let mail_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let password_value = document.getElementById("password_input_sign_up").value;
  let confirm_value = document.getElementById("confirm_password_input_sign_up").value;
  let password_regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\(\)\-\+\=\|\.\_\,\*])(?=.{8,})");
  let login_button = document.getElementById("sign_up_create");

  if (mail_regex.test(mail_value) && password_regex.test(password_value) && password_value==confirm_value) {
    login_button.style.opacity = "1.0";
    login_button.disabled = false;
  } else {
    login_button.style.opacity = "0.2";
    login_button.disabled = true;
  }
}


window.enter_subm_sign_up = (event) => {
  if (event.keyCode == 13) {
    let state = document.getElementById("sign_up_create");

    if (state.disabled == false){
      console.log("created");
    }
  }
}



window.redBorderPasswordReset = () => {
  let password_border = document.getElementById("password_border_reset");
  password_border.style.borderColor = "#E84A5F";
}
window.freeBorderPasswordReset = () => {
  let password_border = document.getElementById("password_border_reset");
  let password_value = document.getElementById("password_input_reset").value;
  let password_regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  let password_help = document.getElementById("password_help_reset");
  let login_box = document.getElementById("reset_box");
  let confirm_help = document.getElementById("confirm_help_reset");

  if (password_regex.test(password_value) || password_value == "") {
      password_border.style.borderColor = "rgba(238, 238, 238, 0.2)";
      password_help.style.display = "none";
      login_box.style.marginTop = "60px";
      window.freeBorderConfirmReset();
    } else {
      password_border.style.borderColor = "red";
      confirm_help.style.display = "none";
      password_help.style.display = "flex";
      login_box.style.marginTop = "0";
    }
}


window.redBorderConfirmReset = () => {
  let confirm_border = document.getElementById("confirm_password_border_reset");
  confirm_border.style.borderColor = "#E84A5F";
}

window.freeBorderConfirmReset = () => {
  let confirm_border = document.getElementById("confirm_password_border_reset");
  let password_value = document.getElementById("password_input_reset").value;
  let confirm_value = document.getElementById("confirm_password_input_reset").value;
  let confirm_help = document.getElementById("confirm_help_reset");
  let password_help = document.getElementById("password_help_reset");
  let login_box = document.getElementById("reset_box");

  if ( password_value == confirm_value || confirm_value=="" ) {
      confirm_border.style.borderColor = "rgba(238, 238, 238, 0.2)";
      confirm_help.style.display = "none";

        if (password_help.style.display == "none" || password_help.style.display == ""  ) {
          login_box.style.marginTop = "60px";
        }
    } else {
      confirm_border.style.borderColor = "red";
        if (password_help.style.display == "none" || password_help.style.display == "") {
          confirm_help.style.display = "flex";
          login_box.style.marginTop = "0";
        }
    }
}

window.buttonOnReset = () => {
  let password_value = document.getElementById("password_input_reset").value;
  let confirm_value = document.getElementById("confirm_password_input_reset").value;
  let password_regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\(\)\-\+\=\|\.\_\,\*])(?=.{8,})");
  let login_button = document.getElementById("reset_password");
  if (password_regex.test(password_value) && password_value==confirm_value) {
    login_button.style.opacity = "1.0";
    login_button.disabled = false;
  } else {
    login_button.style.opacity = "0.2";
    login_button.disabled = true;
  }
}


window.enter_subm_reset = (event) => {
  if (event.keyCode == 13) {
    let state = document.getElementById("reset_password");

    if (state.disabled == false){
      console.log("reset");
    }
  }
}
