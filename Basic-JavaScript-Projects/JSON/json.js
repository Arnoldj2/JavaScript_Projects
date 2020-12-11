
/* JaveScript dictionary object*/

var mylist = { "name":"Jeff", "age":36, "city":"Salt Lake City" };

/* conver JavaScript pbjects to string format */

var myJSON = JSON.stringify(mylist);

document.getElementById("thislist").innerHTML = myJSON;




/* JSON string variable */

var jeffsonstring = ' {"name":"Jeff","age":36,"city":"Salt Lake City"}';

/* convert JSON string variale to Javascript objects */

var JSONString= JSON.parse(jeffsonstring);

document.getElementById('thislist2').innerHTML = JSONString.name + " is " + JSONString.age;

// Check browser support
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }


