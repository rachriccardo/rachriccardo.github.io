$(document).ready(function() {
	console.log('here');

// Accordion
$('.accordion').on('click', '.accordion-control', function(e) {
	e.preventDefault();
	$(this)
		.next('.accordion-panel')
		.not(':animated')
		.slideToggle();
});


// Carousel
var imageStyles = [
	{
		"background-image":  "url(images/1.jpg)",
		"background-position-y": "-75px"
	},
	{
		"background-image":  "url(images/2.jpg)",
		"background-position-y": "-75px"
	},
	{
		"background-image":  "url(images/3.JPG)",
		"background-position-y": "-75px"
	}
];

$('.carousel').css(imageStyles[0]);
var imageIndex = 1;

var indicators = $('.indicator');

indicators.eq(0).addClass('active');

setInterval(function () {
    console.log('changed');

$('.carousel').css(imageStyles[imageIndex]);

indicators.eq(imageIndex - 1).removeClass('active');
if (imageIndex== imageStyles.length-1) {
imageIndex=0;
}

else {
imageIndex++; 	
}
indicators.eq(imageIndex - 1).addClass('active');


}, 4000);


$('#contact-modal-open').click(function(e) {
	$('#contact-modal').fadeIn();
});

$('#close-modal').click(function() {
	$('#contact-modal').fadeOut();
});

$('#contact-submit-button').click(function(e) {
	e.preventDefault(); // Prevent form from actually submitting
	$('#contact-modal').fadeOut();
	$('#contact-success-modal').fadeIn();
	setTimeout(function() {
		$('#contact-success-modal').fadeOut();
	}, 3000);
});

});
