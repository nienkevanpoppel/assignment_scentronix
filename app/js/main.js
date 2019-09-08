$(document).ready(function(){
    $(".toggle a").click(function(){
        $(".menuWrapper").fadeToggle(200);
       $(this).toggleClass('toggle-open').toggleClass('toggle-close');
    });
});
$('.overlay').on('click', function(){
    $(".menuWrapper").fadeToggle(200);   
    $(".toggle a").toggleClass('toggle-open').toggleClass('toggle-close');
    open = false;
});