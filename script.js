function matchPassword() {
  const passwordOne = document.getElementById("password-one").value;
  const passwordTwo = document.getElementById("password-two").value;

  if (passwordOne.length != 0 && passwordTwo.length != 0) {
    if (passwordOne != passwordTwo) {
      alert("Passwords did not match");
    } else {
      alert("Password created successfully");
    }
  }
}
