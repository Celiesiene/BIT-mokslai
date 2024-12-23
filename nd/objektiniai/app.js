console.log('drakonas');


// 1. Sukurti klasę Kibiras1. Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class kibiras1 {

    constructor() {
        this.akmenukiekis = 0;

    }
    prideti1Akmeni() {
        this.akmenukiekis++;
        console.log('I kibira idedu akmeni ' + this.akmenukiekis);

    }
    pridetiDaugAkmenu(kiekis) {
        if (kiekis > 0) {
            this.akmenukiekis += kiekis;
            console.log('I kibira idedu daug akmenu ' + this.akmenukiekis);
        } else {
            console.log('Sausų akmenų šlapioje jūroje nėra');

        }
    }
    kiekPririnktaAkmenu() {
        console.log('I kibirą pridedu: ' + this.akmenukiekis +' akmenų.');

    }
}
const akmenys = new kibiras1();

akmenys.prideti1Akmeni();
akmenys.pridetiDaugAkmenu(10);
akmenys.kiekPririnktaAkmenu();
akmenys.pridetiDaugAkmenu(3);
akmenys.kiekPririnktaAkmenu();

// 2. Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.
console.log('..............2 UŽDUOTIS...............');

class pinigine {
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }
    ideti(kiekis) {

        if (kiekis <= 2) {
            this.metaliniaiPinigai += kiekis;
        } else {
            (kiekis > 2)
            this.popieriniaiPinigai += kiekis;
        }
    }
    skaiciuoti() {
        console.log(`Metalinių pinigų suma: ${this.metaliniaiPinigai}, popierinių pinigų suma: ${this.popieriniaiPinigai}`);


    }
}
const pinigai = new pinigine();
pinigai.ideti(2);
pinigai.ideti(5);
pinigai.skaiciuoti();
pinigai.ideti(1);
pinigai.skaiciuoti()
pinigai.ideti(10);
pinigai.skaiciuoti();




// 3. Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.


class troleibusas {
    constructor() {
        this.keleiviuSkaicius = 0;
    }

    ilipa(keleiviuSkaicius) {
        if (keleiviuSkaicius >= 0) {
            this.keleiviuSkaicius += keleiviuSkaicius
        } else {
            console.log(' minusinių žmonių nebūna');

        }
    }
    islipa(keleiviuSkaicius) {
        if (keleiviuSkaicius < this.keleiviuSkaicius) {
            if (keleiviuSkaicius >= 0) {
                this.keleiviuSkaicius -= keleiviuSkaicius;
            } else {
                console.log('Nerašinėk nesamonių');

            }
        } else{
            console.log('Išlipti daugiau negu yra žmonių negali');
            
        }
    }
vaziuoja(){
    console.log(`Autobusu važiuoja ${this.keleiviuSkaicius} žmonių`);

}
}

const keleiviai = new troleibusas();
keleiviai.ilipa(10);
keleiviai.islipa(5);
keleiviai.vaziuoja();
keleiviai.ilipa(1)
keleiviai.vaziuoja();
keleiviai.islipa(7)
keleiviai.ilipa(-2)


// 4. (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

// class Troleibusas {

// static visikeleiviai = 0

// static bendrasKeleiviuSkaicius(keleiviuSkaicius){
//     Troleibusas.visikeleiviai += keleiviuSkaicius
// }

//     constructor() {
//         this.keleiviuSkaicius = 0;
//     }
//     keleiviuSkaiciusVisuoseTroleibusuose(){
//         console.log(`Visuose troleibusuose vaziuoja ${trol}`);
        

//     }

//     ilipa(keleiviuSkaicius) {
//         if (keleiviuSkaicius >= 0) {
//             this.keleiviuSkaicius += keleiviuSkaicius
//         } else {
//             console.log(' minusinių žmonių nebūna');

//         }
//     }
//     islipa(keleiviuSkaicius) {
//         if (keleiviuSkaicius < this.keleiviuSkaicius) {
//             if (keleiviuSkaicius >= 0) {
//                 this.keleiviuSkaicius -= keleiviuSkaicius;
//             } else {
//                 console.log('Nerašinėk nesamonių');

//             }
//         } else{
//             console.log('Išlipti daugiau negu yra žmonių negali');
            
//         }
//     }
// vaziuoja(){
//     console.log(`Autobusu važiuoja ${this.keleiviuSkaicius} žmonių`);

// }
// }

// const troleibusas1 = new Troleibusas();
// const troleibusas2 = new Troleibusas();
// const troleibusas3 = new Troleibusas()


class Troleibusas {

    // Statinė savybė bendram keleivių skaičiui saugoti
    static visiKeleiviai = 0;

    // Statinis metodas keleivių skaičiaus keitimui
    static bendrasKeleiviuSkaicius(keleiviuPokytis) {
        Troleibusas.visiKeleiviai += keleiviuPokytis;
    }
      // Statinis metodas visiems keleiviams parodyti
      static keleiviuSkaiciusVisuoseTroleibusuose() {
        return Troleibusas.visiKeleiviai;
    }

