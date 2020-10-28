const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoice() {
    voices = this.getVoices();
    const voiceObjects = voices
        .map(voice => `<option value="${voice.name}">${voice.name} ${voice.lang}</option>`)
        .join("");

    voicesDropdown.innerHTML = voiceObjects;
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver = true) {
        speechSynthesis.speak(msg);
    };
}

function setOption(){
    msg[this.name] = this.value;
     
}
speechSynthesis.addEventListener("voiceschanged", populateVoice);
voicesDropdown.addEventListener("input", setVoice);
options.forEach(option => option.addEventListener("input",setOption));
speakButton.addEventListener("click",toggle);
stopButton.addEventListener("click",()=>toggle(false))