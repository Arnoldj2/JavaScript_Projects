function Alphabet() {                   //created function

  var letter_1 = "A";                   //assigned 4 variables
  var letter_2 = "B";
  var letter_3 = "C";
  var letter_4 = "D";
  var first_four = letter_1.concat(letter_2,letter_3,letter_4);  //concatenated all variables

  document.getElementById("Concat").innerHTML = first_four;   //display
}


function cutup() {

var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var slc = txt.slice(20,25);                          //returns characts 20 - 25   UVWXY
document.getElementById("slice").innerHTML = slc;

}

var sentence = 'The quick brown fox jumps over the lazy dog.';   

console.log(sentence.toUpperCase());  // changes all letters to upper case



function lookup() {

var str = 'The quick brown fox jumps over the lazy dog.';  // The search() method returns the position of the first occurrence of a specified text in a string:
var pos = str.search("fox");
document.getElementById("loc").innerHTML = pos;

}

function numb() {         //function to return a number as a string.

  var x = 123;
  document.getElementById("number_to_string").innerHTML = x.toString(); 
  
  
}

function precision_method() {         //function to return a number as a string with a specified length:

  var x = 123456.84545411;
  document.getElementById("precision").innerHTML = x.toPrecision(8); 
  
  
}

function fixdec() {         //function to return a number as a string with a specified number of decimals

  var x = 10.501;
  document.getElementById("fixeddec").innerHTML = x.toFixed(2); 
  
  
}


function findvalue() {         //function to return a value of a value

  var x = 123456789;
  document.getElementById("value").innerHTML = x.valueOf(); 
  
  
}