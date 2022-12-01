var Big = document.getElementById("Big_img");
var small = document.getElementsByClassName("small_img");

small[0].onclick=function(){
    Big.src = small[0].src;
  }

small[1].onclick=function(){
    Big.src = small[1].src;
  }

small[2].onclick=function(){
    Big.src = small[2].src;
  }

small[3].onclick=function(){
    Big.src = small[3].src;
  }

function validate_checkoutForm() {
  let a = document.forms["myForm"]["fullname"].value;
  let b = document.forms["myForm"]["email"].value;
  let c = document.forms["myForm"]["address"].value;
  let d = document.forms["myForm"]["city"].value;
  let e = document.forms["myForm"]["state"].value;
  let f = document.forms["myForm"]["postal code"].value;
  let g = document.forms["myForm"]["card name"].value;
  let h = document.forms["myForm"]["card number"].value;
  let i = document.forms["myForm"]["month"].value;
  let j = document.forms["myForm"]["year"].value;
  let k = document.forms["myForm"]["cvv"].value;

  if((a=="")||(b=="")||(c=="")||(d=="")||(e=="")||(f=="")||(g=="")||(h=="")||(i=="")||(j=="")||(k=="")){
    alert("Please fill in all of the blank.");
    return false;
  }
  else{
    alert("Your order has placed successfully.");
    return true;
  }
}

function display(){
  var nav = document.getElementById("navigation_bar")
  nav.classList.add("show");
}

function display2(){
  var nav = document.getElementsByClassName("sidenav")
  nav[0].classList.add("show");
}

function closing2(){
  var nav = document.getElementsByClassName("sidenav")
  nav[0].classList.remove("show");
}

function closing(){
  var nav = document.getElementById("navigation_bar")
  nav.classList.remove("show");
}

var removeCart = document.getElementsByClassName("remove");

for (var i=0; i < removeCart.length;i++){
  var button = removeCart[i];
  button.addEventListener("click",function(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();


  })
}





