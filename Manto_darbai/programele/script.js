console.log('programere');

const count = document.querySelector(".count");
const subtract = document.querySelector(".subtract");
const reset = document.querySelector(".reset");
const add = document.querySelector(".add");

add.addEventListener('click', _ => {
    count.textContent++;
    setColor();
});

subtract.addEventListener('click', _ => {
    count.textContent--;
    setColor();
});

reset.addEventListener('click', _ => {
    count.textContent = 0;
    setColor();
});

const setColor = _ =>  {
    if (count.textContent > 0) {
        count.style.color = 'yellow';
    } else if (count.textContent < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'white';
    }

};
