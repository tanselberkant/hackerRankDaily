// Objective
// In this challenge, we practice implementing inheritance and use JavaScript prototypes to add a new method to an existing prototype. Check out the attached Classes tutorial to refresh what we've learned about these topics.

// Task
// We provide the implementation for a Rectangle class in the editor. Perform the following tasks:

// 1. Add an area method to Rectangle's prototype.
// 2. Create a Square class that satisfies the following:
// a) It is a subclass of Rectangle.
// b) It contains a constructor and no other methods.
// c) It can use the Rectangle class' area method to print the area of a Square object.
// Locked code in the editor tests the class and method implementations and prints the area values to STDOUT.

class Rectangle {
  constructor(h, w) {
    this.h = h;
    this.w = w;
  }
}
// Write code that adds an 'area' method to the Rectangle class prototype

Rectangle.prototype.area = function () {
  return (this.w * this.h);
};

// Create a Square class that inherits from Rectangle and implement its claass constructor

class Square extends Rectangle {
  constructor(s) {
    super(s);
    this.h = s;
    this.w = s;
  }
}
