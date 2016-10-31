// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle
function RightTriangle (side1, side2, base) {
    this.area = function () {
        return side1 * base / 2;
    }
    this.perimeter = function () {
        return side1 + side2 + base;
    }
}

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.
var triangle1 = new RightTriangle (11, 12, 13);
var triangle2 = new RightTriangle (14, 15, 16);

console.log("triangle1's area:", triangle1.area());
console.log("triangle1's perimeter:", triangle1.perimeter());
console.log("triangle2's area:", triangle2.area());
console.log("triangle2's perimeter:", triangle2.perimeter());
