// Get references to the elements
const homeLink = document.getElementById("home-link");
const profileDiv = document.getElementById("profile");

// Add a click event listener to the "Home" link
homeLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the offset of the header
    const headerOffset = document.querySelector("header").offsetHeight;

    // Scroll to the top of the profile section with an offset
    window.scrollTo({
        top: profileDiv.offsetTop - headerOffset,
        behavior: 'smooth'
    });
});

const eduLink = document.getElementById("edu-link");
const educationDiv = document.getElementById("education");

// Add a click event listener to the "Education" link
eduLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the offset of the header
    const headerOffset = document.querySelector("header").offsetHeight;

    // Scroll to the top of the profile section with an offset
    window.scrollTo({
        top: educationDiv.offsetTop - headerOffset,
        behavior: 'smooth'
    });
});

const expLink = document.getElementById("exp-link");
const experienceDiv = document.getElementById("experience");

// Add a click event listener to the "Experience" link
expLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the offset of the header
    const headerOffset = document.querySelector("header").offsetHeight;

    // Scroll to the top of the profile section with an offset
    window.scrollTo({
        top: experienceDiv.offsetTop - headerOffset,
        behavior: 'smooth'
    });
});

const contactLink = document.getElementById("contact-link");
const contactDiv = document.getElementById("contact");

// Add a click event listener to the "Contact" link
contactLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the offset of the header
    const headerOffset = document.querySelector("header").offsetHeight;

    // Scroll to the top of the profile section with an offset
    window.scrollTo({
        top: contactDiv.offsetTop - headerOffset,
        behavior: 'smooth'
    });
});

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    const elements = document.querySelectorAll('.edu');
    const cards = document.querySelectorAll('.card1, .card2, .card3');

    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });

    cards.forEach((card) => {
        if (isElementInViewport(card)) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();

// buttons
const leftbtn = document.getElementById('btnl');
const rightbtn = document.getElementById('btnr');

const cd1 = document.querySelector(".card1");
const cd2 = document.querySelector(".card2");
const cd3 = document.querySelector('.card3');

leftbtn.addEventListener("click", function () {
    if (cd1.style.display !== "none") {
        cd3.style.display = "";
        cd1.style.display = "none";
    }
    else if (cd2.style.display !== "none") {
        cd1.style.display = "";
        cd2.style.display = "none";
        cd3.style.display = "none";
    }
    else if (cd3.style.display !== "none") {
        cd2.style.display = "";
        cd1.style.display = "none";
        cd3.style.display = "none";
    }
});

rightbtn.addEventListener("click", function () {
    if (cd1.style.display !== "none") {
        cd2.style.display = "";
        cd1.style.display = "none";
        cd3.style.display = "none";
    }
    else if (cd2.style.display !== "none") {
        cd3.style.display = "";
        cd1.style.display = "none";
        cd2.style.display = "none";
    }
    else if (cd3.style.display !== "none") {
        cd1.style.display = "";
        cd2.style.display = "none";
        cd3.style.display = "none";
    }
});

//navigation bar
function toggleMobileNav() {
    var mobileNav = document.getElementById("mobileNav");
    if (mobileNav.classList.contains("open")) {
        mobileNav.classList.remove("open");
        mobileNav.classList.add("close");
        setTimeout(function () {
            mobileNav.style.display = "none"; // Hide after animation completes
        }, 300); // Adjust the timeout to match your animation duration
    } else {
        mobileNav.style.display = "flex"; // Show before animation starts
        mobileNav.classList.remove("close");
        mobileNav.classList.add("open");
    }
}

const submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    var emailTextarea = document.querySelector(".email");
    var messageTextarea = document.querySelector(".message");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    var email = emailTextarea.value.trim();
    var message = messageTextarea.value.trim();

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // Check if email and message are not empty
    if (email === "" || !email.match(emailPattern)) {
        emailError.textContent = "Please enter a valid email address.";
        return;
    } else {
        emailError.textContent = "";
    }

    if (message === "") {
        messageError.textContent = "Please enter a message.";
        return;
    } else {
        messageError.textContent = "";
    }

    Email.send({
        SecureToken: "6c63988e-67a3-44b4-9719-789cfd34ba33",
        To: "jantagle99@yahoo.com",
        From: "janmenard0724@gmail.com",
        Subject: email + " - MenardDev - Inquiry",
        Body: message
    }).then(function (message) {
        if (message === "OK") {
            console.log("Message sent successfully");
            alert("Message sent successfully.");
            emailTextarea.value = "";
            messageTextarea.value = "";
        } else {
            console.error("Message sending failed:", message);
        }
    });
})
