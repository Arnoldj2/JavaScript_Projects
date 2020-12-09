window.alert('Hello, World!');

var A = "This string value is being assigned to variable \"A\"" + " \+ An additional string of text concatenated";

var B = " Concatenated" + " String";

var Family = " The Arnolds", Dad= "Tom", Mom= "Lisa", Son= "Jeff", Dog="Spider";

document.write(A);

document.write(B);

document.write(Dog);

var blues = "I have the blues.";

var blues=blues.fontcolor("blue");

document.write(blues);

var Family=Family.fontcolor("green");
var Dad=Dad.fontcolor("red");
var Mom=Mom.fontcolor("blue");
var Son=Son.fontcolor("yellow");
var Dog=Dog.fontcolor("orange");

document.write(Family);

document.write(Dog);

document.write(3 + 3);

function My_First_Function()  {             //Defining a function and naming it

    var str = "this text is green!";            //Defining a variable and giving it a string value
    var result = str.fontcolor("green");        //Using a font color method on str variable  
    document.getElementById("Green_Text").innerHTML = result;   //putting the value of the result into HTML element with "green_Text" id

}
