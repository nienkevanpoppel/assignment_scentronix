// var menu = document.getElementsByClassName('menuWrapper')[0];
// var button = document.getElementsByClassName('button')[0];
// var buttonLink = document.getElementsByClassName('btn-open')[0];

// buttonLink.click(function() {
//     menu.fadeToggle(200);
//     buttonLink.toggleClass('btn-open').toggleClass('btn-close')
// })

$(document).ready(function(){
    $(".button a").click(function(){
        $(".menuWrapper").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".menuWrapper").fadeToggle(200);   
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});