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

$('.word-export').click(function(events){
                $('.word-content').wordExport();
});

// Helper function for the createModal function to dynamically create event listeners
/*function createDialogClickListener (id, callback) {
    let element = document.querySelector(`[id="${ id }"]`);
    
    return element.addEventListener('click', callback);
}*/

$('#resume_header_dialog').on('hidden.bs.modal', function (event) {
    var button = $(event.relatedTarget); // DOM element that triggered the event
    
    console.log("Closed the modal! It's working!");
});

/*function createModal (title, content, buttonID="defaultAction", modalID=null, callback) {
    let dialoghtml = `<div class="modal fade"`;
    if(modalID !== null) {
       dialoghtml += ` id="${ modalID }"`;
    }
    dialoghtml += ` tabindex="-1" role="dialog" aria-hidden="true">\
                    <div class="modal-dialog" role="document">\
                      <div class="modal-content">\
                        <div class="modal-header">\
                          <h5 class="modal-title">${ title }</h5>\
                          <button type="button" class="close" data-dismiss="modal"\
                            <span aria-hidden="true">&times;</span>\
                          </button>\
                        </div>\
                        <div class="modal-body>\n${ content }\
                        </div\
                        <div class="modal-footer">\
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>\
                          <button type="button" id="${ buttonID }" class="btn btn-primary">Update</button>\
                        </div>\
                      </div>\
                    </div>\
                  </div>\n`;
    
    $('body').prepend(dialoghtml);
    createDialogClickListener(buttonID, callback);
}*/

/* Create modal dialog boxes here */
/*let dialogContent = "Please enter your name and contact info:\
                    <br><br>\
                    <form>\
                      <div class=\"form-row\">\
                        <div class=\"col\">\
                          <input type=\"text\" class=\"form-control\" placeholder=\"First name\">\
                        </div>\
                        <div class=\"col\">\
                          <input type=\"text\" class=\"form-control\" placeholder=\"Last name\">\
                        </div>\
                      </div>\
                    </form><br>\
                    <div class=\"form-group\">\
                      <input type=\"email\" class=\"form-control\" id=\"formControlInput1\" placeholder=\"name@example.com\">\
                    </div>";

createModal("Edit Resume Header", dialogContent, "resume_header_edit", "resume_header_dialog", function () {
    //$('#resume_header_dialog').modal();
    console.log("hello");
    //console.log($(this).parent().prev());
});*/

$('#submitEdit').on('click', function () {
    let content = $(this).parent().parent().find('.modal-body');
    let inputs = content.find('.form-control');
    inputs = $('#editorDialog .modal-dialog .modal-content .modal-body .form-control');
    let worddoc = $('.word-content').find('#resume_header');
    console.log(worddoc);
    
    inputs.each(function () {
        let inputSource = $(this);
        let targetID = inputSource.data('fill');
        let sourceVal = inputSource.val();;
        worddoc.find('#' + targetID).text(sourceVal);
    });
    //console.log(inputs);
    //console.log($('#editorDialog .modal-dialog .modal-content .modal-body .form-control'));
    /*for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i]);
        let targetID = inputs[i].attr('data-fill');
        worddoc.find('#' + targetID).html(inputs[i].value);
        console.log(inputs[i].value);
    }*/
    $('#editorDialog').modal('hide');
});

/*$('#editorDialog').on('hide.bs.modal', function (event) {
  //$('#paper').append('<p>It works!</p>');
  //console.log("hello");
  console.log($(this));
});*/

//$(document).on('hide.bs.modal', '#')

// Code modified from <https://getbootstrap.com/docs/3.3/javascript>
$('#editorDialog').on('show.bs.modal', function (event) {
    let button = $(event.relatedTarget) // Button that triggered the modal
    let category = button.data('tag') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    let bodytext = "Nothing happened :(";
    let titletext = "Default Title";
    if(category == "header") {
        titletext = "Edit Resume Header";
        bodytext = `<div class="form-group">
                        <label for="full-name" class="control-label">Full Name</label>
                        <input type="text" data-fill="resume_name" class="form-control" id="full-name">
                        <label for="email" class="control-label">Email</label>
                        <input type="email" data-fill="resume_email" class="form-control" id="email">
                        <label for="phone" class="control-label">Phone</label>
                        <input type="email" data-fill="resume_phone" class="form-control" id="phone">
                    </div>`;
    }
    let modal = $(this)
    modal.find('.modal-title').text(titletext)
    modal.find('.modal-body').html(bodytext);
});