let tagsEl = document.getElementById('tags')
let textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key == 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }, 10 )

        randomSelect()
    }
})

function createTags(input) {
    let tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
// input.split(',') makes the string input split into an array, the character "," is the separator

// xxx.filter() is a method that takes a function as parameter
// and that function should take an argument, and return true or false based on conditions
// format: someArray.filter(someFilterFunction)

// In this case, the filter function is (tag) => { tag.trim() !== '' }
// It means any element that only contains space or empty string, will be removed by this filter

// someArray.map(someFunction) means for each element in someArray
// take individual element as argument, then execute the function, and put all the return value together as a new array

// So what this line of code does is that, splitting the string input and form them into an array,
// then remove all the space and empty string elements,
// and finally for each element, if there are spaces at the beginning or end of the element, remove the spaces as well

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        let tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const time = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, time * 100)

}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
