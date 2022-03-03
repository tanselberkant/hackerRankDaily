// Objective
// In this challenge, we practice using JavaScript Template Literals. Check the attached tutorial for more details.

// Task
// The code in the editor has a tagged template literal that passes the area and perimeter of a rectangle to a tag function named sides. Recall that the first argument of a tag function is an array of string literals from the template, and the subsequent values are the template's respective expression values.
// Complete the function in the editor so that it does the following:
// 1- Finds the initial values of  and  by plugging the area and perimeter values into the formula:
// 2- Creates an array consisting of s1 and s2 and sorts it in ascending order.
// 3- Returns the sorted array.

function sides(literals, ...expression) {
    let A = expression[0];
    let P = expression[1];
    let result = []

    let s1 = (P+Math.sqrt(Math.pow(P,2)-16*A))/4;
    let s2 = (P-Math.sqrt(Math.pow(P,2)-16*A))/4;

    result.push(s1);
    result.push(s2);

    return result.sort();
    
}
