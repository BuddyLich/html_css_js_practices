const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('');
//  for each label, split every letter of the label making them into an array,
//  then wrap each those letter with <span></span>,
//  and finally join all the objects in the array making them a string
//</label>


});
