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
var summary = "Add an executive summary to highlight your skills, background, and character. Not too long, but enough for your future employer to get to know you.";
var phoneNum = "123.456.7890";
var templateNumber = 0;
function template1()
{
    templateNumber = 1;
}
function template2()
{
    templateNumber = 2;
}
function template3()
{
    templateNumber = 3;
}
function template4()
{
    templateNumber = 4;
}
function modalinput1()
{
    firstName = document.getElementById("first_name").value;
    lastName = document.getElementById("last_name").value; 
    eMail = document.getElementById("e_mail").value;
    phoneNum = document.getElementById("phone_num").value;
}
function modalinput3()
{
    summary = document.getElementById("sum_mary").value;
}
function modalinput2() {
    summary = document.getElementById("sum_mary").value;
    
     if(templateNumber === 1){
         var t1 = document.getElementById("template1Element");
     } else if (templateNumber === 2){
         var t1 = document.getElementById("template2Element");       
     } else if (templateNumber === 3){
         var t1 = document.getElementById("template3Element");
     } else if (templateNumber === 4){
         var t1 = document.getElementById("template4Element");       
     } else {
         var t1 = document.getElementById("template1Element");
     }
     var x = document.getElementById("introductionElement");
     if (x.style.display === "none") {
         x.style.display = "block";
     } else {
         x.style.display = "none";
     }
//     var t1 = document.getElementById("template1Element");
    if (t1.style.display === "none") {
         t1.style.display = "block";
     } else {
         t1.style.display = "none";
     }
     outputAll();
}
function outputAll()
{
    // template 1
    document.getElementById("outputNAME1").innerHTML = firstName+" "+lastName;
    document.getElementById("outputEMAIL1").innerHTML = eMail;
//    document.getElementById("outputSUMMARY").innerHTML = summary;
    document.getElementById("outputPHONE1").innerHTML = phoneNum;
    
    
    // template 2
    document.getElementById("outputNAME2").innerHTML = firstName+" "+lastName;
    document.getElementById("outputEMAIL2").innerHTML = eMail;
//    document.getElementById("outputSUMMARY").innerHTML = summary;
    document.getElementById("outputPHONE2").innerHTML = phoneNum;
    
    // template 3
    document.getElementById("outputNAME3").innerHTML = firstName+" "+lastName;
    document.getElementById("outputEMAIL3").innerHTML = eMail;
//    document.getElementById("outputSUMMARY").innerHTML = summary;
    document.getElementById("outputPHONE3").innerHTML = phoneNum;
    
    // template 4
    document.getElementById("outputNAME4").innerHTML = firstName+" "+lastName;
    document.getElementById("outputEMAIL4").innerHTML = eMail;
//    document.getElementById("outputSUMMARY").innerHTML = summary;
    document.getElementById("outputPHONE4").innerHTML = phoneNum;
}

$('.word-export1').click(function(events){
                $('.word-content1').wordExport();
});
$('.word-export2').click(function(events){
                $('.word-content2').wordExport();
});
$('.word-export3').click(function(events){
                $('.word-content3').wordExport();
});
$('.word-export4').click(function(events){
                $('.word-content4').wordExport();
});