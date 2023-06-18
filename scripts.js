function toggleNavbar() {
    var navbarToggle = document.querySelector('.navbar-toggle');
    var navbarLinks = document.querySelector('.navbar-links');
    navbarToggle.classList.toggle('active');
    navbarLinks.classList.toggle('active');
    if(document.querySelector('.navbar-links').classList.contains('active'))
    {
        document.querySelector('.mint-btn').style.display = "none";
    }
    else{
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

