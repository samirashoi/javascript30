// console.log(document.documentElement.style);

function modifyPage(e){

    let sizing = e.target.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${e.target.name}`, `${e.target.value}${sizing}`);
    console.log(e.target.name);
}

const controls = document.querySelectorAll(`.controls>input`);
// console.log(controls);
controls.forEach(input => input.addEventListener('change', modifyPage));
controls.forEach(input => input.addEventListener('mousemove', modifyPage));