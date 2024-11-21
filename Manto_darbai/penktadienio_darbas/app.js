console.log('turek beda');
// const div = document.querySelector(".calculatedInfo");
// const calculate = document.querySelector(".calculate");
// const height = document.querySelector(".height");
// const weight = document.querySelector(".weight");
// const reset = document.querySelector(".reset")

const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const calculate = document.querySelector(".calculate");
let count = document.querySelector(".calculatedInfo");
const reset = document.querySelector(".reset")


calculate.addEventListener('click', _ =>{
const height1 = parseFloat(height.value);
const weight1 = parseFloat(weight.value);
const bmi = weight1 / ((height1 * height1) / 10000);
// if (!weight1.textContent || !height1.textContent){
//     count.textContent = 'Please enter valid inputs!';} 
if (bmi < 18.5){
    count.textContent = `Underweight: ${bmi.toFixed(2)}`;
} else if (bmi >= 18.5 && bmi < 24.9){
    count.textContent = `Normal: ${bmi.toFixed(2)}`;
} else if ( bmi >= 25 && bmi < 29.9){
    count.textContent = `Overweight: ${bmi.toFixed(2)}`;
} else if (bmi >= 30){
    count.textContent = `Obese: ${bmi.toFixed(2)}`;
} 
if (count.textContent.includes('Overweight')){
                count.style.color = 'red';
            } else if (count.textContent.includes('Underweight')){
                count.style.color = 'green';
            } else if ('Normal weight'){
                count.style.color = 'yellow';
            } else {
                count.style.color = 'white';
            }
});
 reset.addEventListener('click', _ => {
height.value = '';
weight.value = '';
count.textContent ='';
 });







// calculate.addEventListener('click', _ => {
//     // Gauti įvestas reikšmes
//     let heightValue = parseFloat(height.value);
//     let weightValue = parseFloat(weight.value);

//     // Tikrinti, ar įvesti skaičiai yra tinkami
//     if (isNaN(heightValue) || isNaN(weightValue) || heightValue <= 0 || weightValue <= 0) {
//         // Jei reikšmės netinkamos, parodome klaidos pranešimą
//         const span = document.createElement('span');
//         span.textContent = 'Please enter valid inputs!';
//         span.style.color = 'darkviolet';
//         // Pašalinti ankstesnius pranešimus
//         div.innerHTML = '';
//         div.appendChild(span);
//     } else {
//         // Apskaičiuoti BMI
//         let bmi = weightValue / ((heightValue / 100) ** 2);
//         let answer = '';
//         if (bmi < 18.5){
//             answer= 'Underweight';
//         } else if (bmi >= 18.5 && bmi < 25){
//             answer = 'Normal weight';
//         } else if (bmi >= 25 && bmi < 30){
//             answer = 'Overweight'
//         } else {
//             answer = 'Obese'
//         };
//         // Parodyti BMI rezultatą
//         const span = document.createElement('span');
//         span.textContent = `Your BMI is: ${bmi.toFixed(2)}, ${answer}`;
//         // Pašalinti ankstesnius pranešimus
//         div.innerHTML = '';
//         div.appendChild(span);
//         span.style.color = 'darkorchid';
//     // span.style.alignItems = 'right'; neveikia
       
//         if (span.textContent.includes('Overweight')){
//             span.style.color = 'red';
//         } else if (span.textContent.includes('Underweight')){
//             span.style.color = 'green';
//         } else if ('Normal weight'){
//             span.style.color = 'yellow';
//         } else {
//             span.style.color = 'white';
//         }
//     }
//    reset.style.display = 'block';
// });

// aisku kad niekas neveikia
// calculate.addEventListener('click', _ => {
//     if (reset = 'cklicked'){
//         weightValue.textContent && heightValue.textContent === 0; 
//     }

// }

// )

