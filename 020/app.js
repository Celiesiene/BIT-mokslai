console.log('kas naujai sunkaus siandien?');


const obj = {
    name: 'Mario',
    age: 32,
    job: 'plumber'
}
console.log(obj);



// koda raso aivaras

class PlayCharacter{
    constructor(name, age, job, lives){
        this.name = name;
        this.age = age;
        this.job = job;
        this.speed = 10;
        this.strength = this.age * 2;
        if (lives !== undefined) {
            this.lives = lives;
        }
    }
}

// koda raso gintare

const obj1 = new PlayCharacter('Mario', 32, 'plumber');
const obj2 = new PlayCharacter('Luigi', 30, 'plumber', 10);
console.log(obj1, obj2);
console.log(obj1.name); //gaunam tik varda
//zodis new paleidzia zodi constructor
console.log(obj1.age, obj2.age);


//koda raso aivaras

class TV {
 #channel = 1;

    constructor(year,price, owner) {
        this.brand = 'Samsung';
        this.model = 'UE55NU7172UXXH';
        this.year = year;
        this.price = price;
        this.owner = owner;
        this.turnOn = false;
    }
 
    ijungti(){
        this.turnOn = true;
        console.log(this.owner + ' Turning on the TV and watching channel ' + this.#channel);
        
    }
    isjungti() {
        this.turnOn = false;
        console.log(this.owner + ' turning off the TV');
    }
//setter
    perjungtiKanala(channel){
        if (!this.turnOn){
            return;
        }
        if(channel < 1 || channel > 100){
            console.log('Invalid channel');
            return;
            
        }
        this.#channel = channel
        console.log(this.owner + ' changing the chanel ' + this.#channel);
        
    }
    //getteris
    ziuretiInformacija(){
        return this.#channel;
        
    }
}
 

// koda raso gintare


const tv2 = new TV(1991, 600, 'Jonas');

console.log(tv1, tv2);
tv2.ijungti()

tv2.perjungtiKanala(10);

let info = tv2.ziuretiInformacija();
info++
tv2.perjungtiKanala(info)
// tv2.channel = 5; neveikia, nes channel padarem privaciu. su #. pasleptu.
tv2.isjungti();
tv2.ijungti()