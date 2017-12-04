
var projects = {};
$(document).ready(function () {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/getallprojects',
        contentType: 'application/json',
        success: function (projects) {
            console.log(JSON.stringify(projects));

            const template = $('#project_template').html()
            const container = $('#activitySpace');

            for (let i = 0; i < projects.length; i++) {
                // for (let j = 0; j < projects.steps.length; j++){
                //     console.log(projects[i].steps[j]);
                // }
                container.append(Mustache.render(template, projects[i]))
            }


        }
    })
});

function toggleFavorite(myelement) {
    if (myelement.style.color != "red") {
        myelement.style.color = "red";
        //add item to user favorites here once connected to db.
    }
    else {
        myelement.style.color = "white";
        //remove item from user favorites here once connected to db.
    }
}


function displayFileUpload() {
    document.getElementById("file").setAttribute("style", "visibility: visible");
}

var fileClose = document.getElementById("file-close");
fileClose.onclick = function () {
    document.getElementById("file").setAttribute("style", "visibility: hidden");
}

document.getElementById("fileName").onchange = function (evt) {
    var target = evt.target || window.event.srcElement, files = target.files;

    if (FileReader && files && files.length) {
        var reader = new FileReader();
        reader.onload = function () {
            document.getElementById("profileImg").src = reader.result;
        }
        reader.readAsDataURL(files[0]);
        document.getElementById("file").setAttribute("style", "visibility: hidden");
    } else {
        alert("File not supported");
    }
}

//Get project data from a json format. This will eventually call the database that will return
//json data.
function getProjects() {
    var $deferredNotesRequest = $.getJSON("../data/testprojects.json", { format: "json" });
}

//when getProjects request is done render each of the project tiles.
$.when(getProjects()).done(function (response) {
    var $projects = response.projectProperties //projectProperties is the name in the json file.
    $projects.forEach(function (item) {
        createProject(item.project);
    });
});

/*Nav-Bar*/

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


