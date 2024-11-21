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

if (A > B) {
    bigger = A;
} else if (B > A) {
    bigger = B;
}

if (A < B) {
    smaller = A;
} else if (B < A) {
    smaller = B;
} else if (A === B) {
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
let smallest;
let midium;
let biggest;
const go4 = document.querySelector('#go4')
go4.style.display = 'flex';

const divD = document.querySelector('#go4 div:nth-of-type(1)');
const divE = document.querySelector('#go4 div:nth-of-type(2)');
const divF = document.querySelector('#go4 div:nth-of-type(3)');


console.log('D:', D, 'E:', E, 'F', F);

if (D < E && D < F) {
    smallest = D
    if (E < F) {
        midium = E;
        biggest = F;
    }
    else {
        midium = F;
        biggest = E;
    }
}
else if (E < D && E < F) {
    smallest = E
    if (D < F) {
        midium = D;
        biggest = F;
    }
    else {
        midium = F;
        biggest = D
    }
}
else if (F < D && F < E) {
    smallest = F
    if (D < E) {
        midium = D;
        biggest = E;
    }
    else {
        midium = E;
        biggest = D;
    }
}




// if (D < E && D < F) {
//     smallest = D;
// } else if (E < D && E < F) {
//     smallest = E;
// } else {
//     smallest = F;
// }

// if (D > E && D < F) {
//     midium = D;
// } else if (E > D && E < F) {
//     midium = E;
// } else {
//     midium = F;
// }

// if (D > E && D > F) {
//     biggest = D;
// } else if (E > D && E > F) {
//     biggest = E;
// } else {
//     biggest = F;
// }


// if (D > E && D > F && E > F) {
//     divF.width = F + 'px';
//     divF.height = F + 'px';
//     divE.width = E + 'px';
//     divE.height = E + 'px';
//     divD.width = D + 'px';
//     divD.height = D + 'px';

// } else if (E > D && E > F && F > D) {
//     divD.width = D + 'px';
//     divD.height = D + 'px';
//     divF.width = F + 'px';
//     divF.height = F + 'px';
//     divE.width = E + 'px';
//     divE.height = E + 'px';

// } else if (F > D && F > E && D > E) {
//     divE.width = E + 'px';
//     divE.height = E + 'px';
//     divD.width = D + 'px';
//     divD.height = D + 'px';
//     divF.width = F + 'px';
//     divF.height = F + 'px';
// }
// divD.style.backgroundColor = 'red';
// divD.style.borderRadius = '50%';
// divD.style.width = D + 'px';
// divD.style.height = D + 'px';

// divE.style.backgroundColor = 'red';
// divE.style.borderRadius = '50%';
// divE.style.width = E + 'px';
// divE.style.height = E + 'px';

// divF.style.backgroundColor = 'red';
// divF.style.borderRadius = '50%';
// divF.style.width = F + 'px';
// divF.style.height = F + 'px';

divD.style.backgroundColor = 'pink';
divD.style.borderRadius = '50%';
divD.style.width = smallest + 'px';
divD.style.height = smallest + 'px';

divE.style.backgroundColor = 'green';
divE.style.borderRadius = '50%';
divE.style.width = midium + 'px';
divE.style.height = midium + 'px';

divF.style.backgroundColor = 'red';
divF.style.borderRadius = '50%';
divF.style.width = biggest + 'px';
divF.style.height = biggest + 'px';

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
    span5_1.style.color = 'blue';
}

if (H < 0) {
    span5_2.style.color = 'red';
} else if (H == 0) {
    span5_2.style.color = 'green';
} else {
    span5_2.style.color = 'blue';
}

