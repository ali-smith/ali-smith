$(document).ready(function() {

// $("html,body").animate({scrollTop: 0}, 500);
	
$('.homeContainer').fadeIn(2000);
$('.correctThem').fadeIn(2500);
$('.psst').fadeIn(2750);





$('a').click(function() {
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1000);
		return false;
});


$('.sampleHoverBox').hover(function() {
	$(this).siblings('.sampleOverlay').fadeIn();
}, function() {
	$(this).siblings('.sampleOverlay').fadeOut();
});


// $('.sampleDescription').mouseenter(function(event) {
// 	$(this).siblings('.sampleOverlay').show();
// }, function() {
// 	$(this).siblings('.sampleOverlay').fadeOut();	
// });












});//doc ready