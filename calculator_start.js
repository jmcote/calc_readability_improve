function Calculator(){
    this.currentInput = "0";
    this.memory = "0";
    this.operator = 0;
    this.otherMemory = this.currentInput;
    this.trigMode = "Radian";
    this.divideByZero = false;
    this.tooManyDigits = false;
    this.displayCurrentInput = displayCurrentInput;
    this.addDigit = addDigit;
    this.addDecimal = addDecimal;
    this.allClear = allClear;
    this.storeOperator = storeOperator;
    this.calculate = calculate;
    this.changeSign = changeSign;
    this.pleaseClear = pleaseClear;
    this.percentage = percentage;
    this.factorial = factorial;
    this.factorial = factorial;
    this.squareRoot = squareRoot;
    this.inverse = inverse;
    this.pi = pi;
    this.mySin = mySin;
    this.myCos = myCos;
    this.myTan = myTan;
    this.checkZero = checkZero;
    this.toRadian = toRadian;
    this.calcToRadian = calcToRadian;
    this.toDegree = toDegree;
    this.calcToDegree = calcToDegree;
    this.modeDegree = modeDegree;
    this.modeRadian = modeRadian;
    this.ms = ms;
    this.mr = mr;
    this.mplus = mplus;
    this.mminus = mminus;
    this.checkTooManyDigits = checkTooManyDigits;
    this.checkDivideByZero = checkDivideByZero;
}

/**
 * Helper function for displaying the current input
 */
function displayCurrentInput {
    document.getElementById('screen').value = this.currentInput;
}

/**
 * Adds a digit to the current input
 * @param {number} dig The digit being added
 */
function addDigit(dig) {
    this.tooManyDigits = false;
    if (this.currentInput.length + 1 > 18) {
        alert("No more than 18 characters");
        this.tooManyDigits = true;
    }
    if ((eval(this.currentInput) == 0) && (this.currentInput.indexOf(".") == -1)) {
        this.currentInput = dig;
    }
    else {
        this.currentInput = this.currentInput + dig;
    }
    this.displayCurrentInput;
}

/**
 * Adds a decimal to the current input
 */
function addDecimal() {
    if (this.currentInput.length == 0) {
        //no leading ".", use "0."
        this.currentInput = "0.";
    }
    else {
        // First make sure one doesn't exist
        if (this.currentInput.indexOf(".") == -1) {
            this.currentInput = this.currentInput + ".";
        }
    }
    this.displayCurrentInput;
}

/**
 * Clears everything.
 */
function allClear() {
    this.currentInput = "";
    console.log("Current input cleared");
    this.operator = 0; //clear operator
    console.log("Operator cleared");
    this.memory = "0"; //clear this.memory
    console.log("Memory cleared");
    this.displayCurrentInput;
}
/**
 * Stores the last operator pushed for multiply, divide, add, subtract, or an exponential operation.
 * @param {[[Type]]} op [[Description]]
 */
function storeOperator(op) {
    if (op.indexOf("*") > -1) {
        this.operator = 1;
    }; //codes for *
    if (op.indexOf("/") > -1) {
        this.operator = 2;
    }; // slash (divide)
    if (op.indexOf("+") > -1) {
        this.operator = 3;
    }; // sum
    if (op.indexOf("-") > -1) {
        this.operator = 4;
    }; // difference
    if (op.indexOf("^") > -1) {
        this.operator = 5;
        // exponent
    };
    this.memory = this.currentInput;  //store value
    this.currentInput = "";      //Set current input to nothing to show that the user has done something
    this.displayCurrentInput;
    console.log(op);
    console.log(this.operator);
    console.log(this.memory);
}

/**
 * Calculate using operator, the memory and what is current
 */
