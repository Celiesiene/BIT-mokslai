console.log('cikliukai');

let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    
}
console.log('-----------------');

// Lyginių skaičių radimas sąraše
// Sukurkite sąrašą skaičių. Naudodami for ciklą ir if sąlygą, išrinkite ir išspausdinkite tik lyginius skaičius iš sąrašo.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
 
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0){
        console.log(numbers[i]);
    }
}
console.log('-------------');
 
// Žodžių, ilgesnių nei 5 raidės, spausdinimas
// Sukurkite sąrašą žodžių. Išspausdinkite tik tuos žodžius, kurių ilgis yra didesnis nei 5 raidės.
let words = ["apple", "banana", "kiwi", "watermelon", "pear"];
 
for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5){
        console.log(words[i]);
    }
}

console.log('-------------');

// Skaičių dalinimas iš 3 be liekanos
// Sukurkite sąrašą skaičių nuo 1 iki 20. Išrinkite ir išspausdinkite tik tuos skaičius, kurie dalijasi iš 3 be liekanos.
let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
 
for (let i = 0; i < numbersArr.length; i++) {
    if(numbersArr[i] % 3 === 0){
        console.log(numbersArr[i]);
    }
}

console.log('-------------');
// Neigiamų skaičių suradimas sąraše
// Sukurkite sąrašą teigiamų ir neigiamų skaičių. Išspausdinkite tik neigiamus skaičius.
let numbersNegative = [4, -3, 2, -1, 0, -5, 8, -9];
 
 for (let i = 0; i < numbersNegative.length; i++) {
    if(numbersNegative[i] < 0){
        console.log(numbersNegative[i]);
        
    }
    
 }
 console.log('-------------');
// Teksto paieška sąraše
// Sukurkite sąrašą sakinių. Išspausdinkite tik tuos sakinius, kurie turi žodį „JavaScript“.
let sentences = ["I love programming", "JavaScript is awesome", "Coding is fun", "Learn JavaScript"];

for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].includes("JavaScript")) {
        console.log(sentences[i]);
    }
}
 
console.log('-------------');
// Skaičių kvadratų suradimas
// Sukurkite sąrašą skaičių. Išspausdinkite tik tuos skaičius, kurių kvadratas yra didesnis nei 50.
let bigNumbers = [2, 5, 7, 8, 10, 12];

 
for (let i = 0; i < bigNumbers.length; i++) {
    const kvadratas = bigNumbers[i] **2;
   if (kvadratas > 50){
    console.log(kvadratas);
    
   }
    
}
 
console.log('-------------');
// Didžiausio skaičiaus paieška sąraše
// Sukurkite sąrašą skaičių ir raskite didžiausią skaičių. Tikrinkite kiekvieną reikšmę cikle.
let numbersBiggest = [3, 45, 23, 67, 12, 90, 34];
let didziausias = numbersBiggest[0]
 for (let i = 0; i < numbersBiggest.length; i++) {
    if(numbersBiggest[i] > didziausias){
        didziausias = numbersBiggest[i];
    }
}
    console.log(didziausias);
    
 
console.log('-------------');
// Raidžių skaičiavimas žodyje
// Sukurkite žodį ir suskaičiuokite, kiek kartų žodyje pasikartoja raidė „a“.
let word = "banana";
let raideA = 0;
for (let raide of word){
    if (raide === 'a'){
        raideA++
    }
}
 console.log('Raide a pasikartoja', raideA, 'kartus');
 
 console.log('-------------');
 
// Amžių filtravimas sąraše
// Sukurkite sąrašą žmonių amžių. Išspausdinkite tik tuos, kurie yra vyresni nei 18.
let ages = [12, 17, 22, 19, 15, 30, 18];
 
ages.forEach(skaicius =>{
    if(skaicius > 18){
        console.log(skaicius)
    }
})
console.log('-------------');
// Skaičių dalybos liekanos tikrinimas
// Sukurkite sąrašą skaičių. Išspausdinkite tik tuos skaičius, kurie, dalijant iš 2, turi liekaną.
let numbersSuLiekana = [5, 8, 13, 22, 31, 40];

for (let i = 0; i < numbersSuLiekana.length; i++) {
    if(numbersSuLiekana[i] % 2 !== 0){
        console.log(numbersSuLiekana[i]);
    }
}
