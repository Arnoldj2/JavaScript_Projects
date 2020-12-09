
function validateForm() {                 //created function to validate form

    var x = document.forms["myForm"]["firstname"].value;  // variable x is assigned the input value of "firstname" field

    if (x == "") {                              // if variable x is equal to blank 
      alert("All fields must be complete");     // output alert 
       return false                             

    }
  }