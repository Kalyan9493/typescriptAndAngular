var Point2 = /** @class */ (function () {
    // Private Access modifiers
    // default Access modifiers is public.
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2.prototype.draw = function () {
        console.log('X is :' + this.x + ' Y is:' + this.y);
    };
    return Point2;
}());
var point2 = new Point2(1, 2);
point2.draw();
