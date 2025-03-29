const video = document.getElementById("loveVideo");
const controls = document.getElementById("controls");
const animationContainer = document.getElementById("animationContainer");

video.onended = () => {
    controls.style.display = "block";
};

function replayVideo() {
    video.currentTime = 0;
    video.play();
    controls.style.display = "none";
}

function goHome() {
    window.location.href = "index.html";
}

function createFloatingElements() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("floating-heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
        animationContainer.appendChild(heart);
    }
}

createFloatingElements();