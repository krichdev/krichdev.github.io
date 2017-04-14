$( document ).ready(function(){
    $(".button-collapse").sideNav();
    $(window).scroll(function() {
        console.log($(window).scrollTop())
        // if($(window).scrollTop() + $(window).height() == $(document).height()) {
        //     $("#fabBtn").show();
        // }

        if($(window).scrollTop() >= 500){
            $("#fabBtn").show()
        }else {
            $("#fabBtn").hide()
        }
    });
});