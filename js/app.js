$(document).ready(function() {

// $("html,body").animate({scrollTop: 0}, 500);
	

$('a').click(function() {
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1000);
		return false;
});

$('.contactButton').click(function(event) {
	if ($('.contactWrapper:hidden')) {
			$('.contactWrapper').slideDown('slow');
			$('.infoArticleContainer').slideUp('slow');

	}else if ($('.contactWrapper:visible')){
			$('.contactWrapper').slideUp('slow');
			$('.infoArticleContainer').slideDown('slow');
	}		
});	

// $('.contactButton').click(function(event) {
// 	if ($('.infoArticleContainer:hidden')) {
			
// 	}
// });	


$('.sampleHoverBox').hover(function() {
	$(this).siblings('.sampleOverlay').fadeIn();
}, function() {
	$(this).siblings('.sampleOverlay').fadeOut();
});















});//doc ready