let score = 0;

document.getElementById("target").addEventListener("click", () => {
    score++;
    document.getElementById("score").textContent = score;
});
