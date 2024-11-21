console.log('nemokša');

const uzduotis1 = document.querySelector('.uzduotis1')
const uzduotis2 = document.querySelector('.uzduotis2')
const uzduotis3 = document.querySelector('.uzduotis3')
const uzduotis4 = document.querySelector('.uzduotis4')
const uzduotis5 = document.querySelector('.uzduotis5')
const uzduotis6 = document.querySelector('.uzduotis6')
const uzduotis7 = document.querySelector('.uzduotis7')
const uzduotis8 = document.querySelector('.uzduotis8')
const uzduotis9 = document.querySelector('.uzduotis9')

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

//1 Naršyklėje įdėkite 14 h1 tagų su skaičiumi 4 ir 14 h4 tagų su skaičiumi 1. Visi tagai turi rikiuotis į vieną eilutę.

let h1 = "";
let h4 = "";
for (let i = 0; i < 14; i++) {
    h1 += `<h1>4</h1>`
    h4 += `<h4>1</h4>`
}

// for (let i = 0; i < 14; i++) {

// }

uzduotis1.style.display = 'flex';
uzduotis1.innerHTML = h1 + h4;

//2 Naudodamiesi funkcija rand() naršyklėje eilute (tarp skaičių turi būti tarpai) surašykite 44 atsitiktinius skaičius nuo 14 iki 44. Skaičius, kurie iš 4 dalinasi be liekanos nuspalvinkite raudonai, o kitus mėlynai.

let number = "";

for (let i = 0; i < 44; i++) {
    const randNumber = rand(14, 44);
    if (randNumber % 4 === 0) {
        number += `<span style="color: red; margin-left: 5px; dispay: inline-block;">${randNumber}</span>`
    } else {
        number += `<span style="color: blue; margin-left: 5px; display: inline-block;">${randNumber}</span>`
    }
    // number +=`<span>${randNumber}</span>`
}
uzduotis2.innerHTML = number;




//3 Naršyklėje nupieškite 14 mėlynų apskritimų, išdėliotų eilute.

let circle = "";

for (let i = 0; i < 14; i++) {
    circle += `<span style="display: inline-block; margin-right:10px; width: 50px; height: 50px; border-radius: 50%; 5px; background-color: blue"></span>`
    uzduotis3.innerHTML = circle;
}

// const s3Tag = document.querySelector("#s3");

// for (let i = 0; i < 14; i++) {
//   const p3Tag = document.createElement("p");
//   p3Tag.style.width = "50px";
//   p3Tag.style.height = "50px";
//   p3Tag.style.border = "1px solid blue";
//   p3Tag.style.margin = "5px";
//   p3Tag.style.backgroundColor = "blue";
//   p3Tag.style.borderRadius = "50%";
//   s3Tag.appendChild(p3Tag);
// }
// html: <section id="s3"></section>

// 4 Naršyklėje nupieškite 4 mėlynus ir 4 raudonus apskritimus, išdėliotus eilute  “zebru”. (raudonas, mėlynas, raudonas…).




let circle2 = "";

for (let i = 0; i < 4; i++) {
    circle2 += `<span style="display: inline-block; margin-right: 5px; width: 50px; height: 50px; border-radius: 50%; 5px; background-color: blue"></span>`
    circle2 += `<span style="display: inline-block; margin-right: 5px; width: 50px; height: 50px; border-radius: 50%; 5px; background-color: red"></span>`
}
uzduotis4.innerHTML = circle2;


// 5 Naršyklėje nupieškite daygybos lentelę 4 dauginant iš skaičių nuo 4 iki 14.
let table = `<table border = 1 cellpadding = "10">`

for (let i = 4; i <= 14; i++) {
    let sum = 4 * i;
    table += `<tr><td>4*${i}</td><td>${sum}</td></tr>`

}
table += `</table>`;

uzduotis5.innerHTML = table;

// 6 Naršyklėje nupieškite linija iš 444 “*” (tarp žvaigždučių tarpų nėra). Programiškai “suskaldykite” (naudodami tagus atskirom žvaigždučių grupėm) žvaigždutes taip, kad vienoje eilutėje nebūtų daugiau nei 44 “*”.

let star = "";

for (let i = 1; i <= 444; i++) {
    star += "<span>*</span>"
    if (i % 44 === 0) {
        star += `<br/>`
    }
}
uzduotis6.innerHTML = star;



// 7 Naršyklėje nupieškite 14 atsitiktinių spalvų kvadratų esančių vienas kitame (“matrioška”).#pamastykKaip

let size = 500;

let kvadratas = "";

for (let i = 0; i < 14; i++) {
    kvadratas += `<div style= "
    width: ${size}px;
height: ${size}px;
position: absolute;
background-color: ${randomColor()};
top: ${(500 - size) / 2}px;
left: ${(500 - size) / 2}px;
   "></div>`;
    size -= 30;
}
uzduotis7.style.position = "relative";
uzduotis7.innerHTML = kvadratas;


// 8 Iš simbolio &#9632; (kopijuoti visą žalią tekstą su kabliataškiu) sudėliokite žalią kvadratą turintį 41x41 šių simbolių. Kad kvadratas atrodytų “kvadratiškai” panaudokite css stilių ir papildomus tagus. #ciklasCikle


let kvadratasIsZenklu = "";

for (let i = 0; i < 41; i++) {
    let row = `<div style="display:grid; grid-template-columns:repeat(41, 1.3em);">`
    for (let j = 0; j < 41; j++) {
        row += `<span>&#9632;</span>`

    }
    row += `</div>`
    kvadratasIsZenklu += row;
}
uzduotis8.style.position = "relative";
uzduotis8.style.marginTop = "650px"
uzduotis8.style.color = 'green';
uzduotis8.innerHTML = kvadratasIsZenklu;


// 9. Uždavinyje prieš tai nupieštam kvadratui nupieškite geltonas istrižaides (geltonai nudažykite atitinkamus simbolius). #ciklasCikle


let kvadratasSuIstrizaine = "";
let sizes = 41

for (let i = 0; i < sizes; i++) {
    let row = `<div style="display:flex">`
    for (let j = 0; j < sizes; j++) {
        let color = "";
        if(i===j || sizes-i -1 ===j){
            color = "yellow"
        } else{
            color = "green"
        }
        row += `<span style="color:${color}">&#9632;</span>`
    }
    row += `</div>`
    kvadratasSuIstrizaine += row;
}

uzduotis9.innerHTML = kvadratasSuIstrizaine;

//10. Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ 444 pusiau permatomus atsitiktinės spalvos ir atsitiktinio skersmens nuo 44 iki 144 (px) apskritimus. Apskritimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną.#fun


