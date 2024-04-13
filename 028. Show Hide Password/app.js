const input = document.querySelector("input");
const eyeIcon = document.querySelector("#eye-icon");

eyeIcon.addEventListener("click", () => {
  // if (input.type === 'password') {
  //   input.type = 'Text';
  // } else {
  //   input.type = 'password';
  // }

  // 리팩토링
  input.type === 'password'? (input.type = 'Text') : (input.type = 'password');
})