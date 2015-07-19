var TestClass = (function () {
    function TestClass() {
        this.name = "Default Name";
        this.saying = "I'm " + this.name;
    }
    TestClass.prototype.hello = function (name) {
        console.log("Hello, " + name);
    };
    TestClass.staticProperty = 1;
    return TestClass;
})();
var test = new TestClass();
console.log(test.name);
console.log(test.saying);
test.hello("Jack");
console.log(TestClass.staticProperty);
//# sourceMappingURL=classes.js.map