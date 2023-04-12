import './JS/dispnavonscl';
import './JS/ValidationForm';


let btnplan = document.querySelector(".btn");
          
let closepop = document.querySelector(".close")

btnplan.onclick = function(e){
    
    document.getElementById("popup-container").style.display = "block";
    e.preventDefault();
}

closepop.onclick = function(){
    document.getElementById("popup-container").style.display = "none";
}


  


