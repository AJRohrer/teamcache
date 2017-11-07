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

function displayFileUpload(){
    document.getElementById("file").setAttribute("style","visibility: visible");
}

var fileClose = document.getElementById("file-close");
fileClose.onclick = function(){
    document.getElementById("file").setAttribute("style","visibility: hidden")
}

document.getElementById("fileName").onchange = function(evt){
    var target = evt.target || window.event.srcElement, files =target.files;

    if(FileReader && files && files.length){
        var reader = new FileReader();
        reader.onload = function(){
            document.getElementById("profileImg").src = reader.result;
        }
        reader.readAsDataURL(files[0]);
        document.getElementById("file").setAttribute("style","visibility: hidden")
    }else{
        alert("booooo");
    }
}
