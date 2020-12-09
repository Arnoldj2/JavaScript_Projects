function class_function() {                 //created function

  var class_output;                                                   //created variable , ( value assigned based on cass selection )
  var class1 = document.getElementById("class_input").value;           //created variable , value received from input
  var class_str = " will be an excellent class!";                     //created variable, assigned string value
                       
  switch(class1)  {                                 // switch statement to select one of many code blocks to be executed.  

      case "Rogue":                            // The value of the expression is compared with the values of each case.         
        class_output = " Rogue" + class_str;   // If there is a match, the associated block of code is executed.
      break;                                   // it breaks out of the switch block.

      case "Warrior":
        class_output = " Warrior" + class_str;
      break;

      case "Cleric":
        class_output = " Cleric" + class_str;
      break;

      case "Enchanter":
        class_output = " Enchanter" + class_str;
      break;

      case "Wizard":
        class_output = " Wizard" + class_str;
      break;

      case "Bard":
        class_output = " Bard" + class_str;
      break;

      default:
        class_output = "please enter a class name exactly as written in the above list.";  //If there is no match, the default code block is executed

  }

  document.getElementById("class_output").innerHTML = class_output;  // returns an Element object representing the element whose id property matches the specified string.

}


function myFunction() {               //created function

var x = document.getElementsByClassName("jeff");        //assigned variable x the value of the classname "jeff"
x[0].innerHTML = "Something happened";                   // two elemnts exist in classname "jeff" [0] and [1] , I've assigned[0]
                                                        

}

var c = document.getElementById("jeffrey");           //canvas
var ctx = c.getContext("2d");


var grd = ctx.createLinearGradient(0, 0, 170, 0);             //creates gradient
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");


ctx.fillStyle = grd;                                    // Fill with gradient
ctx.fillRect(20, 20, 150, 100);