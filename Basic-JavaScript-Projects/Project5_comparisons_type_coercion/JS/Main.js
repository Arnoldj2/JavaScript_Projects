
document.write(typeof "word")    //typeof string

document.write(typeof 3)      // typeof number




function my_Function() {     //created function

document.getElementById("Test").innerHTML = 0/0 ;  //  0/0 returns the results NaN ( not a number ) because you can’t divide 0 by 0.

}

function my_Function1() {     //created function

  document.getElementById("Test1").innerHTML = isNaN ('this is a string') ;  // testing to see if result is not a number - outcome true
  
  }


  function my_Function2() {     //created function

    document.getElementById("Test2").innerHTML = isNaN ('007'); // testing to see if result is not a number - outcome false
    }


  document.write(2E310); // result "infinity"

  document.write(-3E310); // result "-infinity"


  function my_Function3() {     //created function

    document.getElementById("Test3").innerHTML = 1.7976931348623157E+10308 + "<br>" +  -1.7976931348623157E+10308; // wrote a large enough number to display infinity and - infinity
    }


    document.write(10>2); //  true statement

    document.write(10<2); // false statement

    console.log(2+2); // display result in console log

    document.write("10" + 5);   // coercion for 105 result ( string with number)

    console.log(10<2); // display false in console log

    document.write( 10==10); // true comparison

    document.write(10==3);  // false comparison

    A = "Magnus";
    B = "Magnus";
    document.write(A===B);  //Returns true by ensuring to match the data type and value.

  X = 90;
  Y = "90";
  document.write(X===Y); // Returns false by writing a different data type but the same value for both.

  R = 90
  T = "trash"
document.write(R===Y); //Return false by writing a different data type and different value.

M = "garbage"
B = "trash"
document.write(R===Y); // Return false by writing the same data type but a different value for both.

document.write(5>2 && 10>4);  // AND written: &&   true

document.write(5>10 && 10>4); // AND written: &&  false

document.write(5>10 || 10>4); // OR written: ||  true

document.write(5>10 || 10>20); //  OR written: ||  false

function my_Function4() {     //created function

  document.getElementById("Not").innerHTML = ! ( 20>10 ); //  If ___ is true, “false” will be returned using the (not) operator
  }


  function my_Function5() {     //created function

    document.getElementById("Not1").innerHTML = ! ( 5>10 ); //  double negative returns true
    }
  