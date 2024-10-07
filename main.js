$('.show-menu').show();

$('.hide-menu').hide();


$('.mobile').hide();



$('.show-menu').click(function(){
$('.show-menu').hide();
$('.hide-menu').show();

$('.mobile').slideDown();



});

$('.hide-menu').click(function(){
$('.show-menu').show();
$('.hide-menu').hide();

$('.mobile').slideUp();



});