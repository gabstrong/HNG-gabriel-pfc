// CONTACT FORM VALIDATION
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // get elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const success = document.getElementById("success-message");

    let valid = true;

        // Reset messages
    document.querySelectorAll("small").forEach((s) => (s.textContent = ""));

    // Validate name
    if (name.value.trim() === "") {
      document.getElementById("error-name").textContent = "Full name is required.";
      valid = false;
    }

    // Validate email
    if (email.value.trim() === "") {
      document.getElementById("error-email").textContent = "Email is required.";
      valid = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
      document.getElementById("error-email").textContent = "Please enter a valid email.";
      valid = false;
    }
    // Validate message
    // if (message.value.trim().length < 10) {
    //   document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
    //   valid = false;
    // }
      if (message.value.trim().innerText == "message") {
      document.getElementById("error-message").textContent = "Message cannot be message.";
      valid = false;
    }

    // Success message
    if (valid) {
      success.style.display = "block";
      form.reset();
      setTimeout(() => (success.style.display = "none"), 4000);
    }
  });
}

