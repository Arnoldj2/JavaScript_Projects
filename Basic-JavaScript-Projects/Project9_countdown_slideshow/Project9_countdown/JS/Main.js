function countdown() {

  var seconds = document.getElementById("seconds").value; // accepts input value 

  function tick() {

    seconds = seconds - 1;  // -1 from each "second"
    timer.innerHTML = seconds;  // esult is output to the the element
    setTimeout(tick, 1000);      //  pauses for 1 second
    if(seconds == -1){            // if statement to output alert
      alert("Time's up!");
    }

    }

    tick();    // calls function

  }




