const links = document.querySelectorAll('.cool>li');
const dropdownBackground = document.querySelector('.dropdownBackground');
const navbar = document.querySelector('nav.top')


function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = navbar.getBoundingClientRect();

    const coords = {
        width: dropdownCoords.width,
        height: dropdownCoords.height,
        top: dropdownCoords.top,
        left: dropdownCoords.left
    }

    dropdownBackground.classList.add('open');
    dropdownBackground.style.setProperty('width', `${coords.width}px`);
    dropdownBackground.style.setProperty('height', `${coords.height}px`)
    dropdownBackground.style.setProperty('transform', `translate(${coords.left-navCoords.left}px,${coords.top-navCoords.top}px)`)

}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    dropdownBackground.classList.remove('open');
}


links.forEach(link => link.addEventListener('mouseenter', handleEnter));
links.forEach(link => link.addEventListener('mouseleave', handleLeave));