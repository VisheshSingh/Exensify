class Person {
    constructor(name='Anonymous', age = 0) {
        this.name = name;
        this.age= age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old`;
    }
}

class Student extends Person {
    constructor(name, age, major ) {
        super(name, age);
        this.major = major;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greet = super.getGreeting();
        if(this.homeLocation){
            greet += ` I am visiting from ${this.homeLocation}`;
        }
        return greet;
    }
}
const me = new Traveler();
console.log(me.getGreeting());

const me1 = new Traveler('Vishesh', 24, 'New york');
console.log(me1.getGreeting());