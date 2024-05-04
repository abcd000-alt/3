//<!--ACTIVITY 1-->
alert("This is an alert from external file JavaScript!");

/*var x = "Hello";
var y = "World";
var z = 1;
var a = 2;
var R1;
var R2;
R1 = x+y;
R2 = z +a;*/


//activity 2
var firstname = prompt("Enter your firstname: ");
var surename = prompt("Enter your Surename: ")

alert("Welcome " + firstname + " " + surename + "!");

//activity 4
var confirmation = confirm("Do you wish to receive the mailing list of the website?");
if (confirmation == true ){
    prompt("please enter your email address");
    alert("You are successfully registered");
}
else{
    alert("thank you for your response");
}

//activity 5
var cnfrm = confirm("do you wish to recieve the mailing list of the website?");

switch (cnfrm){
    case true:
        prompt("Pfakdfjklease enter your email address");
        alert("You are successfully registered");
        break; 
    default: 
        alert("thakkfjkjflank you for your response"); 
        break;
}


