/*-------Burger Icon---------*/
var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}
/*--------Page load----------*/

window.addEventListener("load",init);
function init(){
    const currentDate  = new Date();
    const dd = currentDate.getDate();
    const mm = currentDate.getMonth();
    const yyyy = currentDate.getFullYear();
    document.getElementById("date_output").innerHTML=`${dd}/${mm}/${yyyy}`;
    document.getElementById("hour_output").innerHTML= "07.00 am - 08.00am";
    document.getElementById("duration_output").innerHTML= "1 hrs (01 Normal: 00 Peak)";
    document.getElementById("tickets_output").innerHTML= "Charges";
    document.getElementById("faguest-input").innerHTML= "1 Foreigner Adult";
    document.getElementById("fa_output").innerHTML= "$10";
    document.getElementById("tp_output").innerHTML= "$10";
    localStorage.clear();
}
/*-------Date Picker---------*/
const datePicker = flatpickr("#pickadate",{
    dateFormat: "Y-m-d",
    mode:"single",
    onClose:function(selectedDates, dateSel){
        localStorage.setItem('selectedDate', dateSel);
        let choosedDate  = new Date(dateSel);
        const dd = choosedDate.getDate();
        const mm = choosedDate.getMonth()+1;
        const yyyy = choosedDate.getFullYear();
        document.getElementById("date_output").innerHTML=`${dd}/${mm}/${yyyy}`;
        localStorage.setItem("selectedDate",dateSel);
    }
});

const dropdown = document.getElementById("timeSlots");
dropdown.addEventListener("change",function(){
    const selectedOpt =Array.from(dropdown.options)
    .filter(option => option.selected)
    .map(option => option.innerHTML);
    document.getElementById("hour_output").innerHTML= selectedOpt;
    localStorage.setItem("selectedHours",selectedOpt);
});

/*------Guests-----------*/
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("pickadate").value = localStorage.getItem("selectedHours") || 0;
    document.getElementById("sladult").value = localStorage.getItem("SLadult") || 0;
    document.getElementById("slchild").value = localStorage.getItem("SLchild") || 0;
    document.getElementById("fadult").value = localStorage.getItem("Fadult") || 0;
    document.getElementById("fchild").value = localStorage.getItem("Fchild") || 0;
    document.getElementById("infant").value = localStorage.getItem("Infant") || 0;
    document.getElementById("hours").value = localStorage.getItem("selectedHours") || 0;

    const inputFields = document.querySelectorAll("input[type='number']");
    inputFields.forEach(function(input){
        input.addEventListener("change",function(){
            localStorage.setItem(input.id, input.value);
        });
       
    });
});
/*-------Ticket Charges-------*/
function calculatePrice(){
    const selectedTimeSlots = Array.from(document.getElementById("timeSlots").selectedOptions, option => parseInt(option.value));
    const slAdultTickets = parseInt(document.getElementById("sladult").value);
    const slChildTickets = parseInt(document.getElementById("slchild").value);
    const foreignerAdultTickets = parseInt(document.getElementById("fadult").value);
    const foreignerChildTickets = parseInt(document.getElementById("fchild").value);
    const infantTickets = parseInt(document.getElementById("infant").value);
  
    const peakHours = [13, 14, 15, 18, 19, 20];
  
    let totalPrice = 0;
    let slatPrice = 0;
    let slctPrice = 0;
    let fatPrice = 0;
    let fctPrice = 0;
    let nh=0;
    let ph=0;
    let th=0;
   
    selectedTimeSlots.forEach(timeSlot => {
      let price = 0;
  
      if (peakHours.includes(timeSlot)) {
        price += (slAdultTickets * 6) + (slChildTickets * 3) + (foreignerAdultTickets * 13) + (foreignerChildTickets * 8);
      ph++;
    } else {
        price += (slAdultTickets * 4) + (slChildTickets * 2) + (foreignerAdultTickets * 10) + (foreignerChildTickets * 5);
      nh++;
    }
    
      totalPrice += price;
      th=nh+ph;
    
    });
    document.getElementById("tp_output").innerHTML=`$ ${totalPrice}`;
    let tpoutput = document.getElementById("tp_output").innerHTML;
    localStorage.setItem("totaloutputs",tpoutput);
    document.getElementById("duration_output").innerHTML= `${th} hrs (${nh} Normal: ${ph} Peak)`;
    let doutput = document.getElementById("duration_output").innerHTML;
    localStorage.setItem("duoutputs",doutput);
   

    selectedTimeSlots.forEach(timeSlot => {
        let slaprice = 0;
    
        if (peakHours.includes(timeSlot)) {
          slaprice += (slAdultTickets * 6);
         
        } else {
          slaprice += (slAdultTickets * 4);
         
        }
    
        slatPrice+=slaprice;
       
      });

    document.getElementById("sla_output").innerHTML=`$ ${slatPrice}`;
    let slaoutput = document.getElementById("sla_output").innerHTML;
    localStorage.setItem("slaoutputs",slaoutput);
    
   
    selectedTimeSlots.forEach(timeSlot => {
        let slcprice = 0;
    
        if (peakHours.includes(timeSlot)) {
          slcprice += (slChildTickets * 3);
          
        } else {
          slcprice += (slChildTickets * 2);
          
        }
    
        slctPrice+=slcprice;
       
      });

    document.getElementById("slc_output").innerHTML=`$ ${slctPrice}`;
    let slcoutput = document.getElementById("slc_output").innerHTML;
    localStorage.setItem("slcoutputs",slcoutput);
 
    selectedTimeSlots.forEach(timeSlot => {
        let faprice = 0;
    
        if (peakHours.includes(timeSlot)) {
          faprice += (foreignerAdultTickets * 13);
          
        } else {
          faprice += (foreignerAdultTickets * 10);
          
        }
    
       
        fatPrice+=faprice;
        
      });

    document.getElementById("fa_output").innerHTML=`$ ${fatPrice}`;
    let faoutput = document.getElementById("fa_output").innerHTML;
    localStorage.setItem("faoutputs",faoutput);
    selectedTimeSlots.forEach(timeSlot => {
        let fcprice = 0;
    
        if (peakHours.includes(timeSlot)) {
          fcprice += (foreignerChildTickets * 8);
         
        } else {
          fcprice += (foreignerChildTickets * 5);
          
        }
    
       
        fctPrice+=fcprice;
      
      });

    document.getElementById("fc_output").innerHTML=`$ ${fctPrice}`;
    let fcoutput = document.getElementById("fc_output").innerHTML;
    localStorage.setItem("fcoutputs",fcoutput);
   
    
    selectedTimeSlots.forEach(timeSlot => {
      
    
        if (peakHours.includes(timeSlot)) {
           
         
        } else {
           
          
        }
    
       
      });
    document.getElementById("i_output").innerHTML="Free";
    let ioutput = document.getElementById("i_output").innerHTML;
    localStorage.setItem("ioutputs",ioutput);

}

