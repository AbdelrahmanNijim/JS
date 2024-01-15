var registerForm = document.querySelector(".registerForm");

registerForm.onsubmit = function(e){

    e.preventDefault();
     
    var Num = e.target.elements; 
    var amount= Num['amount'].value;
   var Currency = document.getElementById("Ex").value;
    
   var FromILStoOtherCurrencys = {
    USD: 0.27, 
    JOD: 0.19, 
    ILS: 1 
  
  };

  var EXresult = amount*FromILStoOtherCurrencys[Currency];
  
  
   document.querySelector(".result").innerHTML=EXresult;
  

}
