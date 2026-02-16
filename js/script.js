let player;
let playing = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "0",
        width: "0",
        videoId: "SlgtjRq5AXs",
        playerVars: {
            autoplay: 0,
            loop: 1,
            playlist: "SlgtjRq5AXs",
        },
    });
}

function toggleMusic() {
    if (!player) return;

    if (playing) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }

    playing = !playing;
}

function openLetter() {
    document.getElementById("letter").classList.toggle("open");
    createHearts();
}

function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "❤";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 3 + Math.random() * 3 + "s";

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }
}