/*----------Input Upadate-------*/

function upsla(){
let sladult = document.getElementById("sladult").value;
document.getElementById("slaguest-input").innerHTML=`${sladult} SL Adult`;
let slainput = document.getElementById("slaguest-input").innerHTML;
localStorage.setItem("slainputs",slainput);
};

function upslc(){
let slchild = document.getElementById("slchild").value;
document.getElementById("slcguest-input").innerHTML=`${slchild} SL Child`;
let slcinput = document.getElementById("slcguest-input").innerHTML;
localStorage.setItem("slcinputs",slcinput);
};


function upfa(){
let fadult = document.getElementById("fadult").value;
document.getElementById("faguest-input").innerHTML=`${fadult} Foreigner Adult`;
let fainput = document.getElementById("faguest-input").innerHTML;
localStorage.setItem("fainputs",fainput);
};


function upfc(){
let fchild = document.getElementById("fchild").value;
document.getElementById("fcguest-input").innerHTML=`${fchild} Foreigner Child`;
let fcinput = document.getElementById("fcguest-input").innerHTML;
localStorage.setItem("fcinputs",fcinput);
};


function upsli(){
let infant = document.getElementById("infant").value;
document.getElementById("iguest-input").innerHTML=`${infant} Infant`;
let iinput = document.getElementById("iguest-input").innerHTML;
localStorage.setItem("iinputs",iinput);
};



function double1(){
    calculatePrice();
    upsla();
    enableButton()
}
function double2(){
    calculatePrice();
    upslc();
    enableButton()
}
function double3(){
    calculatePrice();
    upfa();
    enableButton()
}
function double4(){
    calculatePrice();
    upfc();
    enableButton()
}
function double5(){
    calculatePrice();
    enableButton();
}

/*------Button-----------*/
function enableButton(){
    let fhours = document.getElementById("timeSlots").value;
    let chsndate = document.getElementById("pickadate").value;
    let slav = document.getElementById("sladult").value;
    let slcv = document.getElementById("slchild").value;
    let fav = document.getElementById("fadult").value;
    let fcv = document.getElementById("fchild").value;
    let iv = document.getElementById("infant").value;
    let continue_with_purchasebtn = document.getElementById("continue_with_purchasebtn");
    if(fhours != "" && chsndate != "" && slav != "" && slcv != "" && fav != "" && fcv != "" && iv != ""){
        continue_with_purchasebtn.disabled = false;
    }
    else{
        continue_with_purchasebtn.disabled = true; 
    }
}





 
   
    








