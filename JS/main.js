// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 5px";
    document.getElementById("logo").style.color = "black";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("logo").style.fontSize = "21px";
  } else {
    document.getElementById("navbar").style.padding = "12px 5px";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("logo").style.fontSize = "25px";
  }
}

