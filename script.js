// Get buttons and elements
const darkModeBtn = document.getElementById("darkModeBtn");

const learnBtn = document.getElementById("learnBtn");

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


// Dark Mode
darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkModeBtn.textContent = "☀️";

    } else {

        darkModeBtn.textContent = "🌙";

    }

});


// Learn More Button
learnBtn.addEventListener("click", function () {

    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });

});


// Contact Form
contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    // Clear form
    contactForm.reset();

});