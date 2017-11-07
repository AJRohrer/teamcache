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
    Video: "../media/video/stars.mp4",
    Picture: "../media/images/stars.jpg"
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

//Get project data from a json format. This will eventually call the database that will return
//json data.
function getProjects() {
    var $deferredNotesRequest = $.getJSON("../data/testprojects.json", {format: "json"});
}

//when getProjects request is done render each of the project tiles.
$.when(getProjects()).done(function(response){
    var $projects = response.projectProperties //projectProperties is the name in the json file.
    $projects.forEach(function(item){
        createProject(item.project);
    });
});
