// Global Variables
var current_section = null; // Represents the resume section currently being edited.

$(document).ready(function() {
    //console.log($(location).attr('pathname'));
    $('div.paper').load('resume-templates/template' + $.urlParam('template') + '.html');
});

// Function taken from <https://www.sitepoint.com/url-parameters-jquery>
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

$('#word_export').click(function(events){
                $('.word-content').wordExport();
});

$('#resume_header_dialog').on('hidden.bs.modal', function (event) {
    var button = $(event.relatedTarget); // DOM element that triggered the event
    
    console.log("Closed the modal! It's working!");
});


/* Below is the code to dynamically change the content of the editing dialog 
   and put the user-edited content into the resume HTML. */
$('#submitEdit').on('click', function () {
    let content = $(this).parent().parent().find('.modal-body');
    let inputs = content.find('.form-control');
    inputs = $('#editorDialog .modal-dialog .modal-content .modal-body .form-control');
    let sect = $('.word-content').find('#' + current_section);
    
    inputs.each(function () {
        let inputSource = $(this);
        let targetID = inputSource.data('fill');
        let sourceVal = inputSource.val();
        console.log(sect.find('#' + targetID));
        sect.find('#' + targetID).text(sourceVal);
    });

    $('#editorDialog').modal('hide');
});

// Code modified from <https://getbootstrap.com/docs/3.3/javascript>
$('#editorDialog').on('show.bs.modal', function (event) {
    let button = $(event.relatedTarget) // Button that triggered the modal
    let category = button.data('tag') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    let bodytext = "Nothing happened :(";
    let titletext = "Default Title";
    
    // UPDATING GLOBAL VARIABLE
    current_section = button.parent().attr("id");
    //console.log(current_section);
    
    if(category == "header") {
        titletext = "Edit Resume Header";
        bodytext = `<div class="form-group">
                        <label for="full-name" class="control-label">Full Name</label>
                        <input type="text" data-fill="resume_name" class="form-control" id="full-name">
                        <label for="email" class="control-label">Email</label>
                        <input type="email" data-fill="resume_email" class="form-control" id="email">
                        <label for="phone" class="control-label">Phone</label>
                        <input type="text" data-fill="resume_phone" class="form-control" id="phone">
                    </div>`;
    } else if (category == "skills") {
        titletext = "Edit Your Skills";
        bodytext = `<div class="form-group">
                      <div class="form-row">
                        <div class="col">
                          <input type="text" data-fill="resume_skillset1" class="form-control" id="skillset1" placeholder="Skill Set #1">
                        </div>
                        <div class="col">
                          <input type="text" data-fill="resume_skillset2" class="form-control" id="skillset2" placeholder="Skill Set #2">
                        </div>
                        <div class="col">
                          <input type="text" data-fill="resume_skillset3" class="form-control" id="skillset3" placeholder="Skill Set #3">
                        </div>
                      </div>
                      <hr>

                      <div class="form-row">
                        <div class="col">
                          <input type="text" data-fill="resume_skill1-1" class="form-control" id="skillset1-1" placeholder="skill 1">
                        </div>
                        <div class="col">
                          <input type="text" data-fill="resume_skill2-1" class="form-control" id="skillset2-1" placeholder="skill 1">
                        </div>
                        <div class="col">
                          <input type="text" data-fill="resume_skill3-1" class="form-control" id="skillset3-1" placeholder="skill 1">
                        </div>
                      </div>

                      <div class="form-row">
                        <div class="col">
                          <input type="text" data-fill="resume_skill1-2" class="form-control" id="skillset1-2" placeholder="skill 2">
                        </div>
                        <div class="col">
                          <input type="text" data-fill="resume_skill2-2" class="form-control" id="skillset2-2" placeholder="skill 2">
                        </div>
                        <div class="col">
                          <input type="text" data-fill="resume_skill3-2" class="form-control" id="skillset3-2" placeholder="skill 2">
                        </div>
                      </div>

                      <div class="form-row">
                        <div class="col">
                          <input type="text" data-fill="resume_skill1-3" class="form-control" id="skillset1-3" placeholder="skill 3">
                        </div>
                        <div class="col">
                          <input type="text" data-fill="resume_skill2-3" class="form-control" id="skillset2-3" placeholder="skill 3">
                        </div>
                        <div class="col">
                          <input type="text" data-fill="resume_skill3-3" class="form-control" id="skillset3-3" placeholder="skill 3">
                        </div>
                      </div>
                    </div>`;
    }
    let modal = $(this)
    modal.find('.modal-title').text(titletext)
    modal.find('.modal-body').html(bodytext);
});