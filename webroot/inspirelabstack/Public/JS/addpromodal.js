    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var counter = 1;
    var limit = 6;
    function addInput(divName){
         if (counter == limit)  {
              alert("You have reached the limit of adding " + counter + " details");
         }
         else {
              var newdiv = document.createElement('div');
              newdiv.innerHTML = "Project Detail " + (counter + 1) +": "+ " <input class='input' type='text' name='detail' placeholder='Details here...'>";
              document.getElementById(divName).appendChild(newdiv);
              counter++;
         }
    }
    