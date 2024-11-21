console.log('nieko nemoku');

const nr1 = document.querySelector('#nr1');
let nr1DivsHtml = '';

// nr1DivsHtml = nr1DivsHtml + `<div>${i}</div>` += rodo sita

for (let i = 1; i <= 7; i++) {
    if (i % 2) {
        nr1DivsHtml += `<div>${i}</div>`
    } else {
        nr1DivsHtml += `<div style="background-color: skyblue;">${i}</div>`
    }
}

nr1.innerHTML = nr1DivsHtml;

let nr2DivsHtml = '';

for (let i = 1; i <= 7; i++) {
    if (i % 2) {
        nr2DivsHtml += `<div class="blue">${i}</div>`;
    } else {
        nr2DivsHtml += `<div class="red">${i}</div>`;
    }
}
nr2.innerHTML = nr2DivsHtml;

const word = 'andromeda';


const nr3 = document.querySelector('#nr3');
let nr3DivsHtml = '';

for (let i = 0; i < word.length; i++) {
    nr3DivsHtml += `<div>${word[i]}</div>`;
}
nr3.innerHTML = nr3DivsHtml;

const span2 = document.querySelector('#nr4 span:nth-child(2)');
console.log(span2.innerText);
const spans = document.querySelectorAll('#nr4 span');
console.log(spans);

for (let i = 0; i < spans.length; i++){
    spans[i].style.fontSize = (i + 1) * 20 + 'px';
    spans[i].classList.add('blue');
    spans[i].classList.remove('big');
    // cia visiems span nueme klase. su remove
}
