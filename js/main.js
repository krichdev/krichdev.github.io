$( document ).ready(function(){
    $(".button-collapse").sideNav();
    $(window).scroll(function() {
        if($(window).scrollTop() >= 500){
            $("#fabBtn").show()
        }else {
            $("#fabBtn").hide()
        }
    });
});