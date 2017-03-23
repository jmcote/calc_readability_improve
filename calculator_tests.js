// Test for inputing digits
QUnit.test( "addDigit Method Test", function( assert ) {
    var calculator = new Calculator();
    calculator.allClear();
    calculator.addDigit('1');
    calculator.addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
    calculator.allClear();
});

// Test adding one, then two decimals
QUnit.test( "addDecimal Method Test", function( assert ) {
    var calculator = new Calculator();
    calculator.allClear();
    calculator.addDecimal();
    calculator.addDigit('2');
    calculator.addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
    calculator.allClear();
});

//US1: As a user, I want to be able to press a button and change the sign of the current number that I have inputted into the calculator.
QUnit.test( "changeSign Method Test", function( assert ) {
    var calculator = new Calculator();
    calculator.allClear();
    calculator.changeSign();
    calculator.addDigit('5');
    calculator.changeSign();
    assert.equal(document.getElementById("screen").value, "-5", "Passed - Expected -5");
    calculator.allClear();
});

//US2: As a user I want to be able to press a button and change the inputed number on the calculator's screen to change to a percentage.
QUnit.test( "percentage Method Test", function( assert ) {
    var calculator = new Calculator();
    calculator.allClear();
    calculator.addDigit('5');
    calculator.percentage();
    assert.equal(document.getElementById("screen").value, "500%", "Passed - Expected 500%");
    calculator.allClear();
});

//US3: As a user, I want to be able to calculate the inverse of a number simply by pressing a button.
QUnit.test( "inverse Method Test", function( assert ) {
    var calculator = new Calculator();
    calculator.allClear();
    calculator.addDigit(2);
    calculator.inverse();
    assert.equal(document.getElementById("screen").value, "0.5", "Passed - Expected 0.5");
    calculator.allClear();
});

//US4: As a user I want to be able to calculate the factorial of a number by simply pressing a button.
QUnit.test( "Add facotiral Method Test", function( assert ) {
    var calculator = new Calculator();
    calculator.allClear();
    calculator.addDigit(0);
    calculator.factorial();
    assert.equal(document.getElementById("screen").value, '1', "Passed - Expected 1");
    calculator.allClear();
    calculator.addDigit(1);
    calculator.factorial();
    assert.equal(document.getElementById("screen").value, '1', "Passed - Expected 1");
    calculator.allClear();
    calculator.addDigit(6);
    calculator.factorial();
    assert.equal(document.getElementById("screen").value, '720', "Passed - Expected 720");
    calculator.allClear();
    calculator.addDigit(12);
    calculator.factorial();
    assert.equal(document.getElementById("screen").value, '479001600', "Passed - Expected 479,001,600");
    calculator.allClear();
});

//US5: As a user I want to be able to calculate the square root of a number by simply pressing a button.
QUnit.test( "squareRoot Method Test", function( assert ) {
    var calculator = new Calculator();
    calculator.allClear();
    calculator.addDigit(1);
    calculator.addDigit(6);
    calculator.squareRoot();
    assert.equal(document.getElementById("screen").value, '4', "Passed - Expected 4");
    calculator.allClear();
    calculator.addDigit(1);
    calculator.addDigit(4);
    calculator.addDigit(4);
    calculator.squareRoot();
    assert.equal(document.getElementById("screen").value, '12', "Passed - Expected 12");
    calculator.allClear();
    calculator.addDigit(1);
    calculator.addDigit(0);
    calculator.addDigit(4);
    calculator.addDigit(8);
    calculator.addDigit(5);
    calculator.addDigit(7);
    calculator.addDigit(6);
    calculator.squareRoot();
    assert.equal(document.getElementById("screen").value, '1024', "Passed - Expected 1024");
    calculator.allClear();
});

//US6: As a user I want to be able to calculate the square of a number by simply pressing a button.
QUnit.test( "square Method Test", function( assert ) {
    var calculator = new Calculator();
    calculator.allClear();
    calculator.addDigit(1);
    calculator.addDigit(2);
    calculator.square();
    assert.equal(document.getElementById("screen").value, '144', "Passed - Expected 144");
    calculator.allClear();
    calculator.addDigit(2);
    calculator.addDigit(5);
    calculator.square();
    assert.equal(document.getElementById("screen").value, '625', "Passed - Expected 625");
    calculator.allClear();
    calculator.addDigit(1);
    calculator.addDigit(0);
    calculator.addDigit(2);
    calculator.addDigit(4);
    calculator.square();
    assert.equal(document.getElementById("screen").value, '1048576', "Passed - Expected 1,048,576");
    calculator.allClear();
});

//US7: As a user who sometimes makes mistakes when pressing buttons on the keypad, I want to be able to press a button that clears my current input, but not the stored procedure.
QUnit.test( "pleaseClear Method Test", function( assert ) {
    var calculator = new Calculator();
    calculator.allClear();
    calculator.addDigit('2');
    calculator.storeOperator('^');
    calculator.addDigit('3');
    calculator.pleaseClear();
    assert.equal(document.getElementById("screen").value, '', "Passed - Expected nil value");
    calculator.allClear();
});

//US8: Bug Alert! There is a bug in the calculator app! As a careless user I want to be told that I just tried to divide by zero, which I should be told is not allowed.
QUnit.test( "checkDivideByZero Method Test", function( assert ) {
    var calculator = new Calculator();
    calculator.allClear();
    calculator.addDigit(5);
    calculator.storeOperator('/');
    calculator.addDigit(0);
    calculator.calculate();
    assert.ok( checkDivideByZero(), "Passed - Expected divide by zero error");
    calculator.allClear();
});

//US9: Bug Alert! As an easily confused user I don't want to be able to type numbers into the screen that causes some of the numbers to disappear off the screen, thus confusing me about what I actually typed.
QUnit.test( "too many digits Test", function( assert ) {
    var calculator = new Calculator();
    calculator.allClear();
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    calculator.addDigit(5);
    assert.ok( checkTooManyDigits, "Passed - Expected too many digits error");
    calculator.allClear();
});

//Test Trig Methods
QUnit.test( "Trig Methods Test", function( assert ) {
    var calculator = new Calculator();
    calculator.allClear();
    calculator.addDigit(9);
    calculator.addDigit(0);
    calculator.toRadian();
    calculator.mySin();
    assert.equal(document.getElementById("screen").value, '1', "Passed - Expected sin(90degrees) = 1");
    calculator.allClear();
    calculator.addDigit(9);
    calculator.addDigit(0);
    calculator.toRadian();
    calculator.myCos();
    assert.equal(document.getElementById("screen").value, '0', "Passed - Expected cos(90degrees) = 0");
    calculator.allClear();
    calculator.addDigit(1)
    calculator.addDigit(8);
    calculator.addDigit(0);
    calculator.toRadian();
    calculator.myTan();
    assert.equal(document.getElementById("screen").value, '0', "Passed - Expected tan(180degrees) = 0");
    calculator.allClear();
});
