console.log('---------');

let a = true;

console.log(a, '->', typeof a);

a = !a;
// sauktukas reiskia ne. du sauktukai du kartus ne padarys.
console.log(a, '->', typeof a);

b = 5;
c = 'Labas';

d = 0;
e = '';

console.log(!!b);
console.log(!!c);
console.log(!!d);
console.log(!!e);

if (40 - 20 - 21){
    console.log('nera nulis'); 
}else{
    console.log('yra nulis');
} 

console.log('true || true:', true || true);
console.log('true || false:', true || false);
console.log('false || true:', false || true);
console.log('false || false:', false || false);
// jeigu arba tai nors vienas ture ir abu bus true

console.log('true && true:', true && true);
console.log('true && false:', true && false);
console.log('false && true:', false && true);
console.log('false && false:', false && false);
// jeigu and nors vienas false tada abu bus false


// tarp 3 ir 7
const skaicius = 1;

if(skaicius >= 3 && skaicius <= 7) {
    console.log('true');
} else {
    console.log('false');
}

//  5 arba 7
 
if (skaicius == 5 || skaicius == 7) {
    console.log('true');
} else {
    console.log('false');
}

let ats;
ats = 88;

console.log(ats|| 'nera arsakymo');

