console.log('nemokša');


//1 Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais.


const A = [
    'Bebras',
    'Zebras',
    'Vilkas',
    'Lapė',
    'Barsukas',
    'Voverė',
    'Laukinis katinas',
    'Šuo',
    'Naminis katinas',
];

const ul = document.querySelector('.pirmaUzduotis');

A.forEach(animals => {
    const li = document.createElement('li');
    li.innerText = animals;
    ul.appendChild(li);
});


//2 Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo A nuskaitytais gyvūnais išdėliotais abėcėline tvarka.

const ul2 = document.querySelector('.antraUzduotis');

// A.sort((a, b) => {
//     if (a[0] < b[0]) {
//         return -1;
//     }
//     if (a[0] > b[0]) {
//         return 1;
//     }
//     return 0;
// });
//  console.log(A);


A.sort((a, b) => a.localeCompare(b, 'lt'));
console.log(A);

A.forEach(animals => {
    const li = document.createElement('li');
    li.innerText = animals;
    ul2.appendChild(li);
})


//3 Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvų A ir B nuskaitytais gyvūnais išdėliotais abėcėline tvarka (Rūšiavimas turi būti bendras tarp abiejų masyvų, NE kiekvieno atskirai).#pamastykKaip


const B = [
    'Kalakutas',
    'Višta',
    'Antis',
    'Žąsis',
    'Ančiasnapis'
];

const D = [...A, ...B];
D.sort((a, b) => a.localeCompare(b, 'lt'));
const ul3 = document.querySelector('.treciaUzduotis');


D.forEach(animals => {
    const li = document.createElement('li');
    li.innerText = animals;
    ul3.appendChild(li);
})

// A.forEach(animals =>{
//     const li = document.createElement('li');
//     li.innerText = animals;
//     ul3.appendChild(li);
// })

// B.forEach(animals =>{
//     const li = document.createElement('li');
//     li.innerText = animals;
//     ul3.appendChild(li);
// })

//  ul3.sort((a, b) => a[0].localeCompare(b[0], 'lt'));

//4 Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra mėlyni apskritimai su centre užrašytais iš masyvo A nuskaitytais gyvūnais.

const uzd4 = document.querySelector('.ketvirtaUzduotis')

A.forEach(animals => {
    const div = document.createElement('div');
    div.innerText = animals;
    div.style.width = '80px';
    div.style.height = '80px';
    div.style.backgroundColor = 'skyblue';
    div.style.borderRadius = '50%';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    uzd4.appendChild(div);
});


//5 Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra raudoni apskritimai su centre centre užrašytais iš masyvo B nuskaitytais gyvūnais ir tų gyvūnų raidžių skaičiumi.


const uzd5 = document.querySelector('.penktaUzduotis');

B.forEach(animals => {
    const div = document.createElement('div');
    console.log(animals.length);
    div.innerText = animals + ' ' + animals.length;
    div.style.width = '100px';
    div.style.height = '100px';
    div.style.border = '5px solid red';
    div.style.borderRadius = '50%';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    uzd5.appendChild(div);
});


//6 Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite div tagus, kurie yra žali apskritimai su centre užrašytais gyvūnais, nuskaityto iš masyvo A. Dėkite tik tuos gyvūnus, kurie savo pavadinime turi tik vieną žodį.

const uzd6 = document.querySelector('.sestaUzduotis');
// const nauji = A.filter(animal => animal.indexOf(' ')=== -1);
const nauji = A.filter(animal => !animal.includes(' '));
nauji.forEach(animals => {
    const div = document.createElement('div')
    div.innerText = animals;
    div.style.width = '80px';
    div.style.height = '80px';
    div.style.backgroundColor = 'lightgreen';
    div.style.borderRadius = '50%';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.innerText = animals;
    uzd6.appendChild(div);
})


//7 Html faile sukurkite section tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite span tagus, kurie yra geltoni apskritimai su centre užrašytais iš masyvo B nuskaitytų gyvūnų pavadinimų raidėm. Kiekvienas span tagas- atskira raidė. (visų gyvūnų visos raidės atskiruose span taguose).#ciklasCikle

const uzd7 = document.querySelector('.septintaUzduotis');
for (let i = 0; i < B.length; i++) {
    const zodis = B[i];
    const divas = document.createElement('div');
    for (let j = 0; j < zodis.length; j++) {
        const raide = zodis[j];
        const span = document.createElement('span');
        span.innerText = raide;
        span.style.width = '50px';
        span.style.height = '50px';
        span.style.backgroundColor = 'yellow';
        span.style.borderRadius = '50%';
        span.style.display = 'inline-flex';
        span.style.justifyContent = 'center';
        span.style.alignItems = 'center';
        divas.appendChild(span);
    }
uzd7.appendChild(divas);
}





//8 Html faile sukurkite du ul tagus (tiesiogiai). Į  vieną sukurtą tagą, su JS, sudėkite li tagus su iš masyvo C nuskaitytais gyvūnais, kurių pavadinimas ne ilgesnis kaip 6 raidės, į kitą likusius.

const C = [
    'Višta',
    'Gaidys',
    'Šernas',
    'Lapė',
    'Vilkas',
    'Šuo dingo',
    'Barsukas',
    'Voverė',
    'Šuo',
    'Naminis katinas',
    'Laukinis katinas',
    'Šuo atsirado',
    'Bebras',
    'Ožys'
];

const trumpesniUzSesis = C.filter(zodis => zodis.length < 6);
const ilgesnisUzSesis = C.filter(zodis => zodis.length > 6);
const ulvienas = document.querySelector('.trumpi');
const uldu = document.querySelector('.ilgi');

trumpesniUzSesis.forEach(animal => {
    const li = document.querySelector('li')
    li.innerText = animal;
    ulvienas.appendChild(li)
})


ilgesnisUzSesis.forEach(animal =>{
    const li = document.querySelector('li');
    li.innerText = animal;
    uldu.appendChild(li);
})

//apacioje dar vienas sprendimo budas su if:


// const ultrumpi = document.querySelector('.trumpi');
// const ulilgi = document.querySelector('.ilgi');

// C.forEach( animal =>{
// if (animal.length < 6){
//     const li = document.querySelector('li');
//     li.innerText = animal;
//     ultrumpi.appendChild(li);
// } else {
//     const li =document.querySelector('li');
//     li.innerText = animal;
//     ulilgi.appendChild(li);
// }
// });






//9 Html faile sukurkite ul tagą (tiesiogiai). Į sukurtą tagą, su JS, sudėkite li tagus su iš masyvo B nuskaitytais gyvūnais. Išfiltruokite ir nedėkite šunų.


const devintasUl = document.querySelector('.devintas');

const beSuo = C.filter(animal => !animal.includes('Šuo'));

beSuo.forEach(animals => {
    const li = document.createElement('li');
    li.innerText = animals;
    devintasUl.appendChild(li);
});

//10 Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ iš masyvo C nuskaitytus gyvūnus. Kad būtų daugiau gyvūnų, tą patį masyvą nuskaitykite 10 kartų. Gyvūnų pavadinimų raidžių dydis- atsitiktinis nuo 10px iki 100px. Gyvūnų pavadinimų raidžių spalva atsitiktinė. Pavadinimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną (funkcijos duotos 02. DOM ir Cycles (one & four edition)).#fun

