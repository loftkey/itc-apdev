$("body").append("<aside class=\"sidebar\">This is an aside.</aside>");

$('.word-export').click(function(events){
                $('.word-content').wordExport();
});

// Helper function for the createModal function to dynamically create event listeners
function createDialogClickListener (id, callback) {
    let element = document.querySelector(`[id="${ id }"]`);
    
    return element.addEventListener('click', callback);
}

function createModal (title, content, buttonID="defaultAction", modalID=null, callback) {
    let dialoghtml = "<div class=\"modal fade\"";
    if(modalID !== null) {
       dialoghtml += " id=\"" + modalID + "\"";
    }
    dialoghtml += " tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\
                    <div class=\"modal-dialog\" role=\"document\">\
                      <div class=\"modal-content\">\
                        <div class=\"modal-header\">\
                          <h5 class=\"modal-title\">" + title + "</h5>\
                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\
                            <span aria-hidden=\"true\">&times;</span>\
                          </button>\
                        </div>\
                        <div class=\"modal-body>\n" + content + "\
                        </div\
                        <div class=\"modal-footer\">\
                          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\
                          <button type=\"button\" id=\"" + buttonID + "\" class=\"btn btn-primary\">Continue</button>\
                        </div>\
                      </div>\
                    </div>\
                  </div>\n";
    
    $('body').append(dialoghtml);
    createDialogClickListener(buttonID, callback);
}

/* Create modal dialog boxes here */
let dialogContent = "Please enter your name and contact info:\
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
});