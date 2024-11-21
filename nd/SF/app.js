console.log('nu bandom');

// K2 Sąskaitos išrašymas

// Užduotis.

// Suformuoti PVM Sąskaitą Faktūrą iš duomenų gautų iš API https://in3.dev/inv/

// Paaiškinimai.

// Naudojant HTML ir CSS padaryti realiai atrodančią (naudojant minimalų spalvų kiekį) sąskaitą faktūrą, kurią būtų galim atspausdinti. Sąskaitoje turi matytis užrašas PVM SĄSKAITA FAKTŪRA, sąskaitos numeris, pardavėjo ir pirkėjo duomenys, sąskaitos data ir mokėjimo termino data. Išvardintos prekės, jų pavadinimai, jeigu yra nurodytos nuolaidos (fiksuotos nuolaidos dydis su minuso ženklu, procentinės- procentai ir kainos dalis pagal procentus su minuso ženklu), transportavimo išlaidos. Paskaičiuota tarpinė kaina, įvertinant kiekius, nuolaidas ir transportavimo išlaidas, paskaičiuotas pvm 21% ir galutinė kaina su PVM



const section = document.querySelector('.header')

fetch('https://in3.dev/inv/')
      .then(response => response.json())
      .then(json => {
        console.log(json)


        json.forEach(element => {
          const p = document.createElement('p');
          p.innerText = element.number;
          section.appendChild(p);
      })


      })
      