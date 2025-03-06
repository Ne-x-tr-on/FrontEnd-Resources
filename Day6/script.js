const password = document.getElementById("password");
const icon = document.getElementById("eyeicon");

eyeicon.onclick = function() {
  if (password.type == "password") {
    password.type = "text";
    icon.src="/assets/img/eye-close.png"
    console.log(password.type);
    }
    else{
      password.type = "password";
      icon.src="/assets/img/eye-open.png"
  }
}