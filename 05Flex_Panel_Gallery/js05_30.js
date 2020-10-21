const panels = Array.from(document.querySelectorAll('.panel'));

function open() {
    panels.forEach(panel => panel.className);
    this.classList.toggle('open');
}

function openAction(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener("click", open))
panels.forEach(panel => panel.addEventListener("transitionend", openAction))