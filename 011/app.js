console.log('vis dar kosmosas');

//1. Nuspalvinti Visus žodžius iš NR1 sekcijos raudonai. Naudoti forEach.

const nr1 = document.querySelectorAll('#nr1 div');
 nr1.forEach(div => {
    div.style.color = 'crimson'
 });

    // Dar taip galima uzrasyti:
//  document.querySelectorAll('#nr1 div').forEach(div => div.style.color = 'crimson');


// 2. Nuspalvinti visus žodžius iš NR1 sekcijos mėlynai., kurie prasideda raide "J". Naudoti forEach.

document.querySelectorAll('#nr1 div').forEach(div =>{;
if (div.innerText[0] == 'J') {
    div.style.color = 'skyblue'
}
});

// vienoje eiluteje galima butu taip uzrasyti:
// document.querySelectorAll('#nr1 div').forEach(div => div.innerText[0] == 'J' && (div.style.color = 'skyblue'))

const obj = {
    person: {
        name: 'Jonas',
        age: 99,
        motocycle: {
            model: 'Yamaha'
        }
    }
};

console.log(obj.person.car?.model ?? 'neturim masinos');


// 3. Nuspalvinti visus skaičius iš NR2 sekcijos mėlynai, kurie yra didesni nei 10. Naudoti forEach.

// const nr2 = document.querySelectorAll('#nr2 div');
// nr2.forEach(div =>{
//     if (div.innerText > 10 ){
//         div.style.color = 'skyblue'
//     }
// }) mano bandymas

document.querySelectorAll ('#nr2 div').forEach(div =>{
    if(div.innerText > 10) {
        div.style.color = 'skyblue';
    }
})

// 4. Prie visų skaičių iš NR2 sekcijos pridėti 7. Naudoti forEach.
 
document.querySelectorAll('#nr2 div').forEach(div =>{
    div.innerText = parseFloat(div.innerText) + 7;
})
// vietoj ParseInt butu buve galima + parasyt ir nedet skaisuteliu, suveiktu taip pat
// ParseInt rodo tik sveikus skaicius, parseFloat rodo ir po kablelio

// document.querySelectorAll('#nr2 div').forEach(div => div.innerText = parseFloat(div.innerText) + 7);
//  viena eilute taip parasymas atrodytu

const I = document.querySelector('#I');
const Ia = document.querySelector('#Ia');
I.innerHTML = '<h2 style = "color:skyblue;">Bebras</h2>'
Ia.innerHTML = '<h2 style = "color:skyblue;">Bebras</h2>'

const II = document.querySelector('#II');
const IIa = document.querySelector('#IIa');

const h2 = document.createElement('h2');
h2.style.color = 'orange';

const text = document.createTextNode('Bebriukas');
h2.appendChild(text);

II.appendChild(h2);
IIa.appendChild(h2);

// pirmam variante rodo abu bebrus, antru variantu rodo tik antraji, nes antru variantu dirbam su MediaElementAudioSourceNode, pirmuoju - su stringu.


const h2Clone = h2.cloneNode(true);
II.appendChild(h2)
IIa.appendChild(h2Clone);

// o dabar kai jau nukopijavom rodo abu

const m1 = [1, 2, [100, 200], 4, 5];
const m2 = m1;
const m3 = [...m1];
const m4 = structuredClone(m1);
m2[0]++;
m3[0]++;
m1[2][0]++;
m4[2][0]++
console.log(m1);




const mas1 = [1, 2, 3, 4, 5];

mas1.forEach((el, i) =>{
    console.log(i, el);
    
})


const mas2 = mas1.map(el =>{
    return el * 2;
})
console.log(mas2);
// keicia reiksme 




const mas3 = mas1.filter(el => {
    return el > 2;
});
 
console.log(mas3);
// keicia masyvo didi




const mas4 = mas1.map(el => el *2). filter(el => el > 5);
console.log(mas4);
// ir pakeite reissme ir masyvo dydi



mas1[5] = 'Bebras';
mas1.push('Jonas');
// su push visad ideda i masyyvo, nereikia skaiciuoti kelintas elementas
mas1.unshift('Ona', 'Petras')
// unshift ideda i prieki masyvo
mas1.pop();
// pop nutrina paskutini elementa
mas1.shift();
// shift nuima nuo priekio elementa
mas1WO3 = mas1.filter(el => el != 3);
console.log(mas1WO3);

