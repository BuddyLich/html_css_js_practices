const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

// difference between for in and for of in JS
// let list = [4, 5, 6];

// for (let i in list) {
//    console.log(i); => "0", "1", "2",
// }

// for (let i of list) {
//    console.log(i); => "4", "5", "6"
// }


function dragStart() {
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible')
    
}


function dragEnd() {
    this.className = 'fill'
}


function dragOver(e) {
    e.preventDefault()
}


function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}


function dragLeave() {
    this.className = 'empty'
}


function dragDrop() {
    this.className = "empty"
    this.append(fill)
}