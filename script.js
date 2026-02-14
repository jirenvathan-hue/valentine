const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const song = document.getElementById("song");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
    song.play();

    confetti({
        particleCount:200,
        spread:90,
        origin:{y:0.6}
    });

    document.querySelector(".container").style.display="none";
    document.getElementById("lovePage").classList.remove("hidden");
});
