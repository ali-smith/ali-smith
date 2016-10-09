$(document).ready(function() {

$("html,body").animate({scrollTop: 0}, 500);
	
$('.homeContainer').fadeIn(2000);
$('.correctThem').fadeIn(2500);
$('.psst').fadeIn(2750);

$('.internalLink').click(function(event) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1000);
		return false;
});

//web sample hover fade
$('.sampleDescriptionContainer').hover(function() {
	$(this).parent('.sampleDescription').addClass('sampleFade');
	$(this).children('.sampleDescriptionCenter').fadeIn('slow');
}, function() {
	$(this).parent('.sampleDescription').removeClass('sampleFade');
	$(this).children('.sampleDescriptionCenter').fadeOut('slow');
});

//tv sample hover fade
$('.sample-5, .sample-6, .sample-7, .sample-8, .sample-9, .sample-10').hover(function() {
	$(this).addClass('sampleFadeTV');
}, function() {
	$(this).removeClass('sampleFadeTV');
});

//tv iframes src exchange
$('.thumb-hsus').click(function(event) {
	event.preventDefault();
	$(this).addClass('underlineActive');
	$('.thumb-hsus, .thumb-readybox, .thumb-cash4gold, .thumb-maxclarity, .thumb-lifelock, .thumb-proflowers').not(this).removeClass('underlineActive');
	$('#iframe-readybox, #iframe-cash4gold, #iframe-maxclarity, #iframe-lifelock, #iframe-proflowers').attr('src', '');
	$('#iframe-hsus').hide();
	$('#iframe-hsus').delay(600).attr('src', $(this).attr('href'));
	$('#iframe-hsus').fadeIn('slow');
});

$('.thumb-readybox').click(function(event) {
	event.preventDefault();
	$(this).addClass('underlineActive');
	$('.thumb-hsus, .thumb-readybox, .thumb-cash4gold, .thumb-maxclarity, .thumb-lifelock, .thumb-proflowers').not(this).removeClass('underlineActive');
	$('#iframe-hsus, #iframe-cash4gold, #iframe-maxclarity, #iframe-lifelock, #iframe-proflowers').attr('src', '');
	$('#iframe-readybox').hide();
	$('#iframe-readybox').delay(600).attr('src', $(this).attr('href'));
	$('#iframe-readybox').fadeIn('slow');
});

$('.thumb-cash4gold').click(function(event) {
	event.preventDefault();
	$(this).addClass('underlineActive');
	$('.thumb-hsus, .thumb-readybox, .thumb-cash4gold, .thumb-maxclarity, .thumb-lifelock, .thumb-proflowers').not(this).removeClass('underlineActive');
	$('#iframe-hsus, #iframe-readybox, #iframe-maxclarity, #iframe-lifelock, #iframe-proflowers').attr('src', '');
	$('#iframe-cash4gold').hide();
	$('#iframe-cash4gold').delay(600).attr('src', $(this).attr('href'));
	$('#iframe-cash4gold').fadeIn('slow');
});

$('.thumb-maxclarity').click(function(event) {
	event.preventDefault();
	$(this).addClass('underlineActive');
	$('.thumb-hsus, .thumb-readybox, .thumb-cash4gold, .thumb-maxclarity, .thumb-lifelock, .thumb-proflowers').not(this).removeClass('underlineActive');
	$('#iframe-hsus, #iframe-cash4gold, #iframe-readybox, #iframe-lifelock, #iframe-proflowers').attr('src', '');
	$('#iframe-maxclarity').hide();
	$('#iframe-maxclarity').delay(600).attr('src', $(this).attr('href'));
	$('#iframe-maxclarity').fadeIn('slow');
});

$('.thumb-lifelock').click(function(event) {
	event.preventDefault();
	$(this).addClass('underlineActive');
	$('.thumb-hsus, .thumb-readybox, .thumb-cash4gold, .thumb-maxclarity, .thumb-lifelock, .thumb-proflowers').not(this).removeClass('underlineActive');
	$('#iframe-hsus, #iframe-cash4gold, #iframe-readybox, #iframe-maxclarity, #iframe-proflowers').attr('src', '');
	$('#iframe-lifelock').hide();
	$('#iframe-lifelock').delay(600).attr('src', $(this).attr('href'));
	$('#iframe-lifelock').fadeIn('slow');
});

$('.thumb-proflowers').click(function(event) {
	event.preventDefault();
	$(this).addClass('underlineActive');
	$('.thumb-hsus, .thumb-readybox, .thumb-cash4gold, .thumb-maxclarity, .thumb-lifelock, .thumb-proflowers').not(this).removeClass('underlineActive');
	$('#iframe-hsus, #iframe-cash4gold, #iframe-readybox, #iframe-maxclarity, #iframe-lifelock').attr('src', '');
	$('#iframe-proflowers').hide();
	$('#iframe-proflowers').delay(600).attr('src', $(this).attr('href'));
	$('#iframe-proflowers').fadeIn('slow');
});

// mobile nav
$('.fa-bars').click(function(event) {
	$('.mobileMenu').toggleClass('showMenu');
});

});//doc ready
