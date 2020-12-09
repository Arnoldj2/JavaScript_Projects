

var X = 10; // global variable
function Add_numbers_1()  {   // function to perform calc with global variable
  document.write(20 + X + "<br>"); 

}

function Add_numbers_2()  {  // function to perform calc with global variable
  document.write(X + 100);

}

Add_numbers_1();      // call function
Add_numbers_2();      // call function



function Add_numbers_3()  {   // function to perform calc with ***local*** variable
  var Y = 100;    // local variable
  document.write(20 + Y + "<br>");

}

console.log("Hello world!");  // console log test 

function Add_numbers_4()  { // function to perform calc with local variable 
  
  document.write(Y + 100);

}

Add_numbers_3();    // call function
Add_numbers_4();    // call function -  - DOES NOT RETURN RESULT DUE TO VARIABLE ONLY BEING LOCAL TO PRIOR FUNC


function Add_numbers_A()  {   
  var A = 10;     
  console.log(15 + A );   //console log

}

function Add_numbers_B()  {   
  var A = 10;
  console.log( 100 + A );    //console log

}

console.log("Hello world2!");  //console log test 2

Add_numbers_A();
Add_numbers_B();


function get_Date() {

if (new Date().getHours() < 18) {                    // If statement thats compares the date to the hours in the day
  document.getElementById("Greeting").innerHTML = "how are you today?";
}


}

function time() {
  var time = new Date().getHours();   // created variable for the time of day
  if (time < 20) {              // If statement that compares the time of day varibale to less than 20 hours
    document.getElementById("good_day").innerHTML = "Good day";  // if true output is good day
  }
}

function Age_Function() {       //created function

  Age = document.getElementById("Age").value;      // named age variable which obtains its value from the input ID Age
  if (Age >= 18) {   // if statement
    Vote = "you are old enough to vote!";   //out if "IF" statement is true
  }

  else {

    Vote ="You are not old enough to vote!"; //else output  

  }

  document.getElementById("how_old_are_you?").innerHTML = Vote;   // display 

}


function Time_Function() {
  var time = new Date().getHours();   // variable obtains time of day
  var reply;                          // assigned variable reply

  if ( time < 12 == time > 0 ) {       //   if both statements are true output this
    reply = "it is morning time!";     
  }
  
  else if ( time > 12 == time < 18) {  // if both statements are true output this
    reply = "it is the afternoon";
  }

  else { 
    reply = "it is evengin time.";     // all else, out put this
  }
      document.getElementById("Time_of").innerHTML = reply;

  }


