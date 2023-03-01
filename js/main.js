// navigation responsive toggle button
const openMenu = document.getElementById("open_button");
const closeMenu = document.getElementById("close_button");
const mobile = document.getElementById("mobile_menu");
openMenu.addEventListener("click", () => {
    mobile.classList.add("open");
});
closeMenu.addEventListener("click", () => {
    mobile.classList.remove("open");
});


// slider
let slideIndex = 1;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let links = document.getElementsByClassName("link");
    let indicators = document.getElementsByClassName("indicator");
    const navbar = document.getElementById('navbar');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(" + ((i - slideIndex + 1) * 100) + "%)";
    }
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active-link", "");
    }
    for (i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active", "");
    }
    links[slideIndex - 1].className += " active-link";
    indicators[slideIndex - 1].className += " active";
    if (slideIndex === 3) { navbar.classList.add('md:hidden', 'bg-[#a38d7b]') };
    if (slideIndex === 1 || slideIndex === 2 || slideIndex === 4 || slideIndex === 5) { navbar.classList.remove('md:hidden', 'bg-[#a38d7b]') };
}
