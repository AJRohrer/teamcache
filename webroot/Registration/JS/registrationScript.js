// JavaScript source code
function requiredInput(form) {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length < 2) {
            alert(inputs[i].name + " is too short");
            return false;
        }
    }
    return true;
}