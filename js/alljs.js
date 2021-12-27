    $( document ).ready(function() {


    //回到頂部
    $(".jq-goTop").click(function (e) {
        e.preventDefault();
        $("html,body").animate(
          {
            scrollTop: 0,
          },
          100
        );
      });
    //回到頂部 捲動超過200才顯示
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
          if ($(".goTop").hasClass("hide")) {
            $(".goTop").toggleClass("hide");
          }
        } else {
          $(".goTop").addClass("hide");
        }
      });



      // hamburger
      $( ".cross" ).hide();
      $( ".ham_menu" ).hide();
      $( ".hamburger" ).click(function() {
      $( ".ham_menu" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
      });
      });
      
      $( ".cross" ).click(function() {
      $( ".ham_menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
      });
      });
      

      // owl
      $(".owl-carousel").owlCarousel({
        items: 1, // 一次輪播幾個項目
        loop: true, // 循環輪播
        margin: 10, // 與右邊圖片的距離
        nav: true, // 導航文字
        autoplay: true, // 自動輪播
        autoplayTimeout: 5000, // 切換時間
        nav: true, //顯示點點
        navText: [
          "<i class='fas fa-angle-left'></i>",
          "<i class='fas fa-angle-right'></i>"
        ],
        autoplayHoverPause: true, // 滑鼠經過時暫停
        // responsive: {
        //   0: {
        //     items: 1 // 螢幕大小為 0~600 顯示 1 個項目
        //   },
        //   600: {
        //     items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
        //   },
        //   1000: {
        //     items: 5 // 螢幕大小為 1000 以上 顯示 5 個項目
        //   }
        // }
        });

        $(function() { 
          //Trigger layout after each image loads and initialise Mansonry
          $('#waterfallArea').imagesLoaded(function() {
              $('#waterfallArea').masonry({
                  itemSelector: '.content_box',
                  columnWidth: 30, //gap
                  animate: true,
                  horizontalOrder: true,
                  originTop: true
              });
          });
  
          //Fade Out the loading screen when all images loaded
          $('#waterfallArea').imagesLoaded().always( function( instance ) {
               $('.loadingScreen').fadeOut();
          })
    });





    //滾動觸發
    function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
    
    // 回呼函式得先用 debounce 處理過
    window.addEventListener('scroll', debounce(checkSlide));
    
//作品輪播
var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
    console.log(content)
}

if($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {

        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;

                $('.item-bg').addClass('active');
                $('.news__item').removeClass('active');
                // $('.news__item').removeClass('active');


                bg.style.width = width + 'px';
                bg.style.height = height + 'px';
                bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            });

            element.addEventListener('mouseleave', function () {
                $('.item-bg').removeClass('active');
                $('.news__item').removeClass('active');
            });

        });

    });
}


var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination: {
        el: '.news-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector('.swiper-slide-active');

            var sliderItem = activeItem.querySelector('.news__item');

            $('.swiper-slide-active .news__item').addClass('active');

            var x = sliderItem.getBoundingClientRect().left;
            var y = sliderItem.getBoundingClientRect().top;
            var width = sliderItem.getBoundingClientRect().width;
            var height = sliderItem.getBoundingClientRect().height;


            $('.item-bg').addClass('active');

            bg.style.width = width + 'px';
            bg.style.height = height + 'px';
            bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
        }
    }
});

swiper.on('touchEnd', function () {
    $('.news__item').removeClass('active');
    $('.swiper-slide-active .news__item').addClass('active');
});

swiper.on('slideChange', function () {
    $('.news__item').removeClass('active');
});

swiper.on('slideChangeTransitionEnd', function () {
    $('.news__item').removeClass('active');
    var activeItem = document.querySelector('.swiper-slide-active');

    var sliderItem = activeItem.querySelector('.news__item');

    $('.swiper-slide-active .news__item').addClass('active');

    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;


    $('.item-bg').addClass('active');

    bg.style.width = width + 'px';
    bg.style.height = height + 'px';
    bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
});

//作品輪播end




//imageloading
$('waterfallArea').imagesLoaded()
  .always( function( instance ) {
    console.log('all images loaded');
  })
  .done( function( instance ) {
    console.log('all images successfully loaded');
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  });






      });





