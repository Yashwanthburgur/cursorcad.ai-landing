// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document
  .getElementById("investor-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    fetch("https://formspree.io/f/mjkogqok", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => {
        if (res.ok) {
          document.getElementById("form-status").textContent =
            "Thanks! We'll reach out soon.";
          document.getElementById("investor-form").reset();
        } else {
          document.getElementById("form-status").textContent =
            "Something went wrong. Try again later.";
        }
      })
      .catch(() => {
        document.getElementById("form-status").textContent =
          "Network error. Please check your connection.";
      });
  });
