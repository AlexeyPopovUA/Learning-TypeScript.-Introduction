class TestClass {
    name: String = "Default Name";
    saying: String;
    static staticProperty: Number = 1;

    constructor () {
        this.saying = "I'm " + this.name;
    }

    hello (name: String) : void {
        console.log("Hello, " + name);
    }
}

var test = new TestClass();
console.log(test.name);
console.log(test.saying);
test.hello("Jack");
console.log(TestClass.staticProperty);