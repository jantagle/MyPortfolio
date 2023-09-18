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

// Add a click event listener to the "Home" link
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