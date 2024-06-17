document.addEventListener('DOMContentLoaded', (event) => {
    const counterTxt = document.getElementById('counter-txt');
    let counter = 0;

    document.getElementById('incr').addEventListener('click', () => {
        counter++;
        counterTxt.textContent = counter;
    });

    document.getElementById('decr').addEventListener('click', () => {
        counter--;
        counterTxt.textContent = counter;
    });

    document.getElementById('res').addEventListener('click', () => {
        counter = 0;
        counterTxt.textContent = counter;
    });
});

document.addEventListener('mousemove', function(e) {
    const spotlight = document.getElementById('spotlight');
    const x = e.clientX;
    const y = e.clientY;
    spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0) 50%)`;
});