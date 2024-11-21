console.log('wtf');


fetch('https://in3.dev/inv/')
    .then(response => response.json())
    .then(json => {
        console.log(json)
    })

class Kibiras1 {

    constructor() {
        this.akmenuKiekis = 0
    }
    pridetiAkmeni() {
        this.akmenuKiekis++
        console.log(this.akmenuKiekis);

    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        console.log(this.akmenuKiekis);


    }
    kiekPririnktaAkmenu() {
        console.log(this.akmenuKiekis);

    }
}
const kibiras1 = new Kibiras1();
kibiras1.pridetiAkmeni();
kibiras1.pridetiDaugAkmenu(5);
kibiras1.pridetiAkmeni();
kibiras1.kiekPririnktaAkmenu();


class TV {
    static programos = ['TV3', 'LRT', 'TV6', 'TV1', 'Animal planet']
    static pridetiPrograma(programa){
        this.programos.push(programa); 
    }
    static zinute;
    static rasytiZinute(zinute){
        this.zinute = zinute;
    }

    constructor(savininkas) {
        this.savininkas = savininkas;
        this.kanalas = 1;
        this.ijungta = false;
        this.programos = ['TV3', 'LRT', 'TV6', 'TV1', 'Animal planet']
    }

    // zaistiZaidima(){
    //     console.log('žaidžia žaidimą');
        
    // }

    rasytiZinute(zinute){
        this.constructor.rasytiZinute(zinute)
    }
    skaitytiZinute(){
        console.log(this.constructor.zinute);
        
    }

    pakeistiKanala(kanalas) {
        if (this.ijungta) {
            this.kanalas = kanalas;
        }
    }

    ijungti() {
        this.ijungta = true;
    }

    isjungti() {
        this.ijungta = false;
    }

    info() {
        console.log('Savininkas: ' + this.savininkas + ', kanalas: ' + this.constructor.programos[this.kanalas - 1]);
    }
}

class TVsony extends TV{
    constructor(savininkas){
        super(savininkas)
        this.model = 'Sony';
    }
    zaistiZaidima(){
        console.log('Zaidzia zaidima');
        
    }
}
class TVsamsung extends TV{
    constructor(savininkas){
        super(savininkas)
        this.model = 'Samsung';
    }
    
}


//this.constructor rodo klase kurioje yra constructor. siuo atveju tv.

const tv1 = new TVsamsung('Petras');
const tv2 = new TVsony('Maryte');
const tv3 = new TVsony('Bebras');


const naujosProgramos = ['TV3', 'LRT', 'TV6', 'TV1', 'Discovery']

TV.programos = naujosProgramos;
TV.pridetiPrograma('Child TV')

tv1.ijungti();
tv1.pakeistiKanala(6);
tv1.info();
tv1.rasytiZinute('Labas rytas')

tv2.ijungti();
tv2.pakeistiKanala(5);
tv2.info();
tv2.zaistiZaidima()

tv3.ijungti();
tv3.pakeistiKanala(4);
tv3.info();
tv3.skaitytiZinute()

const tv4 = new TVsony('Jonas');

// tv4.programos = naujosProgramos;

tv4.ijungti();
tv4.pakeistiKanala(5);
tv4.info();
tv4.skaitytiZinute()