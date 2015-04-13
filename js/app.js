$(document).ready(function() {
$("html,body").animate({scrollTop: 0}, 500);
	
$('.arrow-down').click(function() {
	$('html, body').animate({
		scrollTop: $('.deliverablesH1').offset().top-100
		}, 1500);
});

$('a').click(function() {
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top-100
		}, 1000);
		return false;
});


$('.circle-box').hover(function() {
	$(this).children('.circle-front').hide();
	$(this).children('.circle-back').show();
}, function() {
	$(this).children('.circle-front').show();
	$(this).children('.circle-back').hide();
});


$('.sample-1, .sample-2, .sample-3, .sample-4').hover(function() {
	$(this).children('.samples-links').fadeIn();
}, function() {
	$(this).children('.samples-links').fadeOut();
});


});//doc ready