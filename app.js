$(document).ready(function(){
  $('.single-item').slick()
  $('.body__event-load').slick({
        slidesToShow: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        draggable: false,
        dots: true,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left btn-pagination-icon'><i class='ti-angle-left body__pagination-arrow' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right btn-pagination-icon'><i class='ti-angle-right body__pagination-arrow' aria-hidden='true'></i></button>",
        pauseOnDotsHover: true,
  });
  // $('.event-info').slick({
  //       arrows: true,
  //       infinite: false,
  //       prevArrow:"<button type='button' class='slick-prev pull-left btn-pagination-icon'><i class='ti-angle-left body__pagination-arrow' aria-hidden='true'></i></button>",
  //       nextArrow:"<button type='button' class='slick-next pull-right btn-pagination-icon'><i class='ti-angle-right body__pagination-arrow' aria-hidden='true'></i></button>",
       
  // });

  // $('.body__game-cart').slick({
  //   slidesToShow: 8,
  //   arrow: true,
  //   infinite: false,
  //   prevArrow:"<button type='button' class='slick-prev pull-left btn-pagination-icon'><i class='ti-angle-left body__pagination-arrow' aria-hidden='true'></i></button>",
  //   nextArrow:"<button type='button' class='slick-next pull-right btn-pagination-icon'><i class='ti-angle-right body__pagination-arrow' aria-hidden='true'></i></button>",
  //   responsive: [
  //   {
  //     breakpoint: 1380,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  //   ] 
  // }) 
  
});

