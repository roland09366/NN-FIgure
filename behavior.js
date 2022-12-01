var number = document.getElementById("number");
var length = document.getElementById("length");
var symbol = document.getElementById("symbol");
var Input = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");

// When the user clicks on the password field, show the message box
Input.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
Input.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
Input.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(Input.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(Input.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(Input.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(Input.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  // Validate special symbol from ASCII 33 TO 47
  var symbols = /[!-/]/g
  if(Input.value.match(symbols)) {  
    symbol.classList.remove("invalid");
    symbol.classList.add("valid");
  } else {
    symbol.classList.remove("valid");
    symbol.classList.add("invalid");
  }
}

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  let y = document.forms["myForm"]["email"].value;
  let z = document.forms["myForm"]["subject"].value;
  if ((x != "") && (y!="") &&(z != "")){
    alert("We will get back to you soon.Please be patience while waiting, thank you so much.");
    return true;
  }
  else{
    alert("Please fill in all of the blank.(Phone number is optional)");
    return false;
  }

  }

function validateloginForm() {
    var Input = document.getElementById("psw");
    let x = document.forms["myForm"]["password"].value;
    let z = document.forms["myForm"]["username"].value;
    if ((x != "") && (z != "")){
      window.alert("Hi "+z+"! You have successfully sign in.");
      return true;
    }
    else{
      alert("Please fill in all of the blank.");
      return false;
    }
  
    }

function validate_signupForm() {
  let x = document.forms["myForm"]["password"].value;
  let y = document.forms["myForm"]["username"].value;
  let z = document.forms["myForm"]["psw"].value;

  if  ((x == "")||(y == "")||(z == "")){
    alert("Please fill in all of the blank.(Email is optional)")
    return false;
  }

  else if (x != z){
    window.alert("Password didn't match. Please re-enter your password.");
    return false;
    }

  else {
    alert("You have sign up successfully.");
    return true;
  }
    
}




  