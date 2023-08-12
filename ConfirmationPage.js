var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

/*------Page load-----------*/

window.addEventListener("load",init);
function init(){
    let uname = localStorage.getItem("name");
    document.getElementById("name_output").innerHTML= uname;
    let chosdate = localStorage.getItem("selectedDate");
    document.getElementById("date_output").innerHTML=chosdate;
    let chostime = localStorage.getItem("selectedHours");
    document.getElementById("hour_output").innerHTML= chostime;
    let chosdura = localStorage.getItem("duoutputs");
    document.getElementById("duration_output").innerHTML= chosdura;
    let umobile = localStorage.getItem("phone");
    document.getElementById("mobile_output").innerHTML= umobile;
    let uemail = localStorage.getItem("email");
    document.getElementById("email_output").innerHTML= uemail;
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
