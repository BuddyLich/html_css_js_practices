const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        // getBoundingClientRect() returns a value that is a DOMRect object. The DOMRect is the smallest rectangle which contains the entire element, including its padding and border-width. 
        // The left, top, right, bottom, x, y, width, and height properties describe the position and size of the overall rectangle in pixels. 
        // Properties other than width and height are relative to the top-left of the viewport. 

        // In this case, we are looking for the top property

        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        };
    })
}