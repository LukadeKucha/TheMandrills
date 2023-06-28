
window.addEventListener('load', function () {
    var loadingScreen = document.getElementById('loading-screen');
    var content = document.querySelector('.container');
    loadingScreen.style.display = "flex";
    setTimeout(function () {
        // Hide the loading screen and show the content
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    }, 1000);

});


function toggleNavbar() {
    var navbarToggle = document.querySelector('.navbar-toggle');
    var navbarLinks = document.querySelector('.navbar-links');
    navbarToggle.classList.toggle('active');
    navbarLinks.classList.toggle('active');
    if (document.querySelector('.navbar-links').classList.contains('active')) {
        document.querySelector('.mint-btn').style.display = "none";
    }
    else {
        document.querySelector('.mint-btn').style.display = "flex";
    }
}



document.addEventListener('DOMContentLoaded', function () {
    var navbarLinks = document.querySelectorAll('.navbar-links a');
    for (var i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].addEventListener('click', function () {
            var navbarToggle = document.querySelector('.navbar-toggle');
            var navbarLinks = document.querySelector('.navbar-links');
            if (navbarToggle.classList.contains('active')) {
                navbarToggle.classList.remove('active');
                navbarLinks.classList.remove('active');
            }
        });
    }
});

// Navbar scroll
window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    var heroSectionHeight = document.querySelector('.hero-section').offsetHeight;
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > heroSectionHeight) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// card

function toggleContent(contentId) {
    var contents = document.getElementsByClassName('card-content');
    var links = document.getElementsByClassName('nav-a');
    var cardLinks = document.getElementsByClassName('card-link');

    for (var i = 0; i < contents.length; i++) {
        var content = contents[i];
        var link = links[i];
        var cardLink = cardLinks[i];

        if (content.id === contentId) {
            content.style.display = 'flex';
            link.classList.add('active');
            cardLink.style.borderBottom = '3px solid white';
        } else {
            content.style.display = 'none';
            link.classList.remove('active');
            cardLink.style.borderBottom = '1px solid rgba(255, 255, 255, 0.63)';
        }
    }
}


// Initially show the first content
toggleContent('content-1');

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    var heroSectionHeight = document.querySelector('.products').offsetHeight;
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > heroSectionHeight) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

document.getElementById("stage-popup").addEventListener("click", function (event) {
    event.preventDefault();
    var modal = document.getElementById("productModal");
    var body = document.getElementsByTagName("body")[0];
    modal.style.display = "flex";
    body.classList.add("blur-background");
    body.style.overflow = "hidden";
});

document.getElementsByClassName("close")[0].addEventListener("click", function () {
    var modal = document.getElementById("productModal");
    var body = document.getElementsByTagName("body")[0];
    modal.style.display = "none";
    body.classList.remove("blur-background");
    body.style.overflow = "auto";
});

// Popups

var popupLink = document.getElementById('popup-link');
var popupOverlay = document.getElementById('popup-overlay');
var popupClose = document.getElementById('popup-close');

// Open the popup when the link is clicked
popupLink.addEventListener('click', function (event) {
    event.preventDefault();
    popupOverlay.style.display = 'block';
});

// Close the popup when the close button is clicked
popupClose.addEventListener('click', function (event) {
    event.preventDefault();
    popupOverlay.style.display = 'none';
});