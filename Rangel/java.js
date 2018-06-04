
function myFunction() {
    console.log("Function Worked");
    audioPlay.play();
}
var hiddenDiv = document.getElementById('hiddenD');

function hide() {
    hiddenDiv.style.display = "none";
    hiddenDiv.classList.add("w3-animate-left");
}
var audioPlay = document.getElementById("tunes");
var musichover = document.getElementById("musicDiv");
musichover.addEventListener("mouseover", myFunction);

