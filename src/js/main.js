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
}
