console.log('labadiena');

// 1 uzdavinys

const tagH1 = document.querySelector('h1')
const tagH2 = document.querySelector('h2')
const tagH3 = document.querySelector('h3')
const tagH4 = document.querySelector('h4')


tagH1.innerText = 1;
tagH2.innerText = 2;
tagH3.innerText = 3;
tagH4.innerText = 4;

// 2 uzdavinys

const div1 = document.querySelector('div:nth-of-type(1)');
div1.style.width = '20px';
div1.style.height = '20px';
div1.style.backgroundColor = 'blue';



const div2 = document.querySelector('div:nth-of-type(2)');
div2.style.width = '20px';
div2.style.height = '20px';
div2.style.backgroundColor = 'red';
div2.style.borderRadius = '50%';

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
// 3 UZDUOTIS
// 

const A = rand(0, 4);
const B = rand(0, 4);
let bigger; 
let smaller;
let Suma;

console.log('A:', A, 'B:', B);

if ( A > B )  {
    bigger = A;
} else if ( B > A){
    bigger = B;
}

if ( A < B){
    smaller = A;
} else if ( B < A){
    smaller = B;
} else if ( A === B){
    bigger = A;
    smaller = B;
}


if (A === 0 || B === 0) {
    Suma = 'dalyba negalima';
} else if (A > B) {
    Suma = A / B;
} else if (B > A) {
    Suma = B / A;
} else if (A === B) {
    Suma = 1;
}
console.log(bigger, smaller);


const span3_1 = document.querySelector('#go3 span:nth-of-type(1)');
span3_1.innerText = bigger;
const span3_2 = document.querySelector('#go3 span:nth-of-type(2)');
span3_2.innerText = smaller;
const span3_3 = document.querySelector('#go3 span:nth-of-type(3)');
span3_3.innerText = Suma;

// 4 UZDUOTIS
const D = rand(50, 200);
const E = rand(50, 200);
const F = rand(50, 200);
const go4 = document.querySelector('#go4')
go4.style.display = 'flex';


const divD = document.querySelector('#go4 div:nth-of-type(1)');
divD.style.backgroundColor = 'red';
divD.style.borderRadius = '50%';
divD.style.width = D + 'px';
divD.style.height = D + 'px';
const divE = document.querySelector('#go4 div:nth-of-type(2)');
divE.style.backgroundColor = 'red';
divE.style.borderRadius = '50%';
divE.style.width = E + 'px';
divE.style.height = E + 'px';
const divF = document.querySelector('#go4 div:nth-of-type(3)');
divF.style.backgroundColor = 'red';
divF.style.borderRadius = '50%';
divF.style.width = F + 'px';
divF.style.height = F + 'px';

// go4.innerText = divF.textContent

console.log('D:', D, 'E:', E, 'F', F);

if (D > E && D > F && E > F) {
    divF.width = F + 'px';
    divF.height = F + 'px';
}




// 5 UZDUOTIS
let G = rand(-10, 10);
let H = rand(-10, 10);
let I = rand(-10, 10);

const span5_1 = document.querySelector('#go5 span:nth-of-type(1)');
span5_1.innerText = G;
const span5_2 = document.querySelector('#go5 span:nth-of-type(2)');
span5_2.innerText = H;
const span5_3 = document.querySelector('#go5 span:nth-of-type(3)');
span5_3.innerText = I;

if (G < 0) {
    span5_1.style.color = 'red';
} else if (G == 0) {
    span5_1.style.color = 'green';
} else {
    span5_1.style.color = 'blue'
}

if (H < 0) {
    span5_2.style.color = 'red';
} else if (H == 0) {
    span5_2.style.color = 'green';
} else {
    span5_2.style.color = 'blue'
}

if (I < 0) {
    span5_3.style.color = 'red';
} else if (I == 0) {
    span5_3.style.color = 'green';
} else {
    span5_3.style.color = 'blue'
}

// 6 uzduotis

let kaina1;
let nuolaida;
const nupirktuZvakiuSkaicius = rand(5, 3000);

console.log(nupirktuZvakiuSkaicius);

if (nupirktuZvakiuSkaicius >= 1000 && nupirktuZvakiuSkaicius < 2000) {
    kaina1 = nupirktuZvakiuSkaicius * 0.97
    nuolaida = 3
} else if (nupirktuZvakiuSkaicius >= 2000) {
    kaina1 = nupirktuZvakiuSkaicius * 0.96
    nuolaida = 4
} else {
    kaina1 = nupirktuZvakiuSkaicius
    nuolaida = 0;
}

console.log(kaina1);

const span6_1 = document.querySelector('section#go6 [data-amount] span');
span6_1.innerText = nupirktuZvakiuSkaicius;

const span6_2 = document.querySelector('section#go6 [data-subtotal] span');
span6_2.innerText = nupirktuZvakiuSkaicius

const span6_3 = document.querySelector('section#go6 [data-discount] span');
span6_3.innerText = nuolaida;


const span6_4 = document.querySelector('section#go6 [data-total] span');
span6_4.innerText = kaina1;

// prie type 2 nurodo kad ims antra diva. ne pirma. cia antras uzdavinys

// sestas uzdavinys kaip rasti span

// const span2 = document.querySelector ('section#go6 [data-amount] span');
// const span2 = document.querySelector ('section#go6 [data-amount] span:nth-of-type(2)')

// span2.innerText = 6;
// console.log(5 * 4);