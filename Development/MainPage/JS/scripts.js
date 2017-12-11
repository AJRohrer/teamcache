/*Accordion Menu*/
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

function loadRegistrationPage() {

    var actvtyspc = document.getElementById("activitySpace");

    actvtyspc.innerHTML='<object style="height:100%; width:100%" type="text/html" data="register.html" ></object>';

}

