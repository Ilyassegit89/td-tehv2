let btntoscrl = document.querySelector(".scrolldown");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.scrollY >= 20 ) {
    document.querySelector(".navBar").style.backgroundColor = "#d1e0fc";
  }
   if(window.scrollY <= 0) {
    document.querySelector(".navBar").style.backgroundColor = "transparent";
  }
} 


btntoscrl.onclick = function(e){
  window.scrollTo({
    left:0,
    top: 5000,
    behavior:"smooth"
  })

  e.preventDefault();
}


