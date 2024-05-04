var confirmation = confirm("Do you want to receive the mailing list of the website? ")
switch(confirmation){
    case true:
        prompt("Please enter your email address: ");
        alert("You are successfully registered!");
        break;
    
    default:
        alert("Thank you for your response!");
        break;
}