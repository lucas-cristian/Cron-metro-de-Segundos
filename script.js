let timer;
let seconds = 0;
let isRunning = false;

const display = document.getElementById('display');
const toggleBtn = document.getElementById('toggleBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    // Exibe os segundos como um número de 3 dígitos
    display.textContent = seconds.toString().padStart(3, '0');
}

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

toggleBtn.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
        toggleBtn.textContent = 'Iniciar';
    } else {
        startTimer();
        toggleBtn.textContent = 'Pausar';
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    stopTimer(); // Pausa o cronômetro
    seconds = 0;
    updateDisplay(); // Reseta a exibição para zero
    toggleBtn.textContent = 'Iniciar'; // Troca o texto para "Iniciar"
    isRunning = false; // Garante que o cronômetro não está rodando
});

updateDisplay();
