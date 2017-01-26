/** TODO:
 * 1. Add these new functions: percentage, inverse, factorial, square and square root
 * 2. Bootstrap it to make it pretty!
 * 3. User can only type numbers in the display (30 max!), and the numbers are right aligned.
 * 4. Fix divide by 0 errors!
 * 5. Add the ability to clear the current input, but not memory.
 * 6. Challenge: Add trig functions (in radian AND degree mode)
 * 7. Extra Challenge: Add mc, m+, m-, mr butons that work!
 * 8. Super Challenge: Add ( and ) buttons that work!
 * 9. Super Duper Challenge: Add exponents (negatives too!)
 */
var currentInput = "0";
var memory = "0";
var operator = 0;
var otherMemory = currentInput;
var startMode = "";
// Helper function for displaying the current input
function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}
// Adds a digit to the current input
function addDigit(dig) {
    if (currentInput.length + 1 > 18) {
        alert("No more than 18 characters");
    }
    if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1)) {
        currentInput = dig;
    }
    else {
        currentInput = currentInput + dig;
    }
    displayCurrentInput();
}
// Adds a decimal to the current input
function addDecimal() {
    if (currentInput.length == 0) {
        //no leading ".", use "0."
        currentInput = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (currentInput.indexOf(".") == -1) {
            currentInput = currentInput + ".";
        }
    }
    displayCurrentInput();
}
// Clears everything.
function allClear() {
    currentInput = "";
    console.log("Current input cleared");
    operator = 0; //clear operator
    console.log("Operator cleared");
    memory = "0"; //clear memory
    console.log("Memory cleared");
    startMode = "";
    displayCurrentInput();
}
// Stores the last operator pushed for multiply, divide, add, or subtract.
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
    memory = currentInput; //store value
    currentInput = "";
    displayCurrentInput();
    console.log(op);
    console.log(operator);
    console.log(memory);
}
// Calculate using operator, the memory and what is current
function calculate() {
    if (operator == 1) {
        currentInput = eval(memory) * eval(currentInput);
    };
    if (operator == 2) {
        if (eval(currentInput) == 0) {
            currentInput = "undefined- cannot divide by zero";
        }
        else {
            currentInput = eval(memory) / eval(currentInput);
        }
    };
    if (operator == 3) {
        currentInput = eval(memory) + eval(currentInput);
    };
    if (operator == 4) {
        currentInput = eval(memory) - eval(currentInput);
    };
    if (operator == 5 && currentInput < 0) {
        var powerOf = -1 * eval(currentInput);
        var base = eval(memory);
        var final = 1;
        for (i = 0; i < powerOf; i++) {
            final = final * base;
            console.log(base + "^" + (i + 1) + " = " + final);
        }
        currentInput = 1 / final;
    }
    else if (operator == 5) {
        var powerOf = eval(currentInput);
        var base = eval(memory);
        var final = 1;
        for (i = 0; i < powerOf; i++) {
            final = final * base;
            console.log(base + "^" + (i + 1) + " = " + final);
        }
        currentInput = final;
    };
    operator = 0; //clear operator
    memory = "0"; //clear memory
    displayCurrentInput();
}
// Change the sign of the current input
function changeSign() {
    currentInput = -1 * currentInput;
    displayCurrentInput();
}
// Clear the current input back to 0
function pleaseClear() {
    currentInput = "0";
    console.log("Current input cleared");
    console.log("Operator remains " + operator + " and memory remains " + memory);
    displayCurrentInput();
}
// Change the current input to a percentage
function percentage() {
    if (currentInput.indexOf("%") == -1) {
        currentInput = currentInput * 100;
        currentInput = currentInput.toString() + "%";
    }
    displayCurrentInput();
}
// Calculate the factorial of the current input
function factorial() {
    var i = "";
    var fact = 1;
    if (currentInput == 0) {
        currentInput = 1;
    } else if (currentInput < 0) {
        currentInput = "ERROR- input cannot be less than 0";
    }
    else {
        for (i = 1; i <= currentInput; i++) {
            fact = fact * i;
        }
        currentInput = fact;
    }
    displayCurrentInput();
}
// Calculate the square of the current input
function square() {
    currentInput = currentInput * currentInput;
    displayCurrentInput();
}
// Calculate the square root of the current input
function squareRoot() {
    if (currentInput == -1) {
        currentInput = "i";
    }
    else if (currentInput < 0) {
        currentInput = Math.sqrt(currentInput * -1);
        currentInput = currentInput.toString() + "i";
    }
    else {
        currentInput = Math.sqrt(currentInput);
    }
    displayCurrentInput();
}
// Calculate the inverse of the current input
function inverse() {
    currentInput = 1 / currentInput;
    displayCurrentInput();
}
//trig functions:
function pi() {
    currentInput = Math.PI;
    displayCurrentInput();

}
function sin() {
    currentInput = Math.sin(currentInput);
    displayCurrentInput();
    checkZero();
}

function cos() {
    currentInput = Math.cos(currentInput);
    displayCurrentInput();
    checkZero();
}

function tan() {
    currentInput = Math.tan(currentInput);
    displayCurrentInput();
    checkZero();
}
function checkZero() {
    if (currentInput > 0 && currentInput < 0.000000001) {
        currentInput = 0;
        displayCurrentInput();
    }
}
function toRadian() {
    if (startMode == "Radian") {
        console.log("already in radians");
    } else {
    currentInput = currentInput * (Math.PI / 180);
    startMode = "Radian";
    console.log("changing to radians");
    }
    displayCurrentInput();
}

function toDegree() {
    if (startMode == "Degree") {
        console.log("already in degrees");
    } else {
    currentInput = currentInput * (180 / Math.PI);
    startMode = "Degree";
        console.log("changing to degrees");
    }
    displayCurrentInput();
}
// memory functions
function ms() {
    otherMemory = currentInput;
    console.log(otherMemory);
}
function mr() {
    currentInput = otherMemory;
    displayCurrentInput();
    console.log("memory is " + otherMemory);
}
function mplus() {
    otherMemory = eval(otherMemory) + eval(currentInput);
    console.log("memory is " + otherMemory);
}
function mminus() {
    otherMemory = eval(otherMemory) - eval(currentInput);
}