function calculate() {
    this.divideByZero = false;
    if (this.operator == 1) {
        this.currentInput = eval(this.memory) * eval(this.currentInput);
    };
    if (this.operator == 2) {
        if (eval(this.currentInput) == 0) {
            this.currentInput = "undefined- cannot divide by zero";
            this.divideByZero = true;
        }
        else {
            this.currentInput = eval(this.memory) / eval(this.currentInput);
        }
    };
    if (this.operator == 3) {
        this.currentInput = eval(this.memory) + eval(this.currentInput);
    };
    if (this.operator == 4) {
        this.currentInput = eval(this.memory) - eval(this.currentInput);
    };
    if (this.operator == 5 && this.currentInput < 0) {
        this.power_of = -1 * eval(this.currentInput);
        var base = eval(this.memory);
        var final = 1;
        for (i = 0; i < power_of; i++) {
            final = final * base;
            console.log(base + "^" + (i + 1) + " = " + final);
        }
        this.currentInput = 1 / final;
    }
    else if (this.operator == 5) {
        var power_of = eval(this.currentInput);
        var base = eval(this.memory);
        var final = 1;
        for (i = 0; i < power_of; i++) {
            final = final * base;
            console.log(base + "^" + (i + 1) + " = " + final);
        }
        this.currentInput = final;
    };
    this.operator = 0; //clear operator
    this.memory = "0"; //clear memory
    this.displayCurrentInput;
}

/**
 * Change the sign of the current input
 */
function changeSign() {
    if (this.currentInput == 0 || this.currentInput == ""){
        return;
    }
    this.currentInput = -1 * this.currentInput;
    this.displayCurrentInput;
}

/**
 * Clear the current input back to 0
 */
function pleaseClear() {
    this.currentInput = "";
    console.log("Current input cleared");
    console.log("Operator remains " + this.operator + " and memory remains " + this.memory);
    this.displayCurrentInput;
}

/**
 * Change the current input to a percentage
 */
function percentage() {
    if (this.currentInput.indexOf("%") == -1) {
        this.currentInput = this.currentInput * 100;
        this.currentInput = this.currentInput.toString() + "%";
    }
    this.displayCurrentInput;
}

/**
 *  Calculate the factorial of the current input
 */
function factorial() {
    var i = "";
    var fact = 1;
    if (this.currentInput == 0) {       // factorial of 0 is 1
        this.currentInput = 1;
    } else if (this.currentInput < 0) {        //negative numbers cant be factorials
        this.currentInput = "ERROR- input cannot be less than 0";
    }
    else {
        for (i = 1; i <= this.currentInput; i++) {
            fact = fact * i;
        }
        this.currentInput = fact;
    }
    this.displayCurrentInput;
}

/**
 * Calculate the square of the current input
 */
function square() {
    this.currentInput = this.currentInput * this.currentInput;
    this.displayCurrentInput;
}

/**
 * Calculate the square root of the current input, including i for negative inputs
 */
function squareRoot() {
    if (this.currentInput == -1) {
        this.currentInput = "i";
    }
    else if (this.currentInput < 0) {
        this.currentInput = Math.sqrt(this.currentInput * -1);
        this.currentInput = this.currentInput.toString() + "i";
    }
    else {
        this.currentInput = Math.sqrt(this.currentInput);
    }
    this.displayCurrentInput;
}

/**
 * Calculate the inverse of the current input
 */
function inverse() {
    this.currentInput = 1 / this.currentInput;
    this.displayCurrentInput;
}


//trig functions

/**
 * Sets current input to pi
 */
function pi() {
    this.currentInput = Math.PI;
    this.displayCurrentInput;
}

/**
 * Sin of current input
 */
function mySin() {
    if (this.currentInput === ""){
        return;
    }
    if (this.trigMode == "Degree") {
        var tempRad = this.calcToRadian(this.currentInput);
        this.currentInput = Math.sin(tempRad);
    } else if (this.trigMode == "Radian") {
        this.currentInput = Math.sin(this.currentInput);
    } else {
        this.currentInput = "Invalid trig mode";
    }
    //this.currentInput = Math.sin(this.currentInput);
    this.displayCurrentInput;
    this.checkZero();
}

