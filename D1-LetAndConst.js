// Task
// 1 - Declare a constant variable. PI and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
// 2 - Read a number, , denoting the radius of a circle from stdin.
// 3 - Read a number, , denoting the radius of a circle from stdin.
// 4 - Print area as the first line of output and print  as the second line of output

function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  const PI = Math.PI;
  let r = readline();
  let area = PI * r * r;
  let perimeter = 2 * PI * r;

  // Print the area of the circle:
  console.log(area);
  // Print the perimeter of the circle:
  console.log(perimeter);
}
