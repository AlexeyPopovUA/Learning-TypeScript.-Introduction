var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is dancing");
    };
    return Person;
})();
var SuperPerson = (function (_super) {
    __extends(SuperPerson, _super);
    function SuperPerson() {
        _super.apply(this, arguments);
    }
    SuperPerson.prototype.dance = function () {
        _super.prototype.dance.call(this);
        console.log("It's awesome!");
    };
    return SuperPerson;
})(Person);
var superDancer = new SuperPerson("DancerName");
superDancer.dance();
//# sourceMappingURL=inheritance.js.map