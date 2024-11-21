console.log('nevykėlė');

const size = 'S';

if (size === 'S') {
    console.log('S');
}
if (size === 'S' || size === 'M') {
    console.log('M');
}
if (size === 'S' || size === 'M' || size === 'L') {
    console.log('L');
}
if (size === 'S' || size === 'M' || size === 'L' || size === 'XL') {
    console.log('XL');
};
const wtf = 'のとき、どのコンソールログが出力されるか選択してください';

//antras variantas su switch metodu:
switch (size) {
    case 'S':
        console.log('S');
    case 'M':
        console.log('M');
    case 'L':
        console.log('L');
    case 'XL':
        console.log('XL');
    default:
        console.log('mamajema');

};

const letter = 'B';


if (letter === 'A') {
    console.log('A');
} else if (letter === 'B') {
    console.log('B');
} else if (letter === 'C') {
    console.log('C');
} else {
    console.log('D');
};
console.log('....................');
//IF PERRASYTI SWITCH METODU

switch (letter) {
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'C':
        console.log('C');
        break;
    default:
        console.log('D');
        break;
};

//cia siaip, JS bajeriai. idomiai console rodo
console.log(1 + '1');
console.log(1 - '1'); //wtf
console.log(1 + true);
console.log(1 - true);

//WHILE CIKLAS

// while (true) {
//     console.log('mamajema');
//     break;

// };
function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


let moneta;
let moneta2;
let saugiklis = 50;
//saugiklis,paprastai rasomas fuse, rodo kiek kartu sukam. kad daugiau nesuktu.

do {
    moneta = rand(0, 1) ? 'skaicius' : 'herbas';
    moneta2 = rand(0, 1) ? 'skaicius' : 'herbas'
    console.log(moneta, moneta2);
    if (--saugiklis < 0) { //jeigu sukasi 50 kartu ir prasisuko jau 50 kartu, isspausdinam boom
        console.log('boom');
        break;
    }


} while (moneta != 'herbas' || moneta2 != 'herbas');
// } while (true);


//jeigu true ciklas kartojasi, jei false ciklas sustoja

// * invert 

// == <---> !=
// === <---> !==
// > <---> <=
// < <---> >+
// || <---> &&

//zodziu, jeigu norim, kad ciklas sustotu, kad abi monetos buna herbas, uzrasom while cikla neiginiu, kad ne herbas abu, ir tada rodys herba. zodziu, rasom neiginius kad gautume teiginius

console.log('.........uzdavinys su jonu.............');


let jonasTuri = 0;

const mociuteDave = rand(300, 700);
console.log("mociute dave: " + mociuteDave);

jonasTuri += mociuteDave;

while (jonasTuri <= 500) {
    console.log('Jonas vaziuoja');

    const uzdirbo = rand(20, 100);
    jonasTuri += uzdirbo;
    console.log(jonasTuri);

};
console.log('..............................');

//for in ir for of ciklai. pradedam nuo for in:

const masyvas = ['blue', 'red', 'green', 'yellow', 'black', 'white'];

for (let i = 0; i < masyvas.length; i++) {
    console.log(masyvas[i]); 
}
console.log('........');

//cia tas pats tik for in parasyta
for(let i in masyvas){
    console.log(masyvas[i]);
    
}
//for off:
console.log('..........');

for (let color of masyvas)
    console.log(color);
    
console.log('........................');

const objektas = {
    color: 'blue',
    weight: 100,
    height: 200,
    width: 300
};


const {color: spalva, width: plotis} = objektas;

console.log(spalva, plotis);




for (let raktas in objektas){
    console.log(raktas, objektas[raktas]);
    
};