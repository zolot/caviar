$(document).ready(function() {

	$('.bxslider').bxSlider({
		mode: 'fade',
		captions: true
	});

	function check_appear(els) {
		if (els.is(':appeared')) {
			els.each(function(index) {
				setTimeout(function(el) {
					$(el).animate({opacity: 1}, 200);
				}, 500*index, this);
			});
		}
	}

	$(document).scroll(function() {
		check_appear($('#place-of-unloading .city'));
	})



	$('#caviars .weighted').click(function() {
		$('.kind').fadeOut(400).promise().done(function() {
		    $('.weighted-info, .wrap form').fadeIn(400);
		});
	});

	$('#caviars .jars').click(function() {
		$('.kind').fadeOut(400).promise().done(function() {
		$('.jars-info, .wrap form').fadeIn(400)
		});
	});

	$('#caviars .weighted-info .to-other').click(function() {
		$('.weighted-info').fadeOut(400).promise().done(function() {
		$('.jars-info').fadeIn(400)
		});
	});

	$('#caviars .jars-info .to-other').click(function() {
		$('.jars-info').fadeOut(400).promise().done(function() {
		$('.weighted-info').fadeIn(400)
		});
	});

	$('#place-of-catch .kamchatka').click(function() {
		$('.sahalin-map, .kamchatka').fadeOut(400).promise().done(function() {
		$('.kamchatka-map, .sahalin').fadeIn(400)
		});
	});

	$('#place-of-catch .sahalin').click(function() {
		$('.kamchatka-map, .sahalin').fadeOut(400).promise().done(function() {
		$('.sahalin-map, .kamchatka').fadeIn(400)
		});
	});
	
	$('.bxslider-certificates').bxSlider({
		pagerCustom: '#bx-pager-certificates',
		mode: 'fade',
		onSlideNext: calback,
		onSlidePrev: calback
	});
	
	var $thumbs = $("#bx-pager-certificates a");	
	var counter = $("#counter");
	
	$thumbs.click(function(e) {
		calback(null, null, $(this).index());
	});
	
	calback(null, null, 0);

	function calback(slideElement, oldIndex, newIndex) {
		counter.text((newIndex + 1) + "/" + $thumbs.length);
	}




    $("body").on("click", ".up-arrov", function (event) {
        event.preventDefault();
        $('body,html').animate({scrollTop: 0}, 1700);
    })
});