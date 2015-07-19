class Person {
    name: String;

    constructor (name: String) {
        this.name = name;
    }

    dance () : void {
        console.log(this.name + " is dancing");
    }
}

class SuperPerson extends Person {
    dance () : void {
        super.dance();
        console.log("It's awesome!");
    }
}

var superDancer = new SuperPerson("DancerName");
superDancer.dance();