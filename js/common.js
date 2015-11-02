$(document).ready(function() {

	$('.bxslider').bxSlider({
		mode: 'fade',
		captions: true
	});

    $('.popup').magnificPopup();

	function check_appear(els) {
		if (els.is(':appeared')) {

			els.each(function(index) {
				setTimeout(function(el) {
					$(el).animate({opacity: 1}, 1000);
				}, 500*index, this);
			});
		}
	}

	$(document).scroll(function() {
		check_appear($('#place-of-unloading .fadein'));
	});



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
		$('.sahalin-map, .kamchatka, .sahalin-title').fadeOut(400).promise().done(function() {
		$('.kamchatka-map, .sahalin, .kamchatka-title').fadeIn(400)
		});
	});

	$('#place-of-catch .sahalin').click(function() {
		$('.kamchatka-map, .sahalin, .kamchatka-title').fadeOut(400).promise().done(function() {
		$('.sahalin-map, .kamchatka, .sahalin-title').fadeIn(400)
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

    $('.ephone').mask('+7 (999) 999-99-99');

    $('form').submit(function(e) {
            e.preventDefault();
            var $form = $(this);
            if (check_form($form)) {
                return false;
            }

            $.ajax({
                url: $form.attr('action'), 
                type: $form.attr('method'),
                data: $form.serialize(),

                success: function(data) {
                    var url = 'thank.html';
                    window.location = url;

                    $form.find("input[type=text], input[type=email], textarea").val(""); // очищаем форму
                },

                error: function(data) {
                    alert('Извините, данные не были переданы');
                }
            });
        });

        function check_form(form){
            var error = false;
            $(form).find('input, textarea').each(function(){
                if ($(this).val().length <= 1) {
                    $(this).addClass('error');
                    error = true;
                } else {
                    $(this).removeClass('error');
                }
            });

            var name = $(form).find('[name=name]');
            var phone = $(form).find("[name=phone]");
            var email = $(form).find("[name=email]");

            if (name.val().length < 3) {
                name.addClass('error');
                error = true;
            }
            if (phone.val().length < 11) {
                phone.addClass('error');
                error = true;
            }
            return error;
        }

});