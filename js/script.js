$(document).ready(function () {
    $('.menu-icon').on('click', function () {

        $(this).toggleClass('menu-icon-open');
        $('.mobile-menu').toggleClass('mobile-menu-open');
        $('.body-dark').toggleClass('unactive');
    });

    //dropdowm-menu


    /*$('.dropdown-menu').on('click',function(){
        $('.submenu').toggle("fast");
    })*/

    $(function () {
        /*$('.dropdown-menu').on('click', function(){
   $('.submenu', this).show();
 });*/
        /*$('.dropdown-menu').click(function (event) {
        $(this).children("ul").slideToggle(); // при нажатии на кнопку появляется и исчезает список
        event.stopPropagation();
        $(this).toggleClass('opened');
        
        /*if($(this).hasClass('opened')){
            $(this).children("ul").fadeIn();
        event.stopPropagation();
        };
             });
        $(document).mouseup(function (e){
    var block = $(".submenu");
    if (!block.is(e.target) && block.has(e.target).length === 0){ //если нажато за областью block
        
        $('.dropdown-menu').removeClass("opened"); // вращаем стрелку при нажатии(убираем блок)
        $('.submenu').hide(); // прячем выпадающий список
        
    }
           
});*/

        $('.dropdown-menu').click(function (event) {
            if ($(this).children('ul').is(':visible')) {
                $(this).removeClass("opened");
                $(this).children("ul").hide();
            } else {
                $('.mobile-menu').find('.opened').removeClass('opened');
                $('.dropdown-menu').children("ul:visible").hide();
                $(this).children("ul").show();
                $('.dropdown-menu').addClass('opened');
            }

        });

        $(document).mouseup(function (e) {
            var block = $(".dropdown-menu");
            if (!block.is(e.target) && block.has(e.target).length === 0) {

                $('.dropdown-menu').removeClass("opened");
                $('.submenu').hide();

            }
        });


    })


    //btn-all-news

    $('.all-news>button').on('click', function () {
        $('.closed').fadeIn();

    })

    //modal window
    /*var wrap = $('#wrapper'),
     btn = $('.request-offer'),
     modal = $('.cover, .modal, .content'),
        closer=$('.rhombus');

btn.on('click', function() {
  modal.fadeIn();
});

// close modal
$('.modal').click(function() {
  wrap.on('click', function(event) {
    var select = $('.content');
    if ($(event.target).closest(select).length)
      return;*/
    /*modal.fadeOut();
    wrap.unbind('click');
  });
   closer.on('click',function(event){
    modal.fadeOut();
    closer.unbind('click');
   }) 
});*/
    //slider
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '250px',
        /*variableWidth: true,*/
        initialSlide: 1,
        prevArrow: '<button class="slick-pre"> < </button>',
        nextArrow: '<button class="slick-nex"> > </button>',
        responsive: [
            {
                breakpoint: 1100,
                settings: {

                    centerMode: true,
                    centerPadding: '19vw',
                }
    },
            {
                breakpoint: 1000,
                settings: {

                    centerMode: true,
                    centerPadding: '19vw',
                }
    },
            {
                breakpoint: 900,
                settings: {

                    centerMode: true,
                    centerPadding: '17vw',
                }
    },
            {
                breakpoint: 800,
                settings: {
                    centerMode: true,
                    centerPadding: '15vw'
                }
    },
            {
                breakpoint: 700,
                settings: {

                    centerMode: true,
                    centerPadding: '13vw',
                }
    },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '8vw',
                }
    },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '5vw',
                }
    },
            {
                breakpoint: 481,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '-250px',

                }
    },
  ]

    });

    //popup

    $('.ajax-popup-link').magnificPopup({
        type: 'inline'
    });
    
    //slider
    $('.slider').slickLightbox({
    src: 'src',
    itemSelector: '.item img'
  });
    /*$('.slick-center .imgtwo>img').magnificPopup({
        items: {
            src: 'images/sloi-14.jpg',
        },
        image: {
            markup: '<div class="mfp-figure">' +
                '<div class="mfp-close"></div>' +
                '<div class="mfp-img"></div>' +
                '<div class="custom-desc"><div><span>Фото с пресс-коференции в честь заключения партнерских отношений</span></div></div>' +
                '<div class="mfp-bottom-bar">' +
                '<div class="mfp-title"></div>' +
                '<div class="mfp-counter"></div>' +
                '</div>' +
                '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button

            cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.

            titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
            // Or the function that should return the title. For example:
            // titleSrc: function(item) {
            //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            // }

            verticalFit: true, // Fits image in area vertically

            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        },
        type: 'image'
    });*/

   /* $('.slick-center .imgthr>img').magnificPopup({
        items: {
            src: 'images/sloi-17.jpg'
        },
        type: 'image'
    });
    $('.slick-center .imgone>img').magnificPopup({
        items: {
            src: 'images/sloi-16.jpg'
        },
        type: 'image'
    });*/

    //form valid
    $(function() { 
    var validName = false;
    var validEmail = false;
    var validTel = false;

    $('form').submit(function (event) {
        event.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var tel = $('#tel').val();
        if (name == "") {
            $('#name').addClass('error')
        } else {
            validName = true;
        }
        if (email == "") {
            $('#email').addClass('error')
        } else {
            validEmail = true;
        }
        if (tel == "") {
            $('#tel').addClass('error')
        } else {
            validTel = true;
        }
        if (validName == true && validEmail == true && validTel == true) {
            $('form').unbind('submit').submit();
        }
    });
        })
})
