window.onload = function() {
  let main_modal = document.getElementById("mainModal");
  let main_content = document.getElementById("main_content");
  let forgot_content = document.getElementById("forgot_content");
  let sign_up_content = document.getElementById("sign_up_content");

  window.top_login_btn = () => {
    main_modal.style.display = "block";
    main_content.style.display = "flex";
    forgot_content.style.display = "none";
    sign_up_content.style.display = "none";
  }

  window.sign_up_btn = () => {
    main_content.style.display = "none";
    sign_up_content.style.display = "flex";
  }

  window.forgot_btn = () => {
    main_content.style.display = "none";
    forgot_content.style.display = "flex";
  }
  window.onclick = (event) => {
    if (event.target == main_modal){
      main_modal.style.display = "none";
    }
  }
  window.login_btn_forgot = () => {
    forgot_content.style.display = "none";
    main_content.style.display = "flex";
  }
  window.login_btn_sign_up = () => {
    sign_up_content.style.display = "none";
    main_content.style.display = "flex";
  }
  window.cross_main = () => {
    main_modal.style.display = "none";
  }
  window.cross_forgot = () => {
    main_modal.style.display = "none";
  }
  window.cross_main = () => {
    main_modal.style.display = "none";
  }
  window.cross_sign_up = () => {
    main_modal.style.display = "none";
  }

}
