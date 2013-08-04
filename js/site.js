// I have laid out the js so that when you want to add a new category, you just need to:
// 		1. Make sure if it has sub-elements, that you need to tag them with the 'sub-element' class in index.html
// 		2. And that on click, you fadeOut(0) '.main' and fadeIn(500) '#back' and fadeIn(500) the sub-elements
// I promise to refactor this so that it's much less code (and work for you) later.
// <3 - Danyaal

$(document).ready(function() {
	// ENTER SITE
	$('body').hide();
	$('#back').hide();
	$('.sub-element').hide();
	$('body').fadeIn(2000);
	// ABOUT
	$('#about').click(function() {
		$('.main').fadeOut(0);
		$('#back').fadeIn(500);
		$('#about-element').fadeIn(500);
	});
	// PORTFOLIO
	$('#portfolio').click(function() {
		$('.main').fadeOut(0);
		$('#back').fadeIn(500);
		$('#portfolio-element').fadeIn(500);
	});
	// CONTACT
	$('#contact').click(function() {
		$('.main').fadeOut(0);
		$('#back').fadeIn(500);
		$('#contact-element').fadeIn(500);
		// $('#contact-element').fadeToggle(500);
	});
	// BACK
	$('#back').click(function() {
		$('#back').fadeOut(0);
		$('.main').fadeIn(500);
		$('.sub-element').fadeOut(0);
	});
	
	// FANCYBOX
	$(document).ready(function() {
		$(".fancybox").fancybox();
	});

	// STICKY
	// $(window).load(function () {
	// 	$("#back").sticky({ topSpacing:0 });
	// });
});