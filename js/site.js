// For every category added to the home page, create a main category here that:
// 		1. Starts its sub-elements (if any) off as hidden
// 		2. On click, fadeOut(0) ".main" and fadeIn(500) "#back" and fadeIn(500) its sub-elements
// 		3. On "#back" click, fadeOut(0) its sub-elements
// I promise to refactor this so that it's much less code later.
// <3 - Danyaal

$(document).ready(function() {
	// ENTER SITE
	$('body').hide();
	$('#back').hide();
	$('body').fadeIn(2000);
	// DESIGNER
	$('.designer-element').hide();
	$('#designer').click(function() {
		$('.main').fadeOut(0);
		$('#back').fadeIn(500);
		$('.designer-element').fadeIn(500);
	});
	// DEVELOPER
	$('.developer-element').hide();
	$('#developer').click(function() {
		$('.main').fadeOut(0);
		$('#back').fadeIn(500);
		$('.developer-element').fadeIn(500);
	});
	// LEADER
	$('.leader-element').hide();
	$('#leader').click(function() {
		$('.main').fadeOut(0);
		$('#back').fadeIn(500);
		$('.leader-element').fadeIn(500);
	});
	// CONTACT
	$('.contact-element').hide();
	$('#contact').click(function() {
		$('.main').fadeOut(0);
		$('#back').fadeIn(500);
		$('.contact-element').fadeIn(500);
		// $('.contact-element').fadeToggle(500);
	});
	// BACK
	$('#back').click(function() {
		$('#back').fadeOut(0);
		$('.main').fadeIn(500);
		$('.designer-element').fadeOut(0);
		$('.developer-element').fadeOut(0);
		$('.leader-element').fadeOut(0);
		$('.contact-element').fadeOut(0);
	});
});