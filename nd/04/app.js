console.log('kosmosas');

const A = [83, 55, 53, -73, 0, 8, 17, 76, 95, -1, 35, -16, -22, -94, 9, 54, 66, 30, -46, 9, 62, -9, -64, -55, 0, 19, 29, -70, 0, 51, -92, 46, 43, 58, -61, 3, -12, -58, -82, 5, 5, 97, 90, -51, 57, 72, -71, -6, 86, 34, 100, -94, 44, 80, 54, 60, 87, -94, -25, -59, -90, -3, 35, 7, -16, 26, -38, 82, 79, -61, -48, -3, 56, -32, -94, -87, -24, 86, -93, -21, 83, -71, -2, -45, 15, 39, 0, 29, -77, -97, 27, 77, 41, 0, 40, -54, 99, 70, -41, 91];

// 1. Surasti didziausia skaiciu:

let didziausias = A[0];
for (let i = 0; i < A.length; i++){
    if(A[i] > didziausias){
        didziausias = A[i];
    }
}

console.log('Didziausias skaicius;', didziausias);

// 2. Surasti maziausia skaiciu:

let maziausias = A[0];
for (let i = 0; i< A.length; i++){
    if (A[i] < maziausias){
        maziausias = A[i];
    }
}

console.log('Maziausias skaicius:', maziausias);

// Surasti didžiausią neigiamą skaičių;

let didziausiasNeigiamas  = A[0];

for (let i  = 0; i < A.length; i++){
    if (A[i] < didziausiasNeigiamas && A[i] > -Infinity){
       didziausiasNeigiamas = A[i]
    }
}
console.log('Didziausias neigiamas:', didziausiasNeigiamas);



//4 Surasti didžiausią skaičių, kuris yra mažesnis už 50; 


let didziausiasBetMazesnis = 0;
for (let i = 0; i < A.length; i++) {
    if (A[i] < 50  &&   A[i]> 0 && A[i] > didziausiasBetMazesnis) {
        didziausiasBetMazesnis = A[i];
    }
}
console.log('Didziausias teigiamas skaicius, kuris yra mazesnis uz 50 yra:', didziausiasBetMazesnis);


// Suskaičiuoti teigiamų skaičių sumą;

let teigiamuSuma = 0;

A.forEach(skaicius =>{
    if (skaicius > 0) {
        teigiamuSuma += skaicius;
    }
})
  console.log('Teigiamų skaiciu suma yra:', teigiamuSuma);
  

// Suskaičiuoti neigiamų skaičių kvadratų (skaičių pakeltų kvadratu) sumą;

for (let i = 0; i < A.length; i++) {
    const kvadratas = A[i] **2;
   if (A[i] < 0){
    console.log(kvadratas);
    
   }
    
}

// Suskaičiuoti kiek skaičių patenka į intervalą (imtinai) 25-75

const intervalas = A.filter(skaicius => skaicius >= 25 && skaicius <= 75);


console.log('Intervale tarp 25 ir 75 yra:', intervalas);



// Suskaičiuoti kiek skaičių yra 0-iai;

let skaicius0 = 0;
for (let skaicius of A){
    if (skaicius === 0){
        skaicius0++
    }
}
 console.log('Skaicius 0 pasikartoja', skaicius0, 'kartus');

console.log('-------------');


// Suskaičiuoti kiek skaičių be liekanos dalinasi iš 3;
for (let i = 0; i < A.length; i++) {
    if(A[i] % 3 === 0){
        console.log(A[i]);
    }
}


// Suskaičiuoti neigiamų skaičių vidurkį;

let suma = 0;
let kiekis = 0;
 
for (let skaicius of A){
    if (skaicius < 0){
        suma += skaicius;
        kiekis++
    }
}

let neigiamuVidurkis  = 0;
if(kiekis > 0){
    neigiamuVidurkis = suma / kiekis;
}

console.log('Neigiamu skaiciu vidurkis yra:', neigiamuVidurkis);


