const form = document.forms[0];
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit");

function showError(input, message) {
  const field = input.parentElement;
  field.className = "field error";
  const small = field.querySelector("small");
  small.innerText = message;
  input.placeholder = "";
}

function showSuccess(input) {
  const field = input.parentElement;
  field.className = "field success";
  const small = field.querySelector("small");
  small.innerText = "";
}

function checkRequired(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${input.name} can not be empty`);
    } else {
      showSuccess(input);
    }
  });
}

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Looks like this email is not valid");
    input.placeholder = "email@example/com";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([firstName, lastName, email, password]);
  checkEmail(email);
});
