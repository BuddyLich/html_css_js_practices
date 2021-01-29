const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load ++

    if (load > 99) {
        clearInterval(int)
    };

    loadText.innerText = `${load}%`;
    // `${}` is a template literal, a bit like the f-string in Python 3.8

    loadText.style.opacity = (100 - load) * 0.01;
    // when load equals to 0, opacity should equal to 1, and when load reach 100, opacity should equal to 0 

    let blurPx = (100 - load) * 0.3;
    bg.style.filter = `blur(${blurPx}px)`;
    // similarly, calculate the blur pixels and change it
};
