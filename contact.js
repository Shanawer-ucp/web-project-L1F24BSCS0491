var nameBox = document.getElementById("cname");
var emailBox = document.getElementById("cemail");
var messageBox = document.getElementById("cmessage");
var emailStatus = document.getElementById("email-status");
var counter = document.getElementById("counter");
var form = document.getElementById("contact-form");
var result = document.getElementById("result");


emailBox.addEventListener("input", function () {
  var valid = emailBox.value.includes("@") && emailBox.value.includes(".");
  if (valid) {
    emailStatus.textContent = "Looks good";
    emailStatus.className = "ok";
  } else {
    emailStatus.textContent = "Please enter a valid email";
    emailStatus.className = "bad";
  }
});


messageBox.addEventListener("input", function () {
  counter.textContent = messageBox.value.length + " / 200";
});


form.addEventListener("submit", function (event) {
  event.preventDefault();
  result.textContent = "Thank you, " + nameBox.value + "! We will reply soon.";
  result.classList.remove("hidden");
  form.reset();
  counter.textContent = "0 / 200";
  emailStatus.textContent = "";
});
