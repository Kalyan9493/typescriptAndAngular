var Add = /** @class */ (function () {
    function Add() {
    }
    Add.prototype.add = function () {
        return this.a + this.b;
    };
    return Add;
}());
var add = new Add();
add.a = 3;
add.b = 2;
console.log(add.add());
