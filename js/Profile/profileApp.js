$(document).ready(function() {

    $("#newGame").click(function() {
      debugger
        var domElement = $('<p contenteditable="true">Type Location Here</p>');
        $(this).after(domElement);
    });
    
});
