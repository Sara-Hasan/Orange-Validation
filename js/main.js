


var email = document.getElementById("InputEmail");
var mobile = document.getElementById("exampleInputmobile");
var password = document.getElementById("exampleInputPassword1");
var invalid = document.querySelectorAll(".invalid-feedback");
var checkBox = document.getElementById("exampleCheck1");
var mybtn = document.getElementById("btnn");
//console.log(email.innerHTML);

mybtn.addEventListener("click", () => {
  //console.log(mobile.value);
  //console.log(email.value);
  if (email.value == "") {
    invalid[0].innerHTML = "The email field is required.";
  }
  if( /^[A-ZA-z0-9._-]+@(hotmail|gmail|yahoo).com$/.test(email.value) == false && email.value !== ""){
    invalid[0].innerHTML ='The email must be a valid email address.';
  }
  if( /077[0-9]{7}/gm.test(mobile.value) == false && mobile.value !== ""){
    invalid[1].innerHTML =' orange number';
}
  if (mobile.value == "") {
    invalid[1].innerHTML = "The mobile field is required.";
  }
  if (password.value == "") {
    invalid[2].innerHTML = "The password field is required.";
  }
  if(checkBox.checked == false){
    invalid[3].innerHTML ='The Terms & Conditions Not Checked';
}
// console.log(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#?&])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,18}$/.test(password.value));
// console.log(password.value);
try {
  if( /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#?&])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,18}$/.test(password.value) == false && password.value !== ""){
    throw 'The Password should be between 6-18 characters.';
  }
}
catch (error){
  invalid[2].innerHTML = error;
}
});
mybtn.addEventListener('blur', () => {
    //console.log(checkBox.checked);
    if(checkBox.checked == false){
        invalid[3].innerHTML ='The Terms & Conditions Not Checked';
    }
});




