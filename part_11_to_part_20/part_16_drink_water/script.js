const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')


updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    let clickedCup = smallCups[idx]
    let nextCup = smallCups[idx]

    let clickedCupIsFullAndNextCupNotFull = clickedCup.classList.contains('full') && nextCup && nextCup.classList.contains('full')
    let clickedCupIsFullAndIsLastCup = clickedCup.classList.contains('full') && !nextCup

    if (clickedCupIsFullAndNextCupNotFull || clickedCupIsFullAndIsLastCup) {
        idx--
    }


    // xxx[idx].nextElementSibling returns the next element, if this is the last one then return null
    // there are similar method called previousElementSibling and firstElementSibling 
    // note: it doesn't work on array
    

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    let fullCups = document.querySelectorAll('.cup-small.full').length
    let totalCups = smallCups.length

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hiden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }

}
