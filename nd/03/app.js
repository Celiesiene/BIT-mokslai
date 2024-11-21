console.log('nieko nemoku');

const pirma = document.querySelector('#pirmaUzduotis');
let pirmiSkaiciai = '';
let antriSkaiciai = '';
// const pirmaH2 = document.querySelector('#pirmaUzduotis');
// const h2 = `<h2">Pirma užduotis</h2>`;

// pirmaH2.innerHTML = h2;

// const pirmiSkaiciai = `<h1>4</h1>`;


for (let i = 0; i < 14; i++) {
    pirmiSkaiciai = pirmiSkaiciai + '<h1>4</h1>';

}
pirma.innerHTML = pirmiSkaiciai;

for (let i = 0; i < 14; i++) {
    antriSkaiciai = antriSkaiciai + '<h4>1</h4>'
}
pirma.innerHTML = pirmiSkaiciai + antriSkaiciai;

// 2 uzduotis 

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const skaicius = rand(14, 44);
const antra = document.querySelector('#antraUzduotis');

let lyginiai = '';
let nelyginiai = '';

for (let i = 0; i <= 44; i++) {
    let skaiciai = rand(14, 44);


    if (skaiciai % 4 === 0) {
        lyginiai += `<div style="color:red"'>${parseInt(skaiciai)}</div>`;
        // lyginiai.style.color = 'red'; nesuveikė nes stringe
    } else {
        nelyginiai += `<div style="color:blue">${parseInt(skaiciai)}</div>`;

    }
}
antra.innerHTML = lyginiai + nelyginiai;


// 3 uzduotis 

const trecia = document.querySelector('#treciaUzduotis');
apskritimai = '';
for (let i = 0; i < 14; i++) {
    apskritimai = apskritimai + `<div></div>`;

}
trecia.innerHTML = apskritimai;

// 4 uzduotis 

const ketvirta = document.querySelector('#ketvirtaUzduotis');
let rutuliai = '';

for (let i = 0; i < 8; i++) {
    if (i % 2) {
        rutuliai += `<div></div>`
    } else {
        rutuliai += `<div style="background-color: blue;"></div>`
    }
}

ketvirta.innerHTML = rutuliai;

// 5 uzduotis 

const penkta = document.querySelector('#penktaUzduotis');
let lentele = '';

for (let i = 4; i <= 14; i++) {
    lentele += `<div>4 x ${i} = ${4 * i}</div>`;
}
penkta.innerHTML = lentele;


// 6 uzduotis 

const sesta = document.querySelector('#sestaUzduotis');

let zvaigzdutes = '';

for (let i = 0; i < 444; i++) {
    if ((i + 1) % 44 === 0) {
        zvaigzdutes += '<br>'
    } else {
        zvaigzdutes += '*';
    }
}
sesta.innerHTML += zvaigzdutes;

// 7 uzduotis 

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

const septinta = document.querySelector('#septintaUzduotis');
let kvadratas = 300;
let visiKvadratai = '';

for (let i = 0; i < 14; i++) {
    let kvadratoSpalva = randomColor();
    kvadratas -= 20;
    visiKvadratai += `<div style="background-color:${kvadratoSpalva}; width:${kvadratas}px; height:${kvadratas}px; padding: 10px">`;
}
visiKvadratai += `</div></div></div></div></div></div></div></div></div></div></div></div></div></div>`

septinta.innerHTML = visiKvadratai;

// 8 uzduotis 

const astunta = document.querySelector('#astuntaUzduotis')
let kvadratelis = '';
// let kvadratoDydis = 41;

for (let i = 0; i < 41; i++) {
    for (let j = 0; j < 41; j++) {
        kvadratelis += `<span>&#9632;</span>`;
    }
    kvadratelis += `<br>`;

}

astunta.innerHTML = kvadratelis;


// 9 uzduotis 

const devinta = document.querySelector('#devintaUzduotis')
let kvadratelisSuIstrizainem = '';
// let kvadratoDydis = 41;

for (let i = 0; i < 41; i++) {
    let pirmasGeltonas = i;
    let paskutinisGeltonas = 40 -i;
    for (let j = 0; j < 41; j++) {
       
        if ( j === pirmasGeltonas || j === paskutinisGeltonas){
            kvadratelisSuIstrizainem+=`<span style= "color:yellow">&#9632;</span>`
        } else  kvadratelisSuIstrizainem += `<span style="color:green">&#9632;</span>`;

    } 
    kvadratelisSuIstrizainem += `<br>`;

}

devinta.innerHTML = kvadratelisSuIstrizainem;


// 10 uzduotis
