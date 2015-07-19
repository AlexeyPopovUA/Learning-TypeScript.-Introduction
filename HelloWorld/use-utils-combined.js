var Utils;
(function (Utils) {
    var Utility = (function () {
        function Utility() {
        }
        Utility.prototype.timesTwo = function (value) {
            return 2 * value;
        };
        return Utility;
    })();
    Utils.Utility = Utility;
})(Utils || (Utils = {}));
///<reference path="utils/utils.ts"/>
var useful = new Utils.Utility();
console.log(useful.timesTwo(10));
