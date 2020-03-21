var Point3 = /** @class */ (function () {
    // Private Access modifiers
    // default Access modifiers is public.
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    Point3.prototype.draw = function () {
        console.log('X is :' + this.x + ' Y is:' + this.y);
    };
    Point3.prototype.setX = function (value) {
        if (value < 0)
            throw new Error("value Should not Lessthan 0.");
        this.x = value;
    };
    Point3.prototype.getX = function () {
        return this.x;
    };
    return Point3;
}());
var point3 = new Point3(1, 2);
console.log(point3.getX());
point3.setX(20);
point3.draw();
