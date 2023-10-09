//Jameson Brown
function strings()
{
    var str1 = document.getElementById("initString").value; //the entry box for palindrome
    

    var str2 = str1.substring(0,3);
    

    // examplestr2 = str1.replace(/qwe/i, "asd") //i = case insensitive/ meaning uppercase or lower case works

    
    str1 = str1.toLowerCase();


    var splitString = str1.split(""); //seperates letters

    var reverseString = splitString.reverse(); //reverses letter

    var joinString = reverseString.join(""); //joins letters again

    if (str1 ==joinString) //if the var joinString is equal to str1 then it is a palindrome
    {
       //palindrome
        document.getElementById("updated String").innerHTML = "This IS a palindrome!"
        document.getElementById("Insert another?").innerHTML = "Want to know a secret? Keep scrolling!"
    }

    else
    {
       //not palindorme
       document.getElementById("updated String").innerHTML = "This is NOT a palindrome"
       document.getElementById("Insert another?").innerHTML = "Insert another word!"
    }


}

 function formCheck()
{
    var firstName = document.getElementById("fName").value; //first name entry box


    var lastName = document.getElementById("lName").value; //last name entry box

    var fullName = firstName + lastName; //combination of both names

    var len = fullName.length; //checks the length of the combined names
    
    var zipCode = document.getElementById("zCode").value; //zip code entry box

    var zLen = zipCode.length //checks length of zip code
    if (len <20 && zLen ==5) //if length of name is under 20 and zip code equals 5 digits, it will work
    {
        document.getElementById("nameResults").innerHTML = "Here's the secret!"
        document.getElementById("secret").innerHTML = "You're doing great! I am so proud of you for getting so far in life, so keep working hard and achieve your dreams!"
    }

    else //if doesnt meet previous conditions, will give result below
    {
        document.getElementById("nameResults").innerHTML = "Error- Name or Zip Code is Invalid. Zip code must be 5 digits! Name has to be under 20 characters, over 3!"
        document.getElementById("secret").innerHTML = ""
    }
}