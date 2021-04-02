const screens = document.querySelectorAll('.screen')
const chooseBallBtns = document.querySelectorAll('.choose-ball-btn')

const startBtn = document.getElementById('start-btn')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
const gameContainer = document.querySelector('.game-container')

let score = 0
let seconds = 0
let selectedBall = {}

startBtn.addEventListener('click', () => screens[0].classList.add('up'))

chooseBallBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')

        selectedBall = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createBall(), 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createBall() {
    const ball = document.createElement('div')
    ball.classList.add('ball')
    const {x, y} = getRandomLocation()
    ball.style.top = `${y}px`
    ball.style.left = `${x}px`
    ball.innerHTML = `<img src="${selectedBall.src}" alt="${selectedBall.alt}" style="transform: rotate(${Math.random() * 360}deg)">`
    gameContainer.appendChild(ball)

    ball.addEventListener('click', catchBall)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchBall() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addBall()
}

function addBall() {
    setTimeout(createBall, 1000)
    setTimeout(createBall, 1500)
}

function increaseScore() {
    score++

    if (score > 19) {
        message.classList.add('visible')
    }

    scoreEl.innerHTML = `Score: ${score}`
}