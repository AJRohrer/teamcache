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

var view = {
    Title: "View Stars",
    Step1: "Get a telescope",
    Step2: "Set a viewing angle",
    Step3: "Look through the lense",
    Video: "<source src=\"../media/video/stars.mp4\" type=\"video/mp4\">",
    Picture: "<img src=\"../media/images/stars.jpg\" class=\"cardMedia\">"
};

function addItem(container, template) {
    container.append(Mustache.render(template, view));
};
  
/*This runs on start of the website.*/
$(() => {
    const tmpl = $('#project_template').html()
    const container = $('#activitySpace');
    for(let i=0; i<9; i++) { addItem(container, tmpl); }
});