console.log('vis dar nieko nemoku, nors jau 10 paskaita');


// reikia parasyti  funkcija kuri priima viena argumenta stringa ir ta stringa ideda i h1 taga ir tada tada ideda i body.

// const uzduotis = document.querySelector('body');

// const kazkokia = (a) => {
// a.innerHtml = `<h1>idejau teksta i cia</h1>`
// }
// console.log(uzduotis('idejau teksta i cia'));

const fun1 = (text) => {
    const body = document.querySelector('body');
    const h1Html = `<h1>${text}</h1>`;
    body.innerHTML = h1Html;
}
fun1('Labas rytas!');

// 2. Reikia parašyti funkciją, kuri priima vieną argumentą - stringą ir ras stringas yra spalva, kuria reikia nuspalvinti h1 tagą.

const fun2 = (color) => {
    const h1 = document.querySelector('h1');
    h1.style.color = color;

}

fun2('crimson');

// 3. Reikia parašyti funkciją, kuri nieko nepriima, bet pakeičia h1 tago teksta į "Kaboom!".


const fun3 = () => {
    const h1 = document.querySelector('h1');
    h1.innerHTML = 'Kaboom';
}
fun3();




let A = 5;
let B = A; //BY VALUE

A = A + 2;

console.log(A, B);


const C = [5, 'labas', true]; //BY REFERENCE
const D = C;
const F = [...C]; //by copying values

// const F = [5, 'labas', true] taip atrodo [...C]


C[0] = C[0] + 2;

console.log(C, D, F);


const fun15 = (...rest) => {
    console.log(rest[0] + rest[1]);

}
fun15(5, 8);


//virsuj rest apacioj spread


const fun16 = (a, b) => {
    console.log(a + b);

}
const spread = [5, 8];

fun16(...spread);









const person = {
    name: 'Vardenis',
    surname: 'Pavardenis',
    age: 99,
    city: 'Vilnius',
    country: 'Lietuva',
    hairStyle: 'bold'
}
const { age, city } = person;

console.log(age, city,);



const animals =  ['bebras', 'lokys', 'vilkas'];
const [animal1, animal2] = animals;
console.log(animal1,animal2);



//dvigubos finkcijos

const bigFun = (a, b) => {
    console.log('Big Fun Suma:', a + b);
    
}
const notBigFun = (c) => {
    const d = 5;
    const e = 8;
    c(d, e); //calling bigFun
}


notBigFun(bigFun);





// const printItem = item => {
//     console.log('ITEM:', item.toUpperCase());
// }

// const itemsData = f => {
//     const items = ['stalas', 'kede', 'lova', 'spinta'];
 
//     for (let i = 0; i < items.length; i++) {
//         f(items[i]);
//     }
   
// }
// itemsData(printItem);

//sita pati kas virsuj galima uzrasyti ir taip:

// const printItem = item => {
//     console.log('ITEM:', item.toUpperCase());
// } tada sito nebereikia, nes jis isiraso i apacia 

const itemsData = f => {
    const items = ['stalas', 'kede', 'lova', 'spinta'];
 
    for (let i = 0; i < items.length; i++) {
        f(items[i]);
    }
   
}
itemsData(item => {
    console.log('ITEM:', item.toUpperCase());
}); //cia tiesiai i funkcija idejom kita funkcija 


console.log('-----------------------');


const coolItems = ['stalas', 'kede', 'lova', 'spinta'];

for (let i = 0; i < coolItems.length; i++) {
    console.log('ITEM:', coolItems[i].toUpperCase());
}

console.log('-----------------------');

//myfancyItem - rodo item, antroje vietoje kas parasyta, duos numerius (pas mus vadinasi numberasfancyindex, jeigu dar trecia kazka irasyciau, rodytu kintamuosius kas yra masyne)
coolItems.forEach((myFancyItem, numberAsFancyIndex) =>{
    console.log('ITEM:', numberAsFancyIndex, myFancyItem.toUpperCase());
});

console.log('-----------------------');

//kuo foreach skiriasi nuo map

 const gr = coolItems.map((myFancyItem, index) =>{
    console.log('ITEM:', myFancyItem.toUpperCase());
    return  index + ':' + myFancyItem.toUpperCase();
});

console.log('grazina:', gr);

//foreach nieko negrazina, map grazina. tik norint kad grazintu, reikia prirasyti return


const withDivs = coolItems.map(item => {
    return `<div>${item.toUpperCase()}</div>`;
});
 
console.log('WITH DIVS:', withDivs);
 
let divs = '';
 
for (let i = 0; i < withDivs.length; i++) {
    divs += withDivs[i];
}

const body = document.querySelector('body');
body.innerHTML=divs;