$(document).ready(function(){

		$(".burger-menu").on("click", function(){

			$(".menu-toggle").toggleClass("open");

		});

});

// Форма в модальном окне с фокусом на поле Имя
$('.popup-with-form').magnificPopup({
   type: 'inline',
   focus: '#name'
});


$('.multiple-items').slick({
  infinite: true,
  dots: false,
  slidesToShow: 3,
  prevArrow: '<button class="arrowBtn arrow-prev"></button>',
  nextArrow: '<button class="arrowBtn arrow_next"></button>',
  slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


  