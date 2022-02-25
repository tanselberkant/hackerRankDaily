// Objective
// In this challenge, we practice using throw and catch statements to work with custom error messages.

// Task

// Complete the isPositive function below. It has one integer parameter "a",
// If the value of a is positive, it must return the string YES.
// Otherwise, it must throw an Error according to the following rules:
// * If a is 0, throw an Error with message - Zero Error.
// * If a is negative, throw an Error with message - Negative Error

function isPositive(a) {
  if (a > 0) {
    return 'YES';
  } else {
    throw a === 0 ? new Error('Zero Error') : new Error('Negative Error');
  }
}

