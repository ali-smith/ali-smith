$(document).ready(function() {

$("html,body").animate({scrollTop: 0}, 500);
	
$('.homeContainer').fadeIn(2000);
$('.correctThem').fadeIn(2500);
$('.psst').fadeIn(2750);


$('.internalLink').click(function() {
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1000);
		return false;
});


$('.sampleDescriptionContainer').hover(function() {
	$(this).parent('.sampleDescription').addClass('sampleFade');
	$(this).children('.sampleDescriptionCenter').fadeIn('slow');
}, function() {
	$(this).parent('.sampleDescription').removeClass('sampleFade');
	$(this).children('.sampleDescriptionCenter').fadeOut('slow');
});


});//doc ready