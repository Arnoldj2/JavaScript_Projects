
// standard math functions add substract multiple divide

  function addition_Function() {

    var addition = 2 + 2;
    document.getElementById("Math10").innerHTML = "2 + 2 = " + addition; 

  }

  function subtraction_Function() {

    var subtraction = 5 - 2;
    document.getElementById("Sub").innerHTML = "5 - 2 = " + subtraction;

  }

  function multiply_Function() {

    var multiply = 6 * 6;
    document.getElementById("Multi").innerHTML = "6 x 6 = " + multiply;

  }

  function division_Function() {

    var division = 100 / 5;
    document.getElementById("Div").innerHTML = "100 / 5 = " + division;

  }

  function Equate_Function() {

    var equate = (18 + 4) - 10 * 4 / 2;
    document.getElementById("Equate").innerHTML = "(18 + 4) - 10 * 4 / 2 = " + equate;

  }

  function Modulus_Function() {

    var simple_math = 25 % 6;
    document.getElementById("Math2").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_math;
    

  }

  function negation_Operator() {

    var x = 10;
    document.getElementById("Math3").innerHTML = -x;
    

  }

  function myRandom() {
    document.getElementById("demo").innerHTML = Math.floor(Math.random() * 100); // on button press output random number

  }

  window.alert(Math.random() * 100);   // window alert random number up to 100

  var K = 5;          //assigned variable K the valud of 5
  K++;                // Variable K plus 1  , the valud would be 6
  document.writeln(K);

  document.writeln("space");  //just added words to break up outputs -  added "ln" to all to add an extra space ( ex document.write was changed to document.writeln )


  var J = 5.25;
  J--;
  document.writeln(J);
