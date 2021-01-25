const p1score = document.querySelector('.p1score');
const p2score = document.querySelector('.p2score');
const p1button = document.querySelector('#p1btn');
const p2button = document.querySelector('#p2btn');
const resetbtn = document.querySelector('#resetbtn');
let playUntil = document.querySelector('#playUntil');

let p1Tally = 0;
let p2Tally = 0;
let isGameOver = false;
let target = 5

p1button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Tally += 1;
        if (p1Tally === target) {
            isGameover = true;
            p1score.classList.add("winner");
            p2score.classList.add("loser");
            p1button.disabled = true;
            p2button.disabled = true;
        }
        p1score.innerText = p1Tally;

    }
})
p2button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Tally += 1;
        if (p2Tally === target) {
            isGameover = true;
            p2score.classList.add("winner");
            p1score.classList.add("loser");
            p1button.disabled = true;
            p2button.disabled = true;
        }
        p2score.innerText = p2Tally;

    }
})

playUntil.addEventListener('change', function () {
    target = parseInt(this.value);
    reset();
})

resetbtn.addEventListener('click', reset)

function reset() {
    p1Tally = 0;
    p2Tally = 0;
    isGameover = false;
    p1score.innerText = p1Tally;
    p2score.innerText = p2Tally;
    p1button.disabled = false;
    p2button.disabled = false;
    p1score.classList.remove("winner", "loser");
    p2score.classList.remove("winner", "loser");
    alert("Game Reset!")
}
