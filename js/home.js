// All action items go here to change and adapt according to the user's actions when navigating through the UI

/*$("#trigger_builder").click(function() {
    //$( "#dialog" ).dialog();
    //$("#dialog").dialog({title: "Welcome to Resume Builder"});
  });*/

function createModal() {
    /*<div class="modal fade" id="dialog" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Welcome to the Resume Builder</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Let's get started!
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <a href="resumebuilder.html"><button type="button" class="btn btn-primary">Continue</button></a>
          </div>
        </div>
      </div>*/
}
var firstName = "First Name";
var lastName = "First Name";
var eMail = "email@domain.com";

function myFunction1()
{
    firstName = document.getElementById("first_name").value;
    lastName = document.getElementById("last_name").value; 
    eMail = document.getElementById("e_mail").value; 
}
function myFunction2() {
     var x = document.getElementById("myDIV");
     if (x.style.display === "none") {
         x.style.display = "block";
     } else {
         x.style.display = "none";
     }
     var y = document.getElementById("myDoc");
    if (y.style.display === "none") {
         y.style.display = "block";
     } else {
         y.style.display = "none";
     }
     document.getElementById("output1").innerHTML = firstName+" "+lastName;
     document.getElementById("output2").innerHTML = eMail;
}
$('.word-export').click(function(events){
                $('.word-content').wordExport();
});