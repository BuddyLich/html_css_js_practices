const loveItem = document.querySelector(".love-item")
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

loveItem.addEventListener("dblclick", (e) => {
    createHeart(e)
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveItem.appendChild(heart)
    times.innerHTML = ++timesClicked

    setTimeout(() => {
        heart.remove()
    }, 1000)
} 