const B = [
    'the quick brown fox',
    'jumps over the lazy dog',
    'a bird in the hand',
    'is worth two in the bush',
    'an apple a day',
    'keeps the doctor away',
    'actions speak louder than words',
    'all good things must come to an end',
    'beauty is in the eye of the beholder',
    'better late than never',
    'birds of a feather flock together',
    'cleanliness is next to godliness',
    'dont bite the hand that feeds you',
    'dont count your chickens before they hatch',
    'dont put all your eggs in 1 basket',
    'every cloud has a silver lining',
    'every dog has its day',
    'every rose has its thorn',
    'fortune favors the bold',
    'good things come to those who wait',
    'a watched pot never boils',
    'haste makes waste',
    'history repeats itself',
    'cat got your tongue',
    'home is where the heart is',
    'if the shoe fits, wear it',
    'ignorance is bliss',
    'it takes two to tango',
    'arabs have 100 words for sand',
    'kill two birds with one stone',
    'laughter is the best medicine',
    'love is blind',
    'money doesnt grow on trees',
    'no pain no gain',
    'nothing ventured nothing gained',
    'once bitten twice shy',
    'practice makes perfect',
    'the early bird catches the worm',
    'the grass is always greener on the other side',
    'the pen is mightier than 10 swords',
    'theres no smoke without fire',
    'time heals all wounds',
    '5 second rule',
    'every dog has its day',
    'to err is human to forgive divine',
    '2 wrongs dont make a right',
    'when in Rome do as the Romans do',
    'where theres smoke, theres fire',
    'you cant judge a book by its cover',
    'you cant make an omelette without breaking eggs',
    'you reap what you sow',
    'youre never too old to learn'
];

//1. Surasti ilgiausią stringą;

let ilgiausiasStringas = B[0];
for (let stringas of B){
    if(stringas.length > ilgiausiasStringas.length){
        ilgiausiasStringas = stringas;
    }
}
console.log('Ilgiausias stringas yra:', ilgiausiasStringas);

//2. Surasti trumpiausią stringą; 

let trumpiausiasStringas = B[0];
for (let stringas of B){
    if(stringas.length < trumpiausiasStringas.length){
        trumpiausiasStringas = stringas;
    }
}
console.log('Trumpiausias stringas yra:', trumpiausiasStringas);


//3. Surasti stringą, kuris prasideda “a” raide;

const stringasIsA = B.filter(zodis => zodis[0] === 'a');
console.log('Stringas, kuris prasideda raide a:', stringasIsA);


//4. Surasti stringą su daugiausia žodžių;

const daugiausiaiZodziu = B.sort((a, b) => {
    return b.split(" ").length - a.split(" ").length
})[0];
console.log(daugiausiaiZodziu);


//5. Surasti stringą su mažiausiai žodžių;


const maziausiaiZodziu = B.sort((a, b) => {
    return a.split(" ").length - b.split(" ").length
})[0];
console.log(maziausiaiZodziu);


//6. Suskaičiuoti kiek stringų turi daugiau nei 4 žodžius; 

let daugiauNeiKeturi = 0;
for (let stringai of B){
    if (stringai.split(" ").length > 4){
    daugiauNeiKeturi++;
    }
}
console.log(daugiauNeiKeturi);


//7. Suskaičiuoti kiek masyve yra žodžių;

let visiZodiai = 0;

for (let zodziai of B){
    visiZodiai += zodziai.split(" ").length;
}
console.log(visiZodiai);


//8. Suskaičiuoti visas ‘s’ raides;

let sRaides = 0;

for (let s of B){
    for (let simbolis of s){
        if (simbolis.toLocaleLowerCase() === 's'){
            sRaides++;
        }
    }
}
console.log(sRaides);


//9. Suskaičiuoti kiek masyve yra raidžių (tarpų tarp žodžių neskaičiuoti!);

let visosRaides = 0;
for (let raides of B){
    visosRaides += raides.replace(/\s/g, "").length;
}
console.log(visosRaides);