    constructor() {
        this.keleiviuSkaicius = 0; // Keleivių skaičius šiame troleibuse
    }

    

    // Metodas keleiviams įlipti
    ilipa(keleiviuSkaicius) {
        if (keleiviuSkaicius > 0) {
            this.keleiviuSkaicius += keleiviuSkaicius;
            Troleibusas.bendrasKeleiviuSkaicius(keleiviuSkaicius);
        }
    }

    // Metodas keleiviams išlipti
    islipa(keleiviuSkaicius) {
        if (keleiviuSkaicius > 0 && keleiviuSkaicius <= this.keleiviuSkaicius) {
            this.keleiviuSkaicius -= keleiviuSkaicius;
            Troleibusas.bendrasKeleiviuSkaicius(-keleiviuSkaicius);
        }
    }

  
}

// Pavyzdys, kaip naudotis
const troleibusas1 = new Troleibusas();
const troleibusas2 = new Troleibusas();

troleibusas1.ilipa(10); // Į pirmą troleibusą įlipo 10 keleivių
troleibusas2.ilipa(15); // Į antrą troleibusą įlipo 15 keleivių

console.log(Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose()); // 25

troleibusas1.islipa(5); // Iš pirmo troleibuso išlipo 5 keleiviai
console.log(Troleibusas.keleiviuSkaiciusVisuoseTroleibusuose()); 



//5.  (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.




//6. Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.





// 7. (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, naudokite statinę savybę visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).


class kibiras11 {

 static visiAkmenys = 0;

   static akmenuSkaiciusVisuoseKibiruose() {
     return kibiras11.visiAkmenys;
 }


    constructor() {
        this.akmenukiekis = 0;

    }
    prideti1Akmeni() {
        this.akmenukiekis++;
        console.log('I kibira idedu akmeni ' + this.akmenukiekis);

    }
    pridetiDaugAkmenu(kiekis) {
        if (kiekis > 0) {
            this.akmenukiekis += kiekis;
            console.log('I kibira idedu daug akmenu ' + this.akmenukiekis);
        } else {
            console.log('Sausų akmenų šlapioje jūroje nėra');

        }
    }
    kiekPririnktaAkmenu() {
        console.log('I kibirą pridedu: ' + this.akmenukiekis +' akmenų.');

    }
}

const vienasKibiras = new kibiras11();
const kitasKibiras = new kibiras11()

vienasKibiras.prideti1Akmeni();
vienasKibiras.pridetiDaugAkmenu(10);
vienasKibiras.kiekPririnktaAkmenu();
kitasKibiras.pridetiDaugAkmenu(3);
console.log(kibiras11.akmenuSkaiciusVisuoseKibiruose());
 








// 8. Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.

class Stikline {
    constructor(turis) {
        this.turis = turis; // Stiklinės tūris
        this.kiekis = 0;    // Pradinis kiekis stiklinėje
    }

    // Metodas įpilti kiekį į stiklinę
    ipilti(kiekis) {
        if (kiekis > 0) {
            this.kiekis += kiekis;
            if (this.kiekis > this.turis) {
                this.kiekis = this.turis; // Perteklius netelpa
            }
        }
    }

    // Metodas išpilti visą kiekį
    ispilti() {
        const ispilamasKiekis = this.kiekis;
        this.kiekis = 0; // Ištuštinama stiklinė
        return ispilamasKiekis; // Grąžinamas išpiltas kiekis
    }

    // Metodas parodyti, kiek stiklinėje yra skysčio
    stiklinejeYra() {
        console.log(`Stiklinėje yra ${this.kiekis} ml skysčio.`);
    }
}

// Sukuriame tris stiklines su skirtingais tūriais
const stikline1 = new Stikline(200); // Didžiausia stiklinė
const stikline2 = new Stikline(150); // Vidutinė stiklinė
const stikline3 = new Stikline(100); // Mažiausia stiklinė

// Veiksmai pagal užduotį
stikline1.ipilti(200); // Pripildome didžiausią stiklinę
stikline1.stiklinejeYra(); // Patikriname, kiek yra skysčio

const ispiltaIS1 = stikline1.ispilti(); // Išpilame visą kiekį iš didžiausios
stikline2.ipilti(ispiltaIS1); // Supilame į vidutinę stiklinę
stikline2.stiklinejeYra(); // Patikriname, kiek vidutinėje stiklinėje

const ispiltaIS2 = stikline2.ispilti(); // Išpilame visą kiekį iš vidutinės
stikline3.ipilti(ispiltaIS2); // Supilame į mažiausią stiklinę
stikline3.stiklinejeYra(); // Patikriname, kiek mažiausioje stiklinėje






//9. Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys, kuri turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).









