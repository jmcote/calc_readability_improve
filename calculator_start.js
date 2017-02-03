
var current_input = "0";
var memory = "0";
var operator = 0;
var other_memory = current_input;
var start_mode = "";
var divideByZero = false;
var tooManyDigits = false;

/**
 * Helper function for displaying the current input
 */
function displayCurrentInput() {
    document.getElementById('screen').value = current_input;
}

/**
 * Adds a digit to the current input
 * @param {number} dig The digit being added
 */
function addDigit(dig) {
    tooManyDigits = false;
    if (current_input.length + 1 > 18) {
        alert("No more than 18 characters");
        tooManyDigits = true;
    }
    if ((eval(current_input) == 0) && (current_input.indexOf(".") == -1)) {
        current_input = dig;
    }
    else {
        current_input = current_input + dig;
    }
    displayCurrentInput();
}

/**
 * Adds a decimal to the current input
 */
function addDecimal() {
    if (current_input.length == 0) {
        //no leading ".", use "0."
        current_input = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (current_input.indexOf(".") == -1) {
            current_input = current_input + ".";
        }
    }
    displayCurrentInput();
}

/**
 * Clears everything.
 */
function allClear() {
    current_input = "";
    console.log("Current input cleared");
    operator = 0; //clear operator
    console.log("Operator cleared");
    memory = "0"; //clear memory
    console.log("Memory cleared");
    start_mode = "";
    displayCurrentInput();
}
/**
 * Stores the last operator pushed for multiply, divide, add, subtract, or an exponential operation.
 * @param {[[Type]]} op [[Description]]
 */
function storeOperator(op) {
    if (op.indexOf("*") > -1) {
        operator = 1;
    }; //codes for *
    if (op.indexOf("/") > -1) {
        operator = 2;
    }; // slash (divide)
    if (op.indexOf("+") > -1) {
        operator = 3;
    }; // sum
    if (op.indexOf("-") > -1) {
        operator = 4;
    }; // difference
    if (op.indexOf("^") > -1) {
        operator = 5;
        // exponent
    };
    memory = current_input;  //store value
    current_input = "";      //Set current input to nothing to show that the user has done something
    displayCurrentInput();
    console.log(op);
    console.log(operator);
    console.log(memory);
}

/**
 * Calculate using operator, the memory and what is current
 */
function calculate() {
    divideByZero = false;
    if (operator == 1) {
        current_input = eval(memory) * eval(current_input);
    };
    if (operator == 2) {
        if (eval(current_input) == 0) {
            current_input = "undefined- cannot divide by zero";
            divideByZero = true;
        }
        else {
            current_input = eval(memory) / eval(current_input);
        }
    };
    if (operator == 3) {
        current_input = eval(memory) + eval(current_input);
    };
    if (operator == 4) {
        current_input = eval(memory) - eval(current_input);
    };
    if (operator == 5 && current_input < 0) {
        var power_of = -1 * eval(current_input);
        var base = eval(memory);
        var final = 1;
        for (i = 0; i < power_of; i++) {
            final = final * base;
            console.log(base + "^" + (i + 1) + " = " + final);
        }
        current_input = 1 / final;
    }
    else if (operator == 5) {
        var power_of = eval(current_input);
        var base = eval(memory);
        var final = 1;
        for (i = 0; i < power_of; i++) {
            final = final * base;
            console.log(base + "^" + (i + 1) + " = " + final);
        }
        current_input = final;
    };
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}

/**
 * Change the sign of the current input
 */
function changeSign() {
    if (current_input == 0 || current_input == ""){
        return;
    }
    current_input = -1 * current_input;
    displayCurrentInput();
}

/**
 * Clear the current input back to 0
 */
function pleaseClear() {
    current_input = "";
    console.log("Current input cleared");
    console.log("Operator remains " + operator + " and memory remains " + memory);
    displayCurrentInput();
}

/**
 * Change the current input to a percentage
 */
function percentage() {
    if (current_input.indexOf("%") == -1) {
        current_input = current_input * 100;
        current_input = current_input.toString() + "%";
    }
    displayCurrentInput();
}