//10. Surasti ilgiausią žodį (ne stringą, o atskirą stringo žodį!);

let ilgiausiasZodis = "";

for (let zodis of B){
    const zodziai = zodis.split(" ");
    for (let vienas of zodziai){
        if (vienas.length > ilgiausiasZodis.length){
            ilgiausiasZodis = vienas;
        }
    }
}
console.log(ilgiausiasZodis);


const C = [94, true, 'technology', 'year', 34, true, 'flower', 13, 'future', undefined, 0, 12, 'water', 'false', 'school', 'cat', false, 'family', 70, undefined, 'life', 'government', 'mountain', 13, true, 'year', 'sun', 50, 'day', 'food', 0, 'health', 70, 31, 16, 85, 'car', 'internet', 100, 'money', 26, 'fire', 76, [], 45, 'time', 'music', 93, 0, 'love', 69, {}, 96, 0, false, 'air', 'star', 24, 9, 'thing', 19, 'house', 'way', 'true', 90, '0', 'woman', 'time', 'job', '72', '22', 'city', 'history', 47, 'man', 92, 'child', 73, '0', 16, 63, 48, 'country', 45, 'tree', true, 57, 'earth', 96, [], 'hope', 'dream', 39, 43, 'art', 27, 'friend', 'moon', '26', 'science', 74];


//1.  Surasti didžiausią skaičių;


const skaiciai = C.filter((number) => typeof number === "number");

console.log(skaiciai);

let biggest = skaiciai[0];
for (let i = 0; i < skaiciai.length; i++){
    if(skaiciai[i] > biggest){
        biggest = skaiciai[i];
    }
}
console.log('Didiausias skaicius yra:', biggest);


//2.  Surasti trumpiausią stringą;

const zodeliai = C.filter((string) => {
    if (typeof string === "string"){
        return string;
    }
})
console.log(zodeliai);

let trumpiausias = zodeliai[0];
for (let i = 0; i < zodeliai.length; i++){
    if (zodeliai[i] < trumpiausias){
        trumpiausias = zodeliai[i];
    }
}
console.log('Trumpiausias stringas yra', trumpiausias);


//3.  Suskaičiuoti kiek skaičių yra 0-iai (ne stringai ‘0’, o skaičiai!);

const nuliai = C.filter((number) => typeof number === "number");

console.log(nuliai);

let nuliukas = 0;
for (let skaicius of nuliai){
    if (skaicius === 0){
        nuliukas++
    }
}
 console.log('Skaicius 0 pasikartoja', nuliukas, 'kartus');


//4.  Suskaičiuoti teigiamų skaičių sumą (tik skaičių, ne stringų!);

const teigiami = C.filter((number) => typeof number === 'number');
console.log(teigiami);

let teigiamuSkaiciuSuma = 0;

teigiami.forEach(skaicius =>{
    if (skaicius > 0) {
        teigiamuSkaiciuSuma += skaicius;
    }
})
  console.log('Teigiamų skaiciu suma yra:', teigiamuSkaiciuSuma); 

//5. Suskaičiuoti bendrą visų stringų ilgį;

const velStringai = C.filter((string) => typeof string === 'string');
console.log(velStringai);

let visuStringuSuma = 0;

for (let i = 0; i < velStringai.length; i++) {
   visuStringuSuma += velStringai[i].length;
   
}
console.log(visuStringuSuma);

    
//6. Suskaičiuoti vidutinį stringo ilgį; kazka ne to as cia padariau!!!!!!!!!!!!!!!!!

const vienTikStringai = C.filter((string) => typeof string === 'string');
console.log(vienTikStringai);

let stringuSuma = 0;
let avr = 0;

for (let i = 0; i < vienTikStringai.length; i++) {
   stringuSuma += vienTikStringai[i].length 
   avr = stringuSuma / vienTikStringai.length;
}

console.log(avr.toFixed(2));



//7. Suskaičiuoti kiek elementų masyve yra nei stringas nei skaičius; Juokingas budas gauti atsakyma :D :D :D :D D :D :D :D :D

