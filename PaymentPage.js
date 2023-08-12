var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

/*------Validation------*/

let card_number_error =  document.getElementById("card_number_error");
let expiry_date_error =  document.getElementById("expiry_date_error");
let cvc_cvv_error =  document.getElementById("cvc_cvv_error");
let name_on_card_error =  document.getElementById("name_on_card_error");

/*------Page load-----------*/

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
    let psmall= document.getElementById("paybtnsmall");
    let stpo = localStorage.getItem("totaloutputs");
    psmall.innerHTML = stpo;
}


function validateCardNo(){
    let card_number = document.getElementById("card_number").value;
    let mcrbtn = document.getElementById("mcard");
    let vcrbtn = document.getElementById("vcard");
    let aecrbtn = document.getElementById("aecard");
    if(card_number.length==0){
        card_number_error.innerHTML = "Card number is required";
        return false;
    }
    let rbtns = document.querySelectorAll('input[name="Card type"]');
    for(x in rbtns){
        if(mcrbtn.checked==true){
            if(!card_number.match(/^(?:5[1-5][0-9]{14})$/)){
                card_number_error.innerHTML="Write correct Master card number";
                return false;
            }
            else{
                card_number_error.innerHTML='<img src=icons8-check-mark-48.png>';
            return true;
            }
        }
        if(vcrbtn.checked==true){
            if(!card_number.match(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/)){
                card_number_error.innerHTML="Write correct Visa card number";
                return false;
            }
            else{
                card_number_error.innerHTML='<img src=icons8-check-mark-48.png>';
            return true;
            }
        }
        if(aecrbtn.checked==true){
            if(!card_number.match(/^(?:3[47][0-9]{13})$/)){
                card_number_error.innerHTML="Write correct American Express card number";
                return false;
            }
            else{
                card_number_error.innerHTML='<img src=icons8-check-mark-48.png>';
            return true;
            }
        }
    }
        
    
    card_number_error.innerHTML='<img src=icons8-check-mark-48.png>';
            return true;
   
   
}

function validateExDate(){
    let exmonth = document.getElementById("expiry_month").value;
    let exyear = document.getElementById("expiry_year").value;
    let today = new Date();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    if(exmonth.length == 0 || exyear.length == 0){
        expiry_date_error.innerHTML = "Expiry date is required";
        return false;
    }
    if(year>exyear || (year==exyear && month>= exmonth)){
        expiry_date_error.innerHTML = "Card is expired";
        return false;
    }
    expiry_date_error.innerHTML='<img src=icons8-check-mark-48.png>';
        return true;
    }
   



function validateCVCCVV(){
    let cvccvv = document.getElementById("cvc/cvv").value;
    if(cvccvv.length == 0){
        cvc_cvv_error.innerHTML = "CVC/CVV is required";
        return false;
    }
    if(!cvccvv.match(/^[0-9]{3}$/)){
        cvc_cvv_error.innerHTML = "CVC/CVV Invalid!";
        return false;
    }
    
    cvc_cvv_error.innerHTML='<img src=icons8-check-mark-48.png>';
    return true;
    
}
function validateNameOnCard(){
    let name_on_card = document.getElementById("name_on_card").value;
   
    if(name_on_card.length == 0){
        name_on_card_error.innerHTML = "Name on card is required";
        return false;
    }
    if(!name_on_card.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        name_on_card_error.innerHTML = "Name on card is Invalid!";
        return false;
    }
   
    name_on_card_error.innerHTML='<img src=icons8-check-mark-48.png>';
        return true;
   
 
}

/*------Button-----------*/

function enableButton(){
    let vcnumber = document.getElementById("card_number").value;
    let vexmonth = document.getElementById("expiry_month").value;
    let vexyear = document.getElementById("expiry_year").value;
    let vcvccvv = document.getElementById("cvc/cvv").value;
    let vnoc = document.getElementById("name_on_card").value;
    let pay_btn = document.getElementById("pay_btn");
    if(vcnumber != "" && vexmonth != "" && vexyear != "" &&  vcvccvv != "" && vnoc != ""){
        pay_btn.disabled = false;
    }
    else{
        pay_btn.disabled = true; 
    }
}
function combineFunction(){
    validateCardNo();
    validateExDate();
    validateCVCCVV();
    validateNameOnCard();
    enableButton();

}
