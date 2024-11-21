
console.log('veikia?');
console.log('veikia, tik kas iš to?');

const uzduotis1 = document.querySelector(".select1");
const uzduotis2 = document.querySelector(".select2");
const uzduotis3 = document.querySelector(".select3");
const uzduotis4 = document.querySelector(".select4");
const uzduotis5 = document.querySelector(".select5");
const uzduotis6 = document.querySelector(".select6");
const uzduotis7 = document.querySelector(".select7");
const uzduotis8 = document.querySelector(".select8");
const uzduotis9 = document.querySelector(".select9");
const uzduotis10 = document.querySelector(".select10");

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const skaicius = rand(-1000, 1000);
console.log(skaicius);

if (skaicius >0) {
    uzduotis1.innerText = `Skaičius ${skaicius} yra teigiamas`;
}
else if (skaicius<0){
    uzduotis1.innerText = `Skaičius ${skaicius} yra neigiamas`;
}
else{
    uzduotis1.innerText = `Skaičius ${skaicius} yra 0`;
}

// antra uzduotis

const skaicius1 = rand(0, 1000);
console.log(skaicius1);

if (skaicius1 % 2 === 0) {
    uzduotis2.innerText = `Skaičius ${skaicius1} yra lyginis`;
}
else{
    uzduotis2.innerText = `Skaičius ${skaicius1} yra nelyginis`;
}

// trecia uzduotis 

const temp = rand(-30, 100);

if ( temp  < 0) {
    uzduotis3.innerText = `temperatūra ${temp} yra žemiau už 0`
} else if (temp >= 0 && temp <= 30 ) {
    uzduotis3.innerText = `temperatūra ${temp} yra tarp 0 ir 30`
}
else {
uzduotis3.innerText = `temperatūra ${temp} yra daugiau nei 30`
}

// ketvirta uzdotis

const amzius = rand (10, 100);

if (amzius < 18){
    uzduotis4.innerText = `Amžius ${amzius}m. Asmeniui yra mažiau nei 18m.`;
} else if (amzius >= 18 && amzius <= 60){
    uzduotis4.innerText = `Amžius ${amzius}m. Asmuo yra tarp 18m. ir 60m.`
} else {
    uzduotis4.innerText = `Amžius yra ${amzius}. Asmuo yra pensinio amžiaus.`
}





// 5 uzduotis

const skaicius5 = rand(1000, 2000);
const skaicius50 = rand(1000,2000);

console.log(skaicius5, skaicius50);

if (skaicius5 > skaicius50) {
    uzduotis5.innerText = `Skaicius ${skaicius5} yra didesnis uz skaičių ${skaicius50}`
} else if (skaicius5 < skaicius50) {
    uzduotis5.innerText = `Skaicius ${skaicius5} yra mažesnis uz skaičių ${skaicius50}`
    
}
else{
 uzduotis5.innerText = `Skaicius ${skaicius5} yra lygus skaičiui ${skaicius50}`
}

// Užduotis 6: Pasiūlymas pirkėjui
// Aprašymas: Sukurk kintamąjį suma. Jei suma mažesnė nei 100, pasiūlyk „Įsigyk daugiau prekių“. Jei suma tarp 100 ir 500, parašyk „Jūs gaunate nuolaidą!“. Jei virš 500, parašyk „Jūs gaunate papildomą dovaną!“.
// Pavyzdys: Jei suma = 250, konsolėje turėtų atsirasti tekstas „Jūs gaunate nuolaidą!“.

const prekiuSuma = rand(0, 1000);

if (prekiuSuma < 100){
    uzduotis6.innerText = `Prekių suma yra ${prekiuSuma}. Įsigyk daugiau prekių.`;
} else if (prekiuSuma >= 100 && prekiuSuma <=500){
    uzduotis6.innerText = `Prekių suma yra ${prekiuSuma}. Jūs gaunate nuolaidą!`
} else {
    uzduotis6.innerText = `Prekių suma yra ${prekiuSuma}. Jūs gaunate papildomą dovaną!`;
}
console.log(prekiuSuma);

// Užduotis 7: Vardų patikrinimas
// Aprašymas: Sukurk kintamąjį vardas. Jei vardas yra „Jonas“, atspausdink „Labas, Jonai!“, jei „Ona“ – „Labas, Ona!“, o kitu atveju – „Labas, [vardas]!“.
// Pavyzdys: Jei vardas = „Ona“, konsolėje turėtų atsirasti tekstas „Labas, Ona!“.

const vardas = rand(1, 3);
let vardas1 = 'Jonas';
let vardas2 = 'Ona';
let vardas3 = 'Maryte';

if (vardas === 1){
    uzduotis7.innerText = `Labas, ${vardas1}`;
} else if (vardas === 2){
    uzduotis7.innerText = `Labas, ${vardas2}`;
} else{
    uzduotis7.innerText = `Labas vardas!`
}
console.log(vardas);

// Užduotis 8: Egzaminų rezultatas
// Aprašymas: Sukurk kintamąjį rezultatas. Jei rezultatas didesnis nei 90, parašyk „Puiku!“, jei tarp 60 ir 90 – „Gerai!“, jei žemiau 60 – „Nepakanka!“.
// Pavyzdys: Jei rezultatas = 85, konsolėje turėtų atsirasti tekstas „Gerai!“.

const rezultatas = rand(0, 100);

if (rezultatas < 60){
    uzduotis8.innerText = `Rezultatas yra ${rezultatas}. Nepakanka!`;
} else if (rezultatas >= 60 && rezultatas <=90){
    uzduotis8.innerText = `Rezultatas yra ${rezultatas}. Gerai!`
} else {
    uzduotis8.innerText = `Rezultatas yra ${rezultatas}. Puiku!`;
}
console.log(rezultatas);

// Užduotis 9: Darbo valandos
// Aprašymas: Sukurk kintamąjį valandos. Jei valandos reikšmė tarp 9 ir 17 (imtinai), parašyk „Dabar darbo laikas“, kitu atveju – „Ne darbo laikas“.
// Pavyzdys: Jei valandos = 14, konsolėje turėtų atsirasti tekstas „Dabar darbo laikas“.

const valandos = rand(1, 24);

if (valandos <= 17 && valandos >= 9){
    uzduotis9.innerText = `Dabar yra ${valandos}h. Dabar darbo laikas.`
} else {
    uzduotis9.innerText = ` Dabar yra ${valandos}h. Dabar yra ne darbo laikas.`
}
console.log(valandos);


// Užduotis 10: Studentų balai
// Aprašymas: Sukurk kintamuosius studentas1 ir studentas2. Patikrink, kuris iš jų gavo daugiau balų, ir atspausdink atitinkamą pranešimą.
// Pavyzdys: Jei studentas1 = 75 ir studentas2 = 85, konsolėje turėtų atsirasti tekstas „Studentas 2 gavo daugiau balų“.

const studentas1 = rand(1, 100);
const studentas2 = rand(1, 100);
if (studentas1 > studentas2 && studentas1 != studentas2){
    uzduotis10.innerText = `Studentas 1 gavo ${studentas1} balų. Studentas 1 gavo daugiau balų.`
} else if (studentas2 > studentas1 && studentas2 != studentas1){
      uzduotis10.innerText = `Studentas 2 gavo ${studentas2} balų. Studentas2 gavo daugiau balų.`
} else{
      uzduotis10.innerText = `Studentas 1 gavo ${studentas1} balų. Studentai surinko vienodai balų.`
}
console.log(studentas1, studentas2);
