function showVideo() {
    const videoSection = document.getElementById('videoSection');
    const video = document.getElementById('loveVideo');
    const homeButton = document.getElementById('homeButton');
    
    videoSection.classList.remove('hidden');
    videoSection.classList.add('full-screen');
    video.play();
    
    video.onended = () => {
        homeButton.classList.remove('hidden');
    };
}

function goHome() {
    const videoSection = document.getElementById('videoSection');
    const homeButton = document.getElementById('homeButton');
    
    videoSection.classList.add('hidden');
    homeButton.classList.add('hidden');
} 

document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.querySelector(".hearts-container");
    const butterfliesContainer = document.querySelector(".butterflies-container");
    const flowersContainer = document.querySelector(".flowers-container");
    
    function createFloatingElement(container, emoji) {
        const element = document.createElement("div");
        element.textContent = emoji;
        element.style.left = Math.random() * 100 + "vw";
        element.style.animationDuration = Math.random() * 3 + 2 + "s";
        element.style.fontSize = Math.random() * 80 + 50 + "px"; // Larger hearts (50px - 130px)
        container.appendChild(element);
        setTimeout(() => container.removeChild(element), 5000);
    }
    
    setInterval(() => createFloatingElement(heartsContainer, "❤️"), 500);
    setInterval(() => createFloatingElement(butterfliesContainer, "🦋"), 700);
    setInterval(() => createFloatingElement(flowersContainer, "🌸"), 900);
});
