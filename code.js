/* Jameson Brown */
function funcPlay()
{
    /*generates random number between 1 and 6*/
    var randNum1 = Math.ceil(Math.random()*6);

    /*generates another number between 1 and 6*/
    var randNum2 = Math.ceil(Math.random()*6);

    /*adds the two previous numbers together*/
    var sum = randNum1+randNum2;

    /*creates text showing the different listed variables*/
    document.getElementById("sumTag").innerHTML = "sum = " + sum;
    document.getElementById("num1").innerHTML = "first roll = " + randNum1
    document.getElementById("num2").innerHTML = "second roll = " + randNum2

    /*if/else if/else sets perameters for what is shown on screen, based on previous variables*/
    if (sum ==11 || sum ==7)
    {
       document.getElementById("Results").innerHTML = "CRAPS - You lose :("
    }

    else if (sum ==7)
    {
      document.getElementById("Results").innerHTML = "CRAPS - You lose :("
    }

    else if (randNum1 ==randNum2 && randNum1 % 2 ==0)
    {
        document.getElementById("Results").innerHTML = "You Won! :D"
    
    }
    
    else
    {
        document.getElementById("Results").innerHTML = "You Pushed :/"
    };

}
