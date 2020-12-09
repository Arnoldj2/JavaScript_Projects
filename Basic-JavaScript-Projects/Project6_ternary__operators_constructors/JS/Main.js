

 

  document.write(Bigger=(5>1) ? "Left number is bigger":"Right number is bigger");  // Ternary Operator - assigned variable based on condition

  function ride_function() { //created function

    var height, can_ride; // named two variable
    height = document.getElementById("height").value; // 1st varible "height" = input value
    can_ride = (height<52) ? "You are too short" :"You are tall enough";  // 2nd variable "can ride" is assigned a value based on the condition of the 1st variable
    document.getElementById("Ride").innerHTML = can_ride + " to ride." ; // outputs 2nd variable value


  }

  function age_function() { //created function

    var age, can_vote; // named two variable
    age = document.getElementById("age").value; // 1st varible "age" = input value
    can_vote = (age<18) ? "You are not old enough" :"You are old enough";  // 2nd variable "can vote" is assigned a value based on the condition of the 1st variable
    document.getElementById("vote").innerHTML = can_vote + " to vote." ; // outputs 2nd variable value


  }


  function Vehicle(Make, Model, Year, Color)  {               // Constructor function for vehicle objects
   

    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
    
    
  }

  var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");            // Created three objects
  var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "while and Black");
  var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");



  function myFunction(){                  // this will display the vehicle details

    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + 
    
    "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;

  }



    function countFunction() {                 
                    
      document.getElementById("Nested_Function").innerHTML = Count();    

          function Count() {                                            //created function
              var Starting_point = 10;                                  //assigned variable
              function Plus_one() { Starting_point += 1;}               //Nested function
              Plus_one();                                              // call to add one             
              return Starting_point                                    // return value

      
          }



    }

