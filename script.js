function startFun() {
    const gif = document.querySelector('.gif');
    const message = document.getElementById('message');
    const audio = document.getElementById('funnySong');
    const button = document.querySelector('.start-button');

    gif.classList.add('active');
    message.classList.add('active');
    button.style.display = 'none';
    audio.play();

    // Add confetti effect
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.background = ['#ffeb3b', '#ff5722', '#4caf50', '#2196f3'][Math.floor(Math.random() * 4)];
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}