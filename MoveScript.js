//Jameson Brown
//this assignment drove me crazy
//I can't figure out how to make the image change directions

// global variables

var intervalID = 0;
var changeX =780;
var changeY=295;
var startButton = document.getElementById("start")
var stopButton = document.getElementById("stop")

function intervalStart()
{
    //allows sound to play when button clicked
    mysound = new sound ("cowGoMoo.mp3")
    mysound.play()
    //disables start button after pressed
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    var i = 0;
    var image = document.getElementById("memeImg");
    intervalID = setInterval(function() 
    {
        //moves left
        image.style.left = changeX+"px";
        //moves down
        image.style.top = changeY+"px";
       document.getElementById("msg").innerHTML = " X = " + image.style.left+ " y = " + image.style.top;
      changeX -=2; //if + would move right
      changeY +=2;//if - would move up
    },50);
}
function intervalStop()
{
   // document.getElementById("start").disabled = false;
    //document.getElementById("stop").disabled = true;
    //clearInterval(intervalID);
    //resets window
    window.location.reload()
}
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
}