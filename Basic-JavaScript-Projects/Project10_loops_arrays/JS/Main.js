function Call_Loop() {             // created function

    var Digit = "";                // created variable with blank value
    var X = 1;                    // created variable X with value 1

    while ( X < 11)  {            // while X is less than 11 , execute the following loop

      Digit += "<br>" + X;        // Digit + X 
      X++;                        // adds 1 to X 

    }

    document.getElementById("Loop").innerHTML = Digit;  // display digit

}


function length1() {
  var str = "Hello World!";
  var n = str.length;                         //returns length of variable "str" ( "hello word!")
  document.getElementById("ls").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;


function for_Loop() {                            // created function

    for ( Y = 0; Y < Instruments.length; Y++) {      
          
          //   Statement 1 sets a variable before the loop starts (var Y = 0).
          //   Statement 2 defines the condition for the loop to run (Y must be less than instrument length).
          //   Statement 3 increases a value (Y++) each time the code block in the loop has been executed.


      Content += Instruments[Y] + "<br>";   // content = instruments 

    }
    document.getElementById("List_of_Instruments").innerHTML = Content;        // display conent
  
}

function cat_pics() {

  var Cat_Picture = [];

        Cat_Picture[0] = "sleeping";
        Cat_Picture[1] = "playing";
        Cat_Picture[2] = "eating";
        Cat_Picture[3] = "purring";

document.getElementById("Array").innerHTML = "in this picture , the cat is " + Cat_Picture[2] + ".";


}

function constant_function() {

  const Musical_Instrument = { type:"guitar", brand: "fender", color:"black"};  // created object with const keywords
  Musical_Instrument.color = "blue";                                            // changed value
  Musical_Instrument.price = "$900";                                            // added value
  document.getElementById("Constant").innerHTML = "The Cost " + Musical_Instrument.type + " was " 
  + Musical_Instrument.price + " and the color was " + Musical_Instrument.color;  //displayed multiple elements
  

}

var x = 10;
console.log(x);             //Variables declared with the var keyword cannot have Block Scope.

{
let x = 100;             // Variables declared with the let keyword can have Block Scope.
console.log(x);
}

console.log(x);



let car = {                          //created object with data types
  make: "dodge ",
  model: "Viper ",
  year: "2021 ",
  color: "red ",

  description : function() {        //Methods are actions that can be performed on objects. In JavaScript, 
                                    //they are stored within properties as functions. One way to do this is utilizing 
                                    //the return statement and “this” keyword.

    return "The car is a " + this.year + this.color + this.make + this.model;
  }

  };

  document.getElementById("Car_Object").innerHTML = car.description();
 


var text = "";       //variable with unassigned value
var i;

for (i = 0; i < 10; i++) 

          //   Statement 1 sets a variable before the loop starts (var I = 0).
          //   Statement 2 defines the condition for the loop to run (I must be less than 10).
          //   Statement 3 increases a value (i++) each time the code block in the loop has been executed.


{

  if (i === 3) { break; }      // comparision operator  ( "===" means equal value and equal type )  
                              // The break statement "jumps out" of a loop.

  text += "The number is " + i + "<br>";
}
document.getElementById("loop_with_br").innerHTML = text;


var text = "";            //same as previous lop only with the continue statement
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }              // The continue statement breaks one iteration (in the loop), 
                                          //if a specified condition occurs, and continues with the next iteration in the loop.
  text += "The number is " + i + "<br>";
}
document.getElementById("loop_with_cont").innerHTML = text;
