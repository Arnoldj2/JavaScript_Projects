

function My_First_Function()  {             //Defining a function and naming it

    var str = "this text is green!";            //Defining a variable and giving it a string value
    var result = str.fontcolor("green");        //Using a font color method on str variable  
    document.getElementById("Green_Text").innerHTML = result;   //putting the value of the result into HTML element with "green_Text" id

}


function My_First_Function2()  {             //Defining a function and naming it

    var str = "this text is blue!";            //Defining a variable and giving it a string value
    var result = str.fontcolor("blue");        //Using a font color method on str variable  
    document.getElementById("Blue_Text").innerHTML = result;   
}


var X = 5, Y = 5;          //creating multiple variables

function My_First_Function3()  {             //Defining a function and naming it
  
    var result = X * Y;                     // defining parameters for variable result
    document.getElementById("Math").innerHTML = result;   //putting the value of the result into HTML element with "Math" id

}


function changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.style.color = newColor;
  }


  function myFunction4() {

    var sentence = "I am learning";                            // created variable named "sentence and assigned it a string value of "i am learning"
    sentence += " a lot from this book!";                   // sentence is concatenated with "a lot from this book"
    document.getElementById("Concatenate").innerHTML = sentence;

  }

  function textchange() {                 // my function named textchange

    document.getElementById("text").innerHTML = "The text is now different";     

  }

  function addition_Function() {

    var addition = 2 + 2;
    document.getElementById("Math2").innerHTML = "2 + 2 = " + addition; 

  }
