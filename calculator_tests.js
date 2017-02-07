/*

                Add test template

QUnit.test( "Add ... test", function( assert ) {
    allClear();
    addDigit();

    assert.equal(document.getElementById("screen").value, '', "Passed - Expected ...");
    allClear();
});

*/

// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    allClear();
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
    allClear();
});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    allClear();
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
    allClear();
});

//US1: As a user, I want to be able to press a button and change the sign of the current number that I have inputted into the calculator.
QUnit.test( "Change of Sign Test", function( assert ) {
    allClear();
    changeSign();
    addDigit('5');
    changeSign();
    assert.equal(document.getElementById("screen").value, "-5", "Passed - Expected -5");
    allClear();
});

//US2: As a user I want to be able to press a button and change the inputed number on the calculator's screen to change to a percentage.
QUnit.test( "Change to percentage test", function( assert ) {
    allClear();
    addDigit('5');
    percentage();
    assert.equal(document.getElementById("screen").value, "500%", "Passed - Expected 500%");
    allClear();
});

//US3: As a user, I want to be able to calculate the inverse of a number simply by pressing a button.
QUnit.test( "Inverse Test", function( assert ) {
    allClear();
    addDigit(2);
    inverse();
    assert.equal(document.getElementById("screen").value, "0.5", "Passed - Expected 0.5");
    allClear();
});

//US4: As a user I want to be able to calculate the factorial of a number by simply pressing a button.
QUnit.test( "Add factorial test", function( assert ) {
    allClear();
    addDigit(0);
    factorial();
    assert.equal(document.getElementById("screen").value, '1', "Passed - Expected 1");
    allClear();
    addDigit(1);
    factorial();
    assert.equal(document.getElementById("screen").value, '1', "Passed - Expected 1");
    allClear();
    addDigit(6);
    factorial();
    assert.equal(document.getElementById("screen").value, '720', "Passed - Expected 720");
    allClear();
    addDigit(12);
    factorial();
    assert.equal(document.getElementById("screen").value, '479001600', "Passed - Expected 479,001,600");
    allClear();
});

//US5: As a user I want to be able to calculate the square root of a number by simply pressing a button.
QUnit.test( "Add root test", function( assert ) {
    allClear();
    addDigit(1);
    addDigit(6);
    squareRoot();
    assert.equal(document.getElementById("screen").value, '4', "Passed - Expected 4");
    allClear();
    addDigit(1);
    addDigit(4);
    addDigit(4);
    squareRoot();
    assert.equal(document.getElementById("screen").value, '12', "Passed - Expected 12");
    allClear();
    addDigit(1);
    addDigit(0);
    addDigit(4);
    addDigit(8);
    addDigit(5);
    addDigit(7);
    addDigit(6);
    squareRoot();
    assert.equal(document.getElementById("screen").value, '1024', "Passed - Expected 1024");
    allClear();
});

//US6: As a user I want to be able to calculate the square of a number by simply pressing a button.
QUnit.test( "Add square test", function( assert ) {
    allClear();
    addDigit(1);
    addDigit(2);
    square();
    assert.equal(document.getElementById("screen").value, '144', "Passed - Expected 144");
    allClear();
    addDigit(2);
    addDigit(5);
    square();
    assert.equal(document.getElementById("screen").value, '625', "Passed - Expected 625");
    allClear();
    addDigit(1);
    addDigit(0);
    addDigit(2);
    addDigit(4);
    square();
    assert.equal(document.getElementById("screen").value, '1048576', "Passed - Expected 1,048,576");
    allClear();
});

//US7: As a user who sometimes makes mistakes when pressing buttons on the keypad, I want to be able to press a button that clears my current input, but not the stored procedure.
QUnit.test( "Add clear test", function( assert ) {
    allClear();
    addDigit('2');
    storeOperator('^');
    addDigit('3');
    pleaseClear();
    assert.equal(document.getElementById("screen").value, '', "Passed - Expected nil value");
    allClear();
});

//US8: Bug Alert! There is a bug in the calculator app! As a careless user I want to be told that I just tried to divide by zero, which I should be told is not allowed.
QUnit.test( "Add divide by 0 test", function( assert ) {
    allClear();
    addDigit(5);
    storeOperator('/');
    addDigit(0);
    calculate();
    assert.ok( checkDivideByZero(), "Passed - Expected divide by zero error");
    allClear();
});

//US9: Bug Alert! As an easily confused user I don't want to be able to type numbers into the screen that causes some of the numbers to disappear off the screen, thus confusing me about what I actually typed.
QUnit.test( "Add too many digits test", function( assert ) {
    allClear();
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    addDigit(5);
    assert.ok( checkTooManyDigits, "Passed - Expected too many digits error");
    allClear();
});

QUnit.test( "Add trig functions test", function( assert ) {
    allClear();
    addDigit(9);
    addDigit(0);
    toRadian();
    mySin();
    assert.equal(document.getElementById("screen").value, '1', "Passed - Expected sin(90degrees) = 1");
    allClear();
    addDigit(9);
    addDigit(0);
    toRadian();
    myCos();
    assert.equal(document.getElementById("screen").value, '0', "Passed - Expected cos(90degrees) = 0");
    allClear();
    addDigit(1)
    addDigit(8);
    addDigit(0);
    toRadian();
    myTan();
    assert.equal(document.getElementById("screen").value, '0', "Passed - Expected tan(180degrees) = 0");
    allClear();
});
