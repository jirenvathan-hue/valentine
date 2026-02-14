const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const song = document.getElementById("song");

const playlist = [
    "music/perfect-song.mp3",
    "music/maroonsugar-song.mp3",
    "music/suttumvizhi-song.mp3"
];

let songIndex = 0;

// Move NO button 😈
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// Play playlist 🎵
function playNextSong() {
    song.src = playlist[songIndex];
    song.muted = false;
    song.volume = 1;
    song.play().catch(() => {});
}

song.addEventListener("ended", () => {
    songIndex++;
    if (songIndex < playlist.length) {
        playNextSong();
    }
});

yesBtn.addEventListener("click", () => {

    // unlock audio on user click 🎵
    song.muted = false;
    playNextSong();

    confetti({
        particleCount:200,
        spread:90,
        origin:{y:0.6}
    });

    document.querySelector(".container").style.display="none";
    document.getElementById("lovePage").classList.remove("hidden");
});




