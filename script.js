let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
    netImage();
},5000)

function netImage() {
    count++
    if(count>3) {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true; 

}

const secondLine = document.getElementById("second-line");

const phrases = [
    "potencializar as suas vendas.",
    "potencializar o seu alcance.",
    "potencializar a sua visibilidade."
];

let currentIndex = 0;

function glitchEffect(text) {
    const words = text.split(" ");
    const glitchedWords = words.map(word => `<span class="glitch">${word}</span>`).join(" ");
    secondLine.innerHTML = glitchedWords;
    secondLine.classList.add("glitch-animation");
    setTimeout(() => {
        secondLine.classList.remove("glitch-animation");
    }, 500);
}

function changeText() {
    const phrase = phrases[currentIndex];
    glitchEffect(phrase);
    currentIndex = (currentIndex + 1) % phrases.length;
}


changeText();


setInterval(changeText, 3000);


