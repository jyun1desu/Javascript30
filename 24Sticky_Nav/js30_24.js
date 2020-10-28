const navbar = document.querySelector('#main');
const body = document.querySelector("body");
const topOfNav = navbar.offsetTop

function fixNav() {
    if (window.scrollY >= topOfNav) {
        body.classList.add('fixed-nav');
        body.style.paddingTop = `${navbar.offsetHeight}px`
    } else {
        body.classList.remove('fixed-nav');
        body.style.paddingTop = "0";
    }
}

window.addEventListener("scroll", fixNav);