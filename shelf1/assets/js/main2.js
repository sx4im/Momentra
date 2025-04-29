// contact form
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      formStatus.style.display = "block";
      formStatus.style.color = "green";
      formStatus.textContent = "Message sent successfully!";
      form.reset();
    } else {
      formStatus.style.display = "block";
      formStatus.style.color = "red";
      formStatus.textContent =
        "Oops! There was a problem submitting your message.";
    }
  } catch (error) {
    formStatus.style.display = "block";
    formStatus.style.color = "red";
    formStatus.textContent = "Error sending message. Please try again.";
  }
});
// smoothscroll
document
  .querySelector(".scroll-to-footer-link")
  .addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector("#footer").scrollIntoView({
      behavior: "smooth",
      block: "start", // You can adjust this value to "center", "end", etc.
    });
  });
