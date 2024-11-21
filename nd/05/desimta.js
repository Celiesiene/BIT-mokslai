console.log('vistiek neiseis');



//10 Uždavinį atlikite atskirame html faile. Visame ekrane atsitiktine tvarka “išmėtykite“ iš masyvo C nuskaitytus gyvūnus. Kad būtų daugiau gyvūnų, tą patį masyvą nuskaitykite 10 kartų. Gyvūnų pavadinimų raidžių dydis- atsitiktinis nuo 10px iki 100px. Gyvūnų pavadinimų raidžių spalva atsitiktinė. Pavadinimai turi tolygiai (pagal funkciją rand()) dengti visą ekraną (funkcijos duotos 02. DOM ir Cycles (one & four edition)).#fun

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

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}


// let gyvunai= "";

// for (let zodziai of C) {
//     gyvunai += zodziai;
//     for (let i = 0; i < zodziai; i++) {
//     const raidziuDydis = rand(10, 100);
//     const raidziuSpalva = randomColor();
//     const top = rand(0, window.innerHeight - raidziuDydis);
//     const left = rand(0, window.innerWidth - raidziuDydis);

//     gyvunai += `<p style="
//     position: absolute;
//     font-size: ${raidziuDydis}px;
//     color: ${raidziuSpalva};
//     opacity: 0.5;
//     top: ${top}px;
//     left: ${left}px;
    
//     "></p>`
   
// }};

for (let i = 0; i < 5; i++) {
C.forEach(gyvunai => {
    const p = document.createElement('p');
    const raidziuDydis = rand(10, 100);
     const raidziuSpalva = randomColor();
    const top = rand(0, window.innerHeight - raidziuDydis);
    const left = rand(0, window.innerWidth - raidziuDydis);
    
    p.style.color = raidziuSpalva;
    p.style.fontSize = raidziuDydis + 'px';
    p.style.position = 'absolute';
    p.style.top = top + 'px';
    p.style.left = left + 'px';

    p.innerText = gyvunai;
    document.body.appendChild(p);
})
};


