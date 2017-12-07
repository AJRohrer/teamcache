
$(document).ready(function () {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8000/getallprojects',
        contentType: 'application/json',
        success: function (projects) {
            console.log(JSON.stringify(projects));
            var html = '';
            
            for(var i = 0; i < projects.length; i++){
                html += '<section class="il-container-projectCard standardColor"><article class="il-item-projectcard"><section class="il-item-cardtitle"><article class="il-title">';
                html += '<h2>' + projects[i].title + '</h2>';
                html += '</article>';
                html += '<article class="il-item-heart"><span class="glyphicon glyphicon-heart" onclick="toggleFavorite(this)"></span></article></section></article>';
                
                for(var j = 0; j < projects[i].steps.length; j++){
                    html += '<article class="il-item-projectcard ">';
                    html += '<label>' + projects[i].steps[j] + '</label>';
                    html += '</article>';
                }

                html += '<article class="il-item-projectcard "><video class="cardMedia" controls >';
                html += '<source src=' + projects[i].media.video + 'type="video/mp4">';
                html += '</video></article>';

                html += '<article class="il-item-projectcard">';
                html += '<img class="cardMedia" src=' + projects[i].media.picture + '>';
                html += '</article>'

                html += '<article class="il-item-projectcard"><section class="il-container"><article class="il-item"><span class="cardLinks">Share</span></article><article class="il-item"><span class="cardLinks">Follow</span></article></section></article></section>';

                
            }
            document.getElementById("projectcards").innerHTML(html);
        }
    })
});

function populateCards(jsonCards){
    var html = '';
    return html;
}

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
    document.getElementById("file").setAttribute("style", "display: inline-block");
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


