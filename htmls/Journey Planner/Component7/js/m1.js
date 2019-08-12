

$('.header .logo').after('<div class="mobile-trigger"></div>');
$('.navigation > ul > li.item-has-children > a').after('<div class="dl-triger"></div>');
$('.mega-menu-wrap .item-has-children > .dd-menu-title').append('<div class="child-triger"></div>');
$('.menu-wrapper').prepend('<div class="close-trigger"></div>');
$('.navigation .mega-menu-wrap .page-center').prepend('<div class="back-menu show-in-mobile"></div>');
$('.mega-menu-wrap .menu-col .dd-menu-title').append('');

$('.mobile-trigger').click(function() {
	$('body').toggleClass('mobile-open');
	$(this).toggleClass('closed');
});

$('.dl-triger').click(function() {
	$(this).toggleClass('child-open');
	$(this).parent('li.item-has-children').addClass('dd-show');
});

$('.child-triger').click(function() {
	$(this).toggleClass('child-open');
	//$(this).parent('li.item-has-children').addClass('dd-show');
	$(this).parent('.dd-menu-title').next('.dd-menu-group').slideToggle(250);
});

$('.back-menu').click(function() {
	$(this).closest('li.item-has-children').removeClass('dd-show');
});	

$('.close-trigger').click(function() {
	$('body').toggleClass('mobile-open');
	$('.mobile-trigger').removeClass('closed');
	$('.child-triger').removeClass('child-open');
	$('.navigation li.item-has-children').removeClass('dd-show');
	//$('.menu-wrapper .mega-menu-wrap').slideUp(250);
});

$('body').click(function() {
	$('body').removeClass('mobile-open');
	$('.mobile-trigger').removeClass('closed');
	$('.child-triger').removeClass('child-open');
	//$('.menu-wrapper .mega-menu-wrap').slideUp(250);
	$('.navigation li.item-has-children').removeClass('dd-show');
	$('.navigation .dd-menu-title').next('.dd-menu-group').slideUp(250);
})
$('.menu-wrapper, .mobile-trigger, .child-triger').click(function(emenu) {
	emenu.stopPropagation();
})