/**
 * Finds cosine of current inout
 */
function myCos() {
    if (this.currentInput === ""){
        return;
    }
    if (this.trigMode == "Degree") {
        var tempRad = this.calcToRadian(this.currentInput);
        this.currentInput = Math.cos(tempRad);
    } else if (this.trigMode == "Radian") {
        this.currentInput = Math.cos(this.currentInput);
    } else {
        this.currentInput = "Invalid trig mode";
    }
    //this.currentInput = Math.cos(this.currentInput);
    this.displayCurrentInput;
    this.checkZero();
}

/**
 * Finds tanget of current input
 */
function myTan() {
    if (this.currentInput == 0 || this.currentInput == ""){
        return;
    }
    if (this.trigMode == "Degree") {
        var tempRad = this.calcToRadian(this.currentInput);
        this.currentInput = Math.tan(tempRad);
    } else if (this.trigMode == "Radian") {
        this.currentInput = Math.tan(this.currentInput);
    } else {
        this.currentInput = "Invalid trig mode";
    }
    this.currentInput = Math.tan(this.currentInput);
    this.displayCurrentInput;
    console.log(this.currentInput.toString().indexOf("e-"));
    this.checkZero();
}

/**
 * Sets extremley small number to zero
 */
function checkZero() {
    if (this.currentInput.toString().indexOf("e-") !== -1 ) {
        this.currentInput = 0;
        this.displayCurrentInput;
    }
}

/**
 * Converts current input from degrees to radian
 */
function toRadian() {
    if (this.currentInput == 0 || this.currentInput == ""){
        return;
    }
    this.currentInput = this.currentInput * (Math.PI / 180);
    this.displayCurrentInput;
}

/**
 * Converts integer from degrees to radians
 * @param {number} number The number in degrees
 */
function calcToRadian(number) {
    return number * (Math.PI / 180);
}

/**
 * Converts current input from radians to degrees
 */
function toDegree() {
    if (this.currentInput == 0 || this.currentInput == ""){
        return;
    }
    this.currentInput = this.currentInput * (180 / Math.PI);
    this.displayCurrentInput;
}

/**
 * Converts integer from radians to degrees
 * @param {number} number The number in radians
 */
function calcToDegree(number) {
    return number * (180 / Math.PI);
}

/**
 * Converts trig mode to degrees
 */
function modeDegree(id) {
    this.trigMode = "Degree";
    document.getElementById(id).innerHTML = "TRIGMODE: " + this.trigMode;
}

/**
 * Converts trig mode to radians
 */
function modeRadian(id) {
    this.trigMode = "Radian";
    document.getElementById(id).innerHTML = "TRIGMODE: " + this.trigMode;
}

// memory functions

/**
 * Sets current input as memory
 */
function ms() {
    this.otherMemory = this.currentInput;
    console.log(this.otherMemory);
}

/**
 * Tells user what the memory is
 */
function mr() {
    this.currentInput = this.otherMemory;
    this.displayCurrentInput;
    console.log("memory is " + this.otherMemory);
}

/**
 * Adds current input to memory
 */
function mplus() {
    this.otherMemory = eval(this.otherMemory) + eval(this.currentInput);
    console.log("memory is " + this.otherMemory);
}

/**
 * Subtracts current input from the memory
 */
function mminus() {
    this.otherMemory = eval(this.otherMemory) - eval(this.currentInput);
}

/**
 * Returns whether a too many digits error has been reached
 * @returns {boolean} Whether a too many digits error has been reached
 */
function checkTooManyDigits () {
    return this.tooManyDigits;
}

/**
 * Returns whether a divide by zero error has been reached
 * @returns {boolean} Whether a divide by zero error has been reached
 */
function checkDivideByZero () {
    return this.divideByZero;
}
