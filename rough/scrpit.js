const container = document.getElementById('fireworks-container');
const message = document.getElementById('message');
let clickCount = 0;

function createFirework(x, y) {
    const colors = ['#c70f56', '#b9e222', ' #8586d3', '#edf03c', '#e6630c', '#30e5f1'];
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    container.appendChild(firework);

    setTimeout(() => {
        container.removeChild(firework);
    }, 1000);
}

function handleClick(event) {
    createFirework(event.clientX, event.clientY);
    clickCount++;

    if (clickCount >= 5) {
        message.classList.add('visible');
    }
}

container.addEventListener('click', handleClick);