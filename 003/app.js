console.log('labas,ka tu?')

// number 4
// string (tekstas)
// object (objektas) sudetinis elementas
// boolean (logine reiksme, true arba false)
// undefined (neapibrezta)

let A;
// console.log(A, '->', typeof A);


const B = 5;
if (B > 10) {
     A = 'daugiau nei 10'
} else {
     A = 'ne daugiau 10';
}
console.log(A, '->', typeof A);

const R1 = 1 + 2;
const R2 = 1 * 2;
const R3 = 1 / 2;
const R4 = 1 - 2;

console.log(R1, R2, R3, R4);

const R5 = 0.1 + 0.2
const R5_galutiniam = R5.toFixed(2); 
// 2 Skliausteliuose rodo kiek skaiciu rodys po kablelio

console.log(R5, R5_galutiniam)

const R6 = 7 % 3;
// % dalybos zenkla, ir rodo consolej liekana. 7/3 yra du, liekada 1, 1 ir rodo. 
const R7 = parseInt(7 / 3);
// PARSEINT RODO SVEIKUS SKAICIUS

console.log(R6, R7);

let R8 = 2;

R8++;
// du pliusai padidina vienetu R8=R8 + 1
console.log(R8++);
console.log(R8);

let R9 = 2;
let rezultatas = R9++ * ++R9; 
// pliusai desineje padidina vienetu po veiksmo, pliusai kaireje padidina vienetu iki veiksmo tai cia 2*4
console.log(rezultatas);

S1 = 'Labas';
S2 = 'rytas';

const S3 = S1 + ' ' + S2;
console.log(S3);

let raideB = 'b';
raideB++;
console.log(raideB, '->', typeof raideB);

const isNulio = 10 / 0;
console.log(isNulio, '->', typeof isNulio);

// NaN arba infinity reiškia klaidos

const be = 'Bebras'
console.log(be[0] + be[3]);
// spausdina 0 ir 3 raides. 

console.log(be[be.length-1]);
// is viso zodzio ilgio atima viena ir gauna paskutine raide 

console.log(be[parseInt((be.length - 1) / 2)]);
// cia iseme vidurine raide is zodzio.

const bebras2 = 'Bebras' + 55 + 20 ;
// jeigu priekyje stringas tai ir toliau bus stringas. jeigu bebras butu gale ir priekyje du skaiciai, tai pirmiausia sudetu du skaicius matematiskai ir gautumem 75 bebrai.
console.log(bebras2)