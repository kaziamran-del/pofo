$(document).ready(function(){
	
	/* Sticky Header */
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 200) {
			$('.header_area').addClass("sticky");
		} else {
			$('.header_fixed').removeClass("sticky");
		}
	});
	
	
	/* owlCarousel Active for slider_area*/
	$(".slider").owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		dots:true,
		nav:true,
		navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
	});
	
	
	/* owlCarousel Active for testimonial_slider*/
	$(".testimonial_slider").owlCarousel({
		items:3,
		loop:true,
		autoplay:true,
		dots:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				dots:true
			},
			600:{
				items:2,
				dots:true
			},
			1000:{
				items:3,
				dots:true
			}
			
		}
	});
	
	
	/* owlCarousel Active for client_slider_area*/
	$(".client_slider").owlCarousel({
		items:3,
		loop:true,
		autoplay:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
				dots:true
			},
			600:{
				items:2,
				dots:true
			},
			1000:{
				items:3,
				dots:true
			}
			
		}
	});
	
	
	/* counter up */
	$('.counter').counterUp({
			delay: 10,
			time: 1000
	});
	
	
	/* img_popup */
	$('.img_popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	
	
	/* Isotope Active */
	$(".portfolio_area").imagesLoaded(function () {
		var grid = $(".grid").isotope({
			itemSelector: ".grid-item",
			percentPosition: true,
			masonry: {
				columnWidth: ".grid-item"
			}
		});

		$(".portfolio_list").on("click", "li", function () {
			var filterValue = $(this).attr("data-filter");
			grid.isotope({
				filter: filterValue
			});
		});
		
		
	/* Isotope Menu Active */
		$(".portfolio_list li").on("click", function (event) {
			$(this)
				.siblings(".active")
				.removeClass("active");
			$(this).addClass("active");
			event.preventDefault();
		});
	});
	
	
		/* mesonary  */
		var $grid = $('.gallery-active').isotope({
		  itemSelector: '.grid_item',
		  percentPosition: true,
		  masonry: {
		  }
		});		
			
		/* Work Area Magnific PoPUp Js */
		$('.gallery-active').each(function() { // the containers for all your galleries
			$(this).magnificPopup({
				delegate: 'a', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				}
			});
		})
		
		$('.menu').slicknav({
			label: '',
			'appendTo' : '.header_area'
		});
	
});
	
	

	
	
	