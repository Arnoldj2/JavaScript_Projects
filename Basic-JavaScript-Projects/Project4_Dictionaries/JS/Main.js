
function myDictionary() {   //created dictionary

var Snakes = {    // created variable 

  Species: "King Cobra",   // assigned key-value pairs
  Age: 12,
  Weight: "40lbs",
  Length: "15ft",
  Venomous: "Yes",
  Color: "Black",
};
delete Snakes.Weight  //deletes value weight
document.getElementById("Dictionary").innerHTML = Snakes.Weight;  //defined output

}
