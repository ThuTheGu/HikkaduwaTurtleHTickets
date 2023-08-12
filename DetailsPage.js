var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}
/*-------Phone------*/
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

/*------Validation------*/
let fullnameError =  document.getElementById("fullname-error");
let mobilenumberError =  document.getElementById("mobilenumber-error");
let emailError =  document.getElementById("email-error");
let confirmemailError =  document.getElementById("confirm-email-error");
let fullName;
let mobileNumber;
let email;
let confirmemail;

window.addEventListener("load",init);
function init(){
    let chosdate = localStorage.getItem("selectedDate");
    document.getElementById("date_output").innerHTML=chosdate;
    let chostime = localStorage.getItem("selectedHours");
    document.getElementById("hour_output").innerHTML= chostime;
    let chosdura = localStorage.getItem("duoutputs");
    document.getElementById("duration_output").innerHTML= chosdura;
    document.getElementById("tickets_output").innerHTML= "Charges";
    let slai = localStorage.getItem("slainputs");
    document.getElementById("slaguest-input").innerHTML= slai;
    let slao = localStorage.getItem("slaoutputs");
    document.getElementById("sla_output").innerHTML= slao;
    let slci = localStorage.getItem("slcinputs");
    document.getElementById("slcguest-input").innerHTML= slci;
    let slco = localStorage.getItem("slcoutputs");
    document.getElementById("slc_output").innerHTML= slco;
    let fai = localStorage.getItem("fainputs");
    document.getElementById("faguest-input").innerHTML= fai;
    let fao = localStorage.getItem("faoutputs");
    document.getElementById("fa_output").innerHTML= fao;
    let fci = localStorage.getItem("fcinputs");
    document.getElementById("fcguest-input").innerHTML= fci;
    let fco = localStorage.getItem("fcoutputs");
    document.getElementById("fc_output").innerHTML= fco;
    let ifi= localStorage.getItem("iinputs");
    document.getElementById("iguest-input").innerHTML= ifi;
    let ifo= localStorage.getItem("ioutputs");
    document.getElementById("i_output").innerHTML= ifo;
    let tpo = localStorage.getItem("totaloutputs");
    document.getElementById("tp_output").innerHTML= tpo;
   
}

function validateName(){
    fullName = document.getElementById("full-name").value;
    if(fullName.length==0){
        fullnameError.innerHTML = "Name is required";
        return false;
    }
    if(!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        fullnameError.innerHTML="Write full name";
        return false;
    }
    fullnameError.innerHTML='<img src=icons8-check-mark-48.png>';
    localStorage.setItem("name",fullName);
    return true;
  
   
}

function validatePhone(){
    mobileNumber = document.getElementById("phone").value;
    if(mobileNumber.length == 0){
        mobilenumberError.innerHTML = "Mobile number is required";
        return false;
    }
    if(!mobileNumber.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
        mobilenumberError.innerHTML = "Mobile number Invalid!";
        return false;
    }
   
      mobilenumberError.innerHTML='<img src=icons8-check-mark-48.png>';
      localStorage.setItem("phone",mobileNumber);
      return true;
        
    }
 

function validateEmail(){
    email = document.getElementById("email").value;
    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email Invalid!";
        return false;
    }
    
    emailError.innerHTML='<img src=icons8-check-mark-48.png>';
    localStorage.setItem("email",email);
    return true;
    
}
function validateConEmail(){
    confirmemail = document.getElementById("confirm-email").value;
   
    if(confirmemail.length == 0){
        confirmemailError.innerHTML = "Confirm email is required";
        return false;
    }
    if(!confirmemail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        confirmemailError.innerHTML = "Confirm email Invalid!";
        return false;
    }
    if(confirmemail!=email){
        confirmemailError.innerHTML = "Confirm email is not matched";
        return false;
    }
        confirmemailError.innerHTML='<img src=icons8-check-mark-48.png>';
        return true;
       
}
/*-------Button------*/
function enableButton(){
    let vname = document.getElementById("full-name").value;
    let vphone = document.getElementById("phone").value;
    let vemail = document.getElementById("email").value;
    let vcemail = document.getElementById("confirm-email").value;
    let continue_with_purchasebtn = document.getElementById("continue_with_purchasebtn");
    if(vname != "" && vphone != "" && vemail != "" && vcemail != ""){
        continue_with_purchasebtn.disabled = false;
    }
    else{
        continue_with_purchasebtn.disabled = true; 
    }
}
function combineFunction(){
    enableButton();
    validateName();
    validatePhone();
    validateEmail()
    validateConEmail();
}













   


