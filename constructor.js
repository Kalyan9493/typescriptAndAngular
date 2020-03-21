var Point1 = /** @class */ (function () {
    function Point1(x, y) {
        this.x = x;
        this.y = y;
    }
    Point1.prototype.draw = function () {
        console.log('X is :' + this.x + 'Y is:' + this.y);
    };
    return Point1;
}());
var point1 = new Point1(1, 2);
point1.draw();
