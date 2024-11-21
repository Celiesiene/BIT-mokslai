console.log('vis dar nieko nesuprantu');

// 1. Sukurti funkcija kuri priima du kintamuosius ir grazina didesni.

// function didesnis (a, b);
// let a = 5;
// let b = 7;
// if (a > b && a != b){
//     return a
// } else {
// return b
// }

const fun1 = (a, b) => {
    const rez = (a > b) ? a:b;  //ternary operator
    return rez;
}

const funiif = (a, b) => {
    if (a > b) {
        return a;
    } else{
        return b;
    }
}
console.log(fun1(1,18));
console.log(funiif(25, 18));

// 2. sukurti funkcija kuri priima du stringus ir grazina trumpesni.

// const fun2 = (c, d) => {
//     if c.lenght > d.lenght {
//         return c;
//     } else {
//         return d;
//     }
// }
// console.log('mama', 'tevelis');

const fun2 = (a, b) => {
if (a.length < b.length) {
    return a;
} else return b;
}
console.log(fun2('labas', 'pats tu toks geras'));

// / 3. Sukurti funkciją, kuri priima 2 kintamuosius. Jeigu didesnis pirmas grąina 1, jeigu didesnis antras grąžina -1, jeigu lygūs grąžina 0.

const fun3 = (a, b) => {
    if (a > b ) {
        return 1;
    } else if (b > a){
        return -1;
    } else{
        return 0;
    }
}
console.log(fun3(5, 7));

// const funTer3 = (a, b) => {
//     return (a > b && a != b) ? 1 : (a < b && a != b) ? -1 : 0;
// } mandras Vaido kodas

function funSum1 (a, b){
    return a + b;
}
const funSum2 = function (a, b) {
    return a + b;
}
const funSum3 = (a, b) => {
    a + b;
}
const funSum4 = (a, b) => a + b;

console.log(funSum4(2,3));

function funBig1(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
 
const funBig2 = function (a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
 
const funBig3 = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
}
 
const funBig4 = (a, b) => a > b ? a : b;


console.log(funBig2(2, 3));







function funStrLen1(a) {
    return a.length;
}
 
const funStrLen2 = function (a) {
    return a.length;
}
 
const funStrLen3 = (a) => {
    return a.length;
}
 
const funStrLen4 = a => a.length;
 






function FunReturnLabas1() {
    return 'labas';
}
 
const FunReturnLabas2 = function () {
    return 'labas';
}
 
const FunReturnLabas3 = () => {
    return 'labas';
}
 
const FunReturnLabas4 = _ => 'labas';
// melynas bruksnelis tas pats kas du geltoni skliausteliai. kai nera kintamojo, vietoj tusciu skliausteliu galima deti bruksneli apatini.

console.log(FunReturnLabas4());




const fun3sum = (a, b, c = 10) =>{
    return a + b + c;
}
console.log(fun3sum(1, 2,));
// pirmu atveju suskaiciavo c lygu 10 todel atsakyme turim 13. jei nebutumem irase c butu neskaiciave ir butu nan
console.log(fun3sum(1, 2, 3));






// const funSumMany1 = (...rest) =
const funSumMany1 = (a, b, ...rest) => {
    console.log(rest);
    let sumAll = 0;
    for (let i = 0; i< rest.length; i++){
        sumAll += rest[i];
    }
    return a + b + sumAll;
    // arba tada jau galima rasyti return sumAll irgi viska rodys
}
 
console.log(funSumMany1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11));
 





const animals = ['cat', 'dog', 'elephant', 'lion', 'tiger'];
const animals2 = [...animals];
const animals3 = animals;

animals[0] = 'bear';
console.log(animals2, animals3);