const tikStringai = C.filter((string) => typeof string === 'string');
console.log(tikStringai.length);

const tikSkaiciai = C.filter((number) => typeof number === 'number');
console.log(tikSkaiciai.length);

const neiTokiaNeiTokia = C.length - tikStringai.length - tikSkaiciai.length;
console.log(neiTokiaNeiTokia);

//8. Suskaičiuoti skaičių, kuriuos galima padaryti iš stringų sumą (jeigu stringas verčiasi ne į NaN);

let sum = 0;

C.forEach (skaiciai => {
   
    if (typeof skaiciai === 'string'){
        let num = Number(skaiciai);
        if (!isNaN(num)){
            sum += num;
        }
    }
})

console.log('Suma:', sum);



//9. Rasti ko yra daugiau- stringų ar skaičių;
 
let kiekstring = 0;
let kiekskaiciu = 0;

C. forEach(item =>{
    if (typeof item === 'string'){
        kiekstring++;
     } else if (typeof item === 'number'){
            kiekskaiciu++
        }
})

if (kiekstring > kiekskaiciu){
    console.log('Stringu yra daugiau:', kiekstring);
    
} else if ( kiekskaiciu > kiekstring){
    console.log('Skaiciu yra daugiau', kiekskaiciu);
    
} else {
    console.log('Skaiciu ir Stringu yra tiek pat', kiekskaiciu, kiekstring);
    
}

//10. Rasti ko yra daugiau- loginių true ar false;
let kiekTrue = 0;
let kiekFalse = 0;

C. forEach(item =>{
    if ( item === true){
        kiekTrue++;
     } else if ( item === false){
            kiekFalse++
        }
})

if (kiekTrue > kiekFalse){
    console.log('True yra daugiau:', kiekTrue);
    
} else if ( kiekFalse > kiekTrue){
    console.log('False yra daugiau', kiekskaiciu);
    
} else {
    console.log('True ir False yra tiek pat', kiekTrue, kiekFalse);
    
};

const D = [[95,78,38],[55,35],[61,0,16],[36,32,16],[64],[94],[80,10,80],[75,80],[41],[91,77],[93,73,77,65],[26,25,17],[19,52,42,11],[35,18,82],[31,1],[3,52,70,84],[98],[90,0],[94,58],[80],[17,0,3],[65],[99,54,33,24],[86,6],[55,47],[63],[41,56],[97,69],[11],[41,53],[19,89],[48,54,54,63],[33,55,60,54],[28,28,74,44],[60],[5,52],[80,92,31,30],[24],[95,4,23],[38,7,61],[53,99,22],[23,34]];

// 1. Surasti didžiausią skaičių;

let maxNumber = -Infinity;

for (let i = 0; i < D.length; i++) {
  for (let j = 0; j < D[i].length; j++) {
    if (D[i][j] > maxNumber) {
      maxNumber = D[i][j];
    }
  }
}

console.log("Didžiausias skaičius yra:", maxNumber);


// 2. Rasti ar yra bent vienas sub masyvas ilgesnis nei 5;

const ilgesnisnei5 = D.some(subArray => subArray.length > 5);

console.log("Ar yra bent vienas submasyvas ilgesnis nei 5?:", ilgesnisnei5);


// 3. Suskaičiuoti kiek elementų yra sub masyvai trumpesni nei 2;
const trumpesninei2 = D.filter(subArray => subArray.length < 2).length;

console.log("Submasyvų trumpesnių nei 2 yra:", trumpesninei2)


// 4. Surasti didžiausią skaičių, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2;

const ilgesninei2 = D.filter(subArray => subArray.length >2).length;
console.log(ilgesninei2);


let didziausiasSkaicius = -Infinity;

for (let i = 0; i < ilgesninei2.length; i++) {
  for (let j = 0; j < ilgesninei2[i].length; j++) {
    if (ilgesninei2[i][j] > maxNumber) {
      maxNumber = ilgesninei2[i][j];
    }
  }
}

console.log("Didžiausias skaičius yra:", maxNumber);


// 5. Suskaičiuoti didesnių nei 10 skaičių sumą, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 3;

// Filtruojame tik submasyvus, kurių ilgis didesnis nei 3
const longSubarrays = D.filter(subArray => subArray.length > 3);

// Suskaičiuojame didesnių nei 10 skaičių sumą
const sumadidesniunei10 = longSubarrays.reduce((total, subArray) => {
  const subSum = subArray
    .filter(num => num > 10) // Filtruojame skaičius > 10
    .reduce((sumadidesniunei10, num) => sumadidesniunei10 + num, 0); // Susumuojame
  return total + subSum;
}, 0);

console.log("Didesnių nei 10 skaičių suma:", sumadidesniunei10);




// 6. Suskaičiuoti kiek skaičių patenka į intervalą (imtinai) 10-20, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 3;
let kiekskaiciupatenka = 0;

for (let i = 0; i < D.length; i++) {
  // Patikriname, ar submasyvo ilgis yra trumpesnis nei 3
  if (D[i].length < 3) {
    for (let j = 0; j < D[i].length; j++) {
      // Patikriname, ar skaičius patenka į intervalą [10, 20]
      if (D[i][j] >= 10 && D[i][j] <= 20) {
        kiekskaiciupatenka++;
      }
    }
  }
};
console.log(kiekskaiciupatenka);




// 7. Suskaičiuoti kiek skaičių be liekanos dalinasi iš 5, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;
// 8. Suskaičiuoti kiek skaičių be liekanos dalinasi iš 5, ieškant tik tokiuose sub masyvuose, kurie yra  ilgio;
// 9. Suskaičiuoti sumą skaičių, kurie sub masyve turi indeksą 2;
// 10. Suskaičiuoti vidurkį skaičių, kurie sub masyve turi indeksą 1 arba 3;

const E = [
    ['time', 'love', 'government'],
    ['year'],
    ['time', 'friend', 'child', 'money'],
    ['air'],
    ['world', 'music'],
    ['phone', 'job', 'hope', 'car'],
    ['day'],
    ['house', 'thing', 'future'],
    ['family', 'man', 'life', 'life'],
    ['way', 'moon', 'history', 'tree'],
    ['cat', 'book', 'science', 'internet'],
    ['food', 'people', 'art', 'country'],
    ['internet', 'friend', 'house', 'job'],
    ['money', 'government', 'antiquity', 'time'],
    ['love', 'cat', 'family', 'friend'],
    ['future', 'year', 'time', 'life'],
    ['sun'],
    ['school'],
    ['health', 'mountain'],
    ['city'],
    ['water', 'star'],
    ['flower', 'earth', 'fire'],
    ['star'],
    ['river', 'art', 'fire'],
    ['woman', 'earth', 'flower', 'computer'],
    ['water', 'technology', 'dream']
];

// 1. Suskaičiuoti bendrą stringų ilgį;
// 2. Suskaičiuoti bendrą stringų ilgį, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2;
// 3. Suskaičiuoti bendrą, ilgesnių nei 6, stringų ilgį, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 2;
// 4. Surasti stringą, kuris prasideda “a” raide, ieškant tik tokiuose sub masyvuose, kurie yra ilgesni nei 3;
// 5. Surasti stringą, kuris pasibaigia “r” raide, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 3;
// 6. Surasti trumpiausią stringą, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;
// 7. Suskaičiuoti vidutinį stringų ilgį, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;
// 8. Suskaičiuoti vidutinį stringų, ilgesnių nei 5, ilgį, ieškant tik tokiuose sub masyvuose, kurie yra trumpesni nei 2;
// 9. Suskaičiuoti vidutinį stringų ilgį, kurie sub masyve turi indeksą 2;
// 10. Suskaičiuoti kiek “s” raidžių yra stringuose, kurie sub masyve turi indeksą 0 arba yra sub masyvo paskutinis elementas;
