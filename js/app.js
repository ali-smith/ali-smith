$(document).ready(function() {

// $("html,body").animate({scrollTop: 0}, 500);
	

$('a').click(function() {
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1000);
		return false;
});


// $('#samplesID').click(function() {
// 	$('.samplesSection').show();
// 	$('.homeSection').hide();
// 	$('.infoSection').hide();
// });

// $('#infoID').click(function() {
// 	$('.samplesSection').hide();
// 	$('.homeSection').show();
// 	$('.infoSection').show();
// });

$('.sample-1, .sample-2, .sample-3, .sample-4').hover(function() {
	$(this).children('.sampleOverlay').fadeIn();
}, function() {
	$(this).children('.sampleOverlay').fadeOut();
});


});//doc ready