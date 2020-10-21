const panels = Array.from(document.querySelectorAll('.panel'));
console.log(panels);

function open() {
    this.classList.toggle('open');
}

function openAction(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener("click", open))
panels.forEach(panel => panel.addEventListener("transitionend", openAction))