$('.js_nav-toggle').on('click', function(){
  $('.js_nav-toggle').toggleClass('active');
  $('.nav-menu').slideToggle();
  $('body').toggleClass('shadow');
})
$('.main_gallery').slick({
  dots: false,
  });
  $('.products-list').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
var text = $('.content-seo-text'),
btn = $('.more'),
h = text[0].scrollHeight; 
if(h > 120) {
btn.addClass('less');
}
btn.click(function(e) 
{
e.stopPropagation();
if (btn.hasClass('less')) {
   btn.removeClass('less');
   btn.addClass('more');

   text.animate({'height': h});
} else {
   btn.addClass('less');
   btn.removeClass('more');
   text.animate({'height': '60'});
}  
});

