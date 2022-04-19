function matchPassword() {
  const pw1 = document.getElementById("password-one").value;
  const pw2 = document.getElementById("password-two").value;

  if (pw1 != pw2) {
    alert("Passwords did not match");
  } else {
    alert("Password created successfully");
  }
}
