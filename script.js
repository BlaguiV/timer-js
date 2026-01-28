const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

const clockDisplay = document.querySelector(".clock-display");
const startBtn = document.getElementById("start-btn");
const timerDisplay = document.querySelector(".timer-display");
const input = document.getElementById("input");

tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));

        tab.classList.add("active");
        panels[i].classList.add("active");
    });
});

setInterval(() => {
    const now = new Date();

    const h = String(now.getHours()).padStart(2, "0");
    const m = String(now.getMinutes()).padStart(2, "0");
    const s = String(now.getSeconds()).padStart(2, "0");

    clockDisplay.textContent = `${h}:${m}:${s}`;
}, 1000);

let timer = null;

startBtn.addEventListener("click", () => {
    clearInterval(timer);

    let seconds = Number(input.value) * 60;
    if (!seconds) return;

    timer = setInterval(() => {
        const m = String(Math.floor(seconds / 60)).padStart(2, "0");
        const s = String(seconds % 60).padStart(2, "0");

        timerDisplay.textContent = `${m}:${s}`;

        if (seconds === 0) {
            clearInterval(timer);
            return;
        }

        seconds--;
    }, 1000);
    input.value = ""
});
