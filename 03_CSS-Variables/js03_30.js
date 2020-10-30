const inputs = Array.from(document.querySelectorAll('.controls input'));

function update(){
    const suffix = this.dataset.sizing || ""//後綴單位，顏色代碼不需要所以要或""
    const information = document.querySelector(`span.${this.name}`);
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
    information.innerHTML= this.value;
}


inputs.forEach(input => input.addEventListener("input",update))
