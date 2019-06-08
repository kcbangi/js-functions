/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

function numberToString(n) {
    var string = n.toString();
    return string;
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase(n) {
    var n = n + 1;
    return n;
}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

function decrease(n) {
    var n = n - 1;
    return n;
}

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the add
 */

function add(x, y) {
    var num = x + y;
    return num;
}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the sub
 */

function subtract(x, y) {
    var num =  x - y;
    return num;
}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the mul
 */

function multiply(x, y) {
    var num = x * y;
    return num;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the div
 */

function divide(x, y) {
    var num = x / y;
    return num;
}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 function square(x) {
    var num = x * x;
    return num
 }

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function calculate(operation, x, y) {
    if(operation === "add"){
        var add = x + y;
        // add(x, y);
		console.log(x + " + " + y + " = " + add);
		return add;
	}
	if(operation === "subtract"){
		var sub = x - y;
		console.log(x + " - " + y + " = " + sub);
		return sub;
	}
	if(operation === "multiply"){
		var mul = x * y;
		console.log(x + " * " + y + " = " + mul);
		return mul;
	}
	if(operation === "divide"){
		var div = x / y;
		console.log(x + " / " + y + " = " + div);
		return div;
	}
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

 function isGreaterThan(a, b) {
    var boo = a > b;
    return boo;
 }

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

 function isLessThan(a, b) {
     var boo = a < b;
     return boo;
 }

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual(a, b) {
    if(a === b) {
        return true;
    } else {
        return false;
    }
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum(x, y) {
    return Math.min(x, y);
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
function maximum(x, y) {
    return Math.max(x, y);
}

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

function isOdd(n) {
    if (n % 1 === 0) {
        return true;
    } else {
        return false;
    }
}

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function letterGrade(score, total) {
    var score = (score / total) * 100;
    if(score >= 90) {
        return 'A';
    }else if(score >= 80) {
        return 'B';
    }else if(score >= 70) {
        return 'C';
    }else if(score >= 60) {
        return 'D';
    }else {
        return 'F'
    }
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

// function incrementReviews(restaurant) {
//     var res = restaurant.reviews;
//     if(!res) {
//         restaurant.reviews = 1
//     } else {
//         restaurant.review = increase(restaurant.reviews);
//     }
//     return restaurant;
// }

function incrementReviews(restaurant) {
    if (restaurant.hasOwnProperty('reviews')) {
        restaurant.reviews = restaurant.reviews + 1;
    } else {
        restaurant.reviews = 1;
    }
    return restaurant;
  }
/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function combine(str1, str2) {
    return str1 + ' ' + str2;
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