/**
 *  Calculate the factorial of the current input
 */
function factorial() {
    var i = "";
    var fact = 1;
    if (current_input == 0) {       // factorial of 0 is 1
        current_input = 1;
    } else if (current_input < 0) {        //negative numbers cant be factorials
        current_input = "ERROR- input cannot be less than 0";
    }
    else {
        for (i = 1; i <= current_input; i++) {
            fact = fact * i;
        }
        current_input = fact;
    }
    displayCurrentInput();
}

/**
 * Calculate the square of the current input
 */
function square() {
    current_input = current_input * current_input;
    displayCurrentInput();
}

/**
 * Calculate the square root of the current input, including i for negative inputs
 */
function squareRoot() {
    if (current_input == -1) {
        current_input = "i";
    }
    else if (current_input < 0) {
        current_input = Math.sqrt(current_input * -1);
        current_input = current_input.toString() + "i";
    }
    else {
        current_input = Math.sqrt(current_input);
    }
    displayCurrentInput();
}

/**
 * Calculate the inverse of the current input
 */
function inverse() {
    current_input = 1 / current_input;
    displayCurrentInput();
}


//trig functions

/**
 * Sets current input to pi
 */
function pi() {
    current_input = Math.PI;
    displayCurrentInput();
}

/**
 * Sin of current input
 */
function sin() {
    if (current_input == 0 || current_input == ""){
        return;
    }
    current_input = Math.sin(current_input);
    displayCurrentInput();
    checkZero();
}

/**
 * Finds cosine of current inout
 */
function cos() {
    if (current_input == 0 || current_input == ""){
        return;
    }
    current_input = Math.cos(current_input);
    displayCurrentInput();
    checkZero();
}

/**
 * Finds tanget of current input
 */
function tan() {
    if (current_input == 0 || current_input == ""){
        return;
    }
    if (start_mode == "Radians") {
        var temp = = current_input * (180 / Math.PI);
        if (current_input == 90 || current_input == 270) {
         return;
        }
    }else if ( start_mode == "Degrees" && (current_input == 90 || current_input == 270)) {
        return;
    }
    current_input = Math.tan(current_input);
    displaycurrent_input();
    checkZero();
}

/**
 * Sets extremley small number to zero
 */
function checkZero() {
    if (current_input > 0 && current_input < 0.000000001) {
        current_input = 0;
        displayCurrentInput();
    }
}

/**
 * Converts answer from degrees to radian
 */
function toRadian() {
    if (current_input == 0 || current_input == ""){
        return;
    }
    if (start_mode == "Radian") {
        console.log("already in radians");
    } else {
    current_input = current_input * (Math.PI / 180);
    start_mode = "Radian";
    console.log("changing to radians");
    }
    displayCurrentInput();
}

/**
 * Converts answer from radians to degrees
 */
function toDegree() {
    if (current_input == 0 || current_input == ""){
        return;
    }
    if (start_mode == "Degree") {
        console.log("already in degrees");
    } else {
    current_input = current_input * (180 / Math.PI);
    start_mode = "Degree";
        console.log("changing to degrees");
    }
    displayCurrentInput();
}

// memory functions

/**
 * Sets current input as memory
 */
function ms() {
    other_memory = current_input;
    console.log(other_memory);
}

/**
 * Tells user what the memory is
 */
function mr() {
    current_input = other_memory;
    displayCurrentInput();
    console.log("memory is " + other_memory);
}

/**
 * Adds current input to memory
 */
function mplus() {
    other_memory = eval(other_memory) + eval(current_input);
    console.log("memory is " + other_memory);
}

/**
 * Subtracts current input from the memory
 */
function mminus() {
    other_memory = eval(other_memory) - eval(current_input);
}

/**
 * Returns whether a too many digits error has been reached
 * @returns {boolean} Whether a too many digits error has been reached
 */
function checkTooManyDigits () {
    return tooManyDigits;
}

/**
 * Returns whether a divide by zero error has been reached
 * @returns {boolean} Whether a divide by zero error has been reached
 */
function checkDivideByZero () {
    return divideByZero;
}
