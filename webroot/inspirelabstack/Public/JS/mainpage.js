var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}

var clicked = false;
function favorite(){
    var favorite = document.getElementById("favorite");
    if(clicked==false){
        favorite.style.color = "yellow";
        clicked = true;
    }else{
        favorite.style.color = "white";
        clicked = false;
    }
}