if (I < 0) {
    span5_3.style.color = 'red';
} else if (I == 0) {
    span5_3.style.color = 'green';
} else {
    span5_3.style.color = 'blue';
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

// 7 uzdavinys 
const div = document.querySelector('section#go7 div')


const figura = rand(1, 3);


if (figura === 1) {
    div.style.width = '30px';
    div.style.height = '30px';
    div.style.borderRadius = '50%';
    div.style.backgroundColor = 'red';
} else if (figura === 2) {
    div.style.width = '0px';
    div.style.height = '0px';
    div.style.borderLeft = '50px solid transparent';
    div.style.borderRight = '50px solid transparent';
    div.style.borderBottom = '50px solid green';
} else {
    div.style.width = '30px';
    div.style.height = '30px';
    div.style.backgroundColor = 'black';
}
console.log(figura);

//   8 uzuodis


const uzduotis8span1 = document.querySelector('section#go8 [data-green] span');
const uzduotis8span2 = document.querySelector('section#go8 [data-red] span');
const uzduotis8span3 = document.querySelector('section#go8 [data-blue] span');
const uzduotis8div1 = document.querySelector('#go8 div:nth-of-type(1)');
const uzduotis8div2 = document.querySelector('#go8 div:nth-of-type(2)');
const uzduotis8div3 = document.querySelector('#go8 div:nth-of-type(3)');
const uzduotis8div4 = document.querySelector('#go8 div:nth-of-type(4)');
const uzduotis8div5 = document.querySelector('#go8 div:nth-of-type(5)');
const uzduotis8div6 = document.querySelector('#go8 div:nth-of-type(6)');


let raudonas = 0;
let zalias = 0;
let melynas = 0;

if (uzduotis8div1.style.backgroundColor == 'red') {
    raudonas++;
} else if (uzduotis8div1.style.backgroundColor == 'blue') {
    melynas++;
} else {
    zalias++;
}

if (uzduotis8div2.style.backgroundColor == 'red') {
    raudonas++;
} else if (uzduotis8div2.style.backgroundColor == 'blue') {
    melynas++;
} else {
    zalias++;
}

if (uzduotis8div3.style.backgroundColor == 'red') {
    raudonas++;
} else if (uzduotis8div3.style.backgroundColor == 'blue') {
    melynas++;
} else {
    zalias++;
}

if (uzduotis8div4.style.backgroundColor == 'red') {
    raudonas++;
} else if (uzduotis8div4.style.backgroundColor == 'blue') {
    melynas++;
} else {
    zalias++;
}
if (uzduotis8div5.style.backgroundColor == 'red') {
    raudonas++;
} else if (uzduotis8div5.style.backgroundColor == 'blue') {
    melynas++;
} else {
    zalias++;
}
if (uzduotis8div6.style.backgroundColor == 'red') {
    raudonas++;
} else if (uzduotis8div6.style.backgroundColor == 'blue') {
    melynas++;
} else {
    zalias++;
}

uzduotis8span1.innerText = zalias ;
uzduotis8span2.innerText = melynas;
uzduotis8span3.innerText = raudonas ;


//  9 uzduotis

// const uzduotis9pirmaeilutespan1 = document.querySelector('#go9 [data-row-1] span:nth-of-type(1)');
// const uzduotis9pirmaeilutespan2 = document.querySelector('#go9 [data-row-1] span:nth-of-type(2)');
// const uzduotis9pirmaeilutespan3 = document.querySelector('#go9 [data-row-1] span:nth-of-type(3)');

// const uzduotis9antraeilutespan1 = document.querySelector('#go9 [data-row-2] span:nth-of-type(1)');
// const uzduotis9antraeilutespan2 = document.querySelector('#go9 [data-row-2] span:nth-of-type(2)');
// const uzduotis9antraeilutespan3 = document.querySelector('#go9 [data-row-2] span:nth-of-type(3)');

// const uzduotis9treciaeilutespan1 = document.querySelector('#go9 [data-row-3] span:nth-of-type(1)');
// const uzduotis9treciaeilutespan2 = document.querySelector('#go9 [data-row-3] span:nth-of-type(2)');
// const uzduotis9treciaeilutespan3 = document.querySelector('#go9 [data-row-3] span:nth-of-type(3)');

// const uzduotis9treciaeilutespan1 = document.querySelector('#go9 [data-row-4] span:nth-of-type(1)');
// const uzduotis9treciaeilutespan2 = document.querySelector('#go9 [data-row-4] span:nth-of-type(2)');
// const uzduotis9treciaeilutespan3 = document.querySelector('#go9 [data-row-4] span:nth-of-type(3)');


const visosEilutes = document.querySelectorAll('#go9 div');

for (let i = 0; i < visosEilutes.length; i++){
    const row = visosEilutes[i];
    const spans = row.querySelectorAll('span');
    
    const pirmasSkaicius = spans[0].innerText;
    const antrasSkaicius = spans[1].innerText;
    const result = pirmasSkaicius * antrasSkaicius;
    spans[2].innerText = result;
}













// 10 uzduotis

const uzduotis10Div1 = document.querySelector('section#go10 [data-sq-1]');
const uzduotis10Div2 = document.querySelector('section#go10 [data-sq-2]');
const uzduotis10Div3 = document.querySelector('section#go10 [data-sq-3]');
const uzduotis10Div4 = document.querySelector('section#go10 [data-sq-4]');
const uzduotis10Div5 = document.querySelector('section#go10 [data-sq-5]');



if (uzduotis10Div1) {
 const width = parseInt(uzduotis10Div1.style.width);
 const height = parseInt(uzduotis10Div1.style.height);
 const plotas = width * height;
 if (plotas > 10000){
    uzduotis10Div1.style.backgroundColor = 'red';
 }
} 

if (uzduotis10Div2) {
    const width = parseInt(uzduotis10Div2.style.width);
    const height = parseInt(uzduotis10Div2.style.height);
    const plotas = width * height;
    if ( plotas > 10000){
        uzduotis10Div2.style.backgroundColor = 'red';
    }
}

if (uzduotis10Div3) {
    const width = parseInt(uzduotis10Div3.style.width);
    const height = parseInt(uzduotis10Div3.style.height);
    const plotas = width * height;
    if ( plotas > 10000){
        uzduotis10Div3.style.backgroundColor = 'red';
    }
}

if (uzduotis10Div4) {
    const width = parseInt(uzduotis10Div4.style.width);
    const height = parseInt(uzduotis10Div4.style.height);
    const plotas = width * height;
    if ( plotas > 10000){
        uzduotis10Div4.style.backgroundColor = 'red';
    }
}

if (uzduotis10Div5) {
    const width = parseInt(uzduotis10Div5.style.width);
    const height = parseInt(uzduotis10Div5.style.height);
    const plotas = width * height;
    if ( plotas > 10000){
        uzduotis10Div5.style.backgroundColor = 'red';
    }
}

// prie type 2 nurodo kad ims antra diva. ne pirma. cia antras uzdavinys

// sestas uzdavinys kaip rasti span

// const span2 = document.querySelector ('section#go6 [data-amount] span');
// const span2 = document.querySelector ('section#go6 [data-amount] span:nth-of-type(2)')

// span2.innerText = 6;
// console.log(5 * 4);