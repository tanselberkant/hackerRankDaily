// Objective
// In this challenge, we practice creating objects. Check out the attached tutorial for more details.

// Task

// Complete the function in the editor.
// It has two parameters: a and b.
// It must return an object modeling a rectangle that has the following properties:

function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = (a + b) * 2;
  this.area = a * b;
}


