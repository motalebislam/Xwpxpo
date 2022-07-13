   
   $(document).ready(function(){
    $('.mobile-menu').click(function(){
      $('.sidebar').addClass('slide');
    });
    $('.close-btn').click(function(){
      $('.sidebar').removeClass('slide');
    });
    $('.menu-item').click(function(){
      $('.sidebar').removeClass('slide');
    });

    $('.dp-link').click(function(){
      $(this).next('.dp-sidebar').slideToggle();
    });

   });
       


 $('.myslider').slick({
    centerMode: false,
    slidesToShow: 3,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          dots: false,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 540,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });
