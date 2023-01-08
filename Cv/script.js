$(document).ready(function() {
    setTimeout(function() {
        $(".preloader").addClass("loaded");
        if ($(".preloader").hasClass("loaded")){
            $("#opening").delay(9).queue(function(){
                $(this).remove();
            });
        }
    }, 3);
});