$(document).ready(function() {
    $('#slides').superslides({
        animation:'fade',
        play : 5000,
        pagination : false
    });

    var typed = new Typed(".typed",{
        strings : ["développeur java","alternant devops ?","futur chef de projet"],
        typeSpeed : 70,
        loop : true,
        startDelay : 1000,
        showCursor : false 
    });
});