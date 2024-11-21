console.log('ateivių kalba');

console.log('function.js')


function getRandom(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function suma(a, b){
    a = parseInt(a);
    // a parseint paverte stringa 10 i skaiciu todel konsoleje rodo suma, 30. 
    console.log('Suma:', a + b);
    const c = a - b;
    return c;
}
const skirtumas = function (a, b){
    console.log('Skirtumas:', a - b);
    
}

const sandauga = (a, b) => {
    console.log('Sandauga:', a * b);
    
}

// this


console.log('function.js 2');


// suma(2, 3);
// suma(5, 7);
// suma('10', 20);

const manoSuma = suma;
manoSuma(10,20);
console.log('manoSuma:', typeof manoSuma);

skirtumas (20, 5);
sandauga (10, 20)