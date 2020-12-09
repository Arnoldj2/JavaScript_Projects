//this variable keeps track of whos turn it is.

let activePlayer = 'X';

//this array stores an array of moves. We use this to determine win conditions.

let selectedSquares = [];

//this function is for placing an X or O in a square.

function placeXOrO(squareNumber) {

    //this condition ensures a square hasnt been selected already
    //this .some() method is used to check each element of selectedSquare array to
    // see if it contains the square number clicked on.

    if (!selectedSquares.some(element => element.includes(squareNumber))) {

        //this variable retrieves the html element id that was clicked.

        let select = document.getElementById(squareNumber);

        //this condition checks whos turn it is.

        if (activePlayer ==='X') {

            //If activeplayer is equal to 'X', the x.png is placed in HTML.

            select.style.backgroundImage = 'url("./images/x2.jpg")';

        //active player may only be "X" or "O" so, if not "X" it must be "O"

        } else {

            // if aciveplayer is equal to "O" the o.png is placed in HTML.

            select.style.backgroundImage = 'url("./images/o2.png")';
        }

        //squareNumber and activePlayer are concatentated together and added to array.

        selectedSquares.push(squareNumber + activePlayer);

        //this calls a function to check for any win conditiions.

        checkWinConditions();

        //This condition is for changing the active palyer.

        if (activePlayer ==='X')  {

            //if active player is 'X' change it to "O"

            activePlayer = 'O';

            //if active player is anything other than'X'

        } else {

            //change the active player to 'X'

            activePlayer = 'X';
        }








        //This functions plays placement sound.

        audio('./media/place2.wav');

        //this condition checks to see if it is computers turn.

        if(activePlayer ==="O"){

            //This function disables clicking for computer choice.

            disableClick();

            //this function waits 1 second before placing the image
            //and enabling click.

            setTimeout(function (){ computersTurn(); }, 1000);
        }

        //returning true is need for our computersTurn() function to work.

        return true;

    }

            // this function results in a random square being selected.

        function computersTurn() {

            //This boolean is needed for our while loop.

            let success = false;

            //this variable stores a random number 0 -8 

            let pickASquare;

            //this confitions allows our while loop to keep
            //trying if a square is selected already.

            while(!success){

                //a random number between 0 and 8 is selected

                pickASquare = String(Math.floor(Math.random() * 9));

                //if the random number evaluates returns true, the square hasnt been selected yet.

                if (placeXOrO(pickASquare)) {

                    //this line calls the function

                    placeXOrO(pickASquare);
                    
                    //this changes out boolean and ends the loop/

                    success = true;
            };

        }
    }

}


//this function parses the selectedSquares array to search for win conditions.
//drawWinLine function is called to draw line if condition is met.

function checkWinConditions() {
    // X 0, 1, 2 condition.
    if      (arrayIncludes('0X', '1X', '2X'))  { drawWinLine(50, 100, 558, 100) ; }
    // X 3, 4, 5 condition.
    else if (arrayIncludes('3X', '4X', '5X'))  { drawWinLine(50, 304, 558, 304) ; }
    // X 6, 7, 8 condition.
    else if (arrayIncludes('6X', '7X', '8X'))  { drawWinLine(50, 508, 558, 508) ; }
    // X 0, 3, 6 condition
    else if (arrayIncludes('0X', '3X', '6X'))  { drawWinLine(100, 50, 100, 558) ; }
    // X 1, 4, 7 condition.
    else if (arrayIncludes('1X', '4X', '7X'))  { drawWinLine(304, 50, 304, 558) ; }
    // X 2, 5, 8 condition.
    else if (arrayIncludes('2X', '5X', '8X'))  { drawWinLine(508, 50, 508, 558) ; }
    // X 6, 4, 2 condition.
    else if (arrayIncludes('6X', '4X', '2X'))  { drawWinLine(100, 508, 510, 90) ; }
    // X 0, 4, 8 condition.
    else if (arrayIncludes('0X', '4X', '8X'))  { drawWinLine(100, 100, 520, 520) ; }
    

        // O 0, 1, 2 condition.
        else if (arrayIncludes('0O', '1O', '2O'))  { drawWinLine(50, 100, 558, 100) ; }
        // O 3, 4, 5 condition.
        else if (arrayIncludes('3O', '4O', '5O'))  { drawWinLine(50, 304, 558, 304) ; }
        // O 6, 7, 8 condition.
        else if (arrayIncludes('6O', '7O', '8O'))  { drawWinLine(50, 508, 558, 508) ; }
        // O 0, 3, 6 condition
        else if (arrayIncludes('0O', '3O', '6O'))  { drawWinLine(100, 50, 100, 558) ; }
        // O 1, 4, 7 condition.
        else if (arrayIncludes('1O', '4O', '7O'))  { drawWinLine(304, 50, 304, 558) ; }
        // O 2, 5, 8 condition.
        else if (arrayIncludes('2O', '5O', '8O'))  { drawWinLine(508, 50, 508, 558) ; }
        // O 6, 4, 2 condition.
        else if (arrayIncludes('6O', '4O', '2O'))  { drawWinLine(100, 508, 510, 90) ; }
        // O 0, 4, 8 condition.
        else if (arrayIncludes('0O', '4O', '8O'))  { drawWinLine(100, 100, 520, 520) ; }

    //this condition checks for tie. If none of the above conditions register
    // and 9 squares are selected, the code executes.

    else if (selectedSquares.length >= 9) {

        //this function plays the tie game sound.

        audio('./media/tie2.wav');

        //this function sets a .3 second timeer before the resetGame is called.

        setTimeout(function () { resetGame(); }, 1000);
    }

    //this fucntions checks if an array incldues 3 strings//
    //it is used to check for each win condition.

    function arrayIncludes(squareA, squareB, squareC) {
        //the next 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the 3 variables we pass are all included in our array true is 
        // returned and out else if conditions executes the drawWinLine function.
        if (a === true && b === true && c === true) { return true; }

    }


}


//This function makes our body element temporarily unclickable.
function disableClick() {

    //this makes ou body unclickable

    body.style.pointerEvents = 'none';

    //this makes our body clickable again after 1 second.

    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);

}

//this function takes a string parameter of the path you set earlier for
//placement sound ('./media/place.mp3')

function audio(audioURL) {
    //we create a new audio object and we pass the path as a parameter 
    let audio = new Audio(audioURL);
    //play method plays our audio sound.
    audio.play();

}



//this function utilizes html canvas to draw win lines

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line accesses outhtml canvas element
    const canvas =document.getElementById('win-lines');
    //this line gives us access to methords and properties to used on canvas.
    const c = canvas.getContext('2d');
    //this line indicates where the start of a lines x axis is.
    let x1 = coordX1,
        //this lines indicates where the start of a lines y axis is.
        y1 = coordY1,
        //this line indicates where the end of the lines x axis is.
        x2 = coordX2,
        //this line indicates where the end of a lines y axis is.
        y2 = coordY2,
        //This variable stores temporary x axis data we update in our animation loop.
        x = x1,
        //this variable stores temporary t axis data we updated in our animation loop.
        y = y1;


    
    //this function interacts with the cavnas
    function animateLineDrawing() {
        //this variable creates the lopp for when the game ends it restarts.
        const animationLoop =requestAnimationFrame(animateLineDrawing);
        //this method clears content from last loop iteration.
        c.clearRect(0, 0, 608, 608);
        //this method starts a new path
        c.beginPath();
        //This method moves us to a starting point for our line.
        c.moveTo(x1, y1);
        //this method indicates the end point in our line.
        c.lineTo(x, y);
        //this method sets the width of our line.
        c.lineWidth = 10;
        //this method set the color of our line.
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //this methord draws everyting we laid out above
        c.stroke();
        //This condition chceks if we've reached the endpoint.
        if (x1 <= x2 && y1 <= y2) {
            // this condition adds 10  to the previous end x point
            if (x < x2) { x += 10;}
            // this confition adds 10 to the previous end y point
            if (y < y2) { y += 10;}
            //this condition cancels our animation loop is reach the end points
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }

        }

        //this condition is similar to the one above.
        // it was necessary for the 6 4 and 2 win condition/

        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }

    }

    //this functions clears our canvas after out win line is drawn
    function clear() {

        //This line starts our animation loop.
        const animationLoop = requestAnimationFrame(clear);
        //this line clears our canvas.
        c.clearRect(0, 0, 608, 608) ;
        //this line stops our animation loop.
        cancelAnimationFrame(animationLoop);

    }

    //This line disallows clicking while the win sounds is playing

    disableClick();
    //This line plays the win sounds.
    audio('./media/winGame2.wav');
    //this line calls our main animation loop/
    animateLineDrawing();
    //this line waits 1 second.
    // then clears the canvas,  resets the game.  and allows cliking again
    setTimeout(function () {clear(); resetGame(); }, 1000);

}

//this fucntion resets the game in a tier or a win.
function resetGame() {
    //this for loop iterates through each HTML square element

    for (let i = 0; i < 9; i++) {

        //this varibale gets the html element of I.
        let square = document.getElementById(String(i));
        //this removes out elecments backgroundimage.
        square.style.backgroundImage = '';
        
    } 

    //this resets our array so it is empty and we can start over/
    selectedSquares = [];

}