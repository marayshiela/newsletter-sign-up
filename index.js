const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


document.onkeyup = function () {
  if (email.value.length === 0) return;
  email.style.background = "none";
  errorElement.innerText = "";
};

form.addEventListener("submit", (e) => {
  let messages = [];
  if (email.value === "" || email.value == null) {
    email.style.border = "1px solid red";
    email.style.background = "pink";
    messages.push("Valid email required");
  } else if (!email.value.match(mailFormat)) {
    email.style.border = "1px solid red";
    email.style.background = "pink";
    messages.push("Valid email required");
  }else{
    const userEmail = email.value;
  sessionStorage.setItem('email', userEmail);
  window.location.href="success.html"
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages;
  }
  
});
