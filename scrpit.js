const form = document.getElementById("form");
const email = document.getElementById("email");
const text = document.getElementById("text");

function validation(event) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.value === "") {
    event.preventDefault();
    text.style.display = "block";
    text.innerText = "Oops! Please add your email";
    text.style.color = "red";
  } else if (!email.value.match(pattern)) {
    event.preventDefault();
    text.style.display = "block";
    text.innerText = "Oops! Please check your email";
    text.style.color = "red";
  } else {
    text.style.display = "none";
    text.innerText = " ";
  }
}
console.log(form);
form.addEventListener("submit", validation);
