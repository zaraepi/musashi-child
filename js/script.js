

// $(function(){

// });

// $(function(){

// });

// $((){})

// $(function(){

// });

// $((){

// });

$(function() {


    // var offset1 = $('.section1').offset().top;
    // var offset2 = $('.section2').offset().top;
    // var offset3 = $('.section3').offset().top;
    // var offset4 = $('.section4').offset().top;
    // var offset5 = $('.section5').offset().top;
    // var offsetsectionartwork = $ ('#section-artwork').offset().top;




    // function updateOffsetTops() {
    //     offset1 = $('.section1').offset().top;
    //     offset2 = $('.section2').offset().top;
    //     offset3 = $('.section3').offset().top;
        // offset4 = $('.section4').offset().top;
        // offset5 = $('.section5').offset().top;
        // offsetsectionartwork = $('#section-artwork').offset().top;

        // console.log(offset1);
        // console.log(offset2);
        // console.log(offset3);
        // console.log(offset4);
        // console.log(offset5);
        // console.log(offsetsectionartwork);

        // console.log('---------------');

    // }



    //------slide-button + menu bar-----
    var isOpen = false;
    $('#nav-icon-line').on('click', function() {

        if (isOpen == false) {
            $('#open-nav').addClass('open');
            $('#open-nav').one('transitionend', function() {
                $('.menu-close-btn').addClass('show');
                // 
                 // $('.open-nav').addClass('vh');
                 //  $('.hamburger').addClass('vh');
                 //   $('#nav-icon-line').addClass('vh');
                 //    $('.hamburger').removeClass('fixed');
                 //     $('#nav-icon-line').removeClass('fixed');
             
                 // $('.menu-close-btn').addClass('fixed');

            });

            isOpen = true;
        } else {
            $('#open-nav').removeClass('open');
            $('#open-nav').one('transitionend', function() {
                $('.menu-close-btn').removeClass('show');

            });
            isOpen = false;

        }


    });

    $('.menu-close-btn').on('click', function() {
        $('#open-nav').removeClass('open');

    });

    //-----menu bar----

    $('#nav-icon-line').click(function() {
        $(this).toggleClass('open');
    });



    //----------------------------

    var menuOffset = $('.menu-ul').offset();
    // console.log(menuOffset);
    $(document).on('scroll', function() {
        var iScrollTop = $(document).scrollTop();



        if (iScrollTop > menuOffset.top) {
            $('.menu-ul').addClass('fixed');

        } else {
            $('.menu-ul').removeClass('fixed');

        }

    });


    //--------------------
    menuOffset = $('.hamburger').offset(); 

    // console.log(menuOffset);

    $(document).on('scroll', function() {
        var iScrollTop = $(document).scrollTop();


        if (iScrollTop > menuOffset.top) {
            $('.hamburger').addClass('fixed');
            $('#nav-icon-line').find('span').addClass('fixed');
             $('#nav-icon-line').addClass('fixed');


        } else {
            $('.hamburger').removeClass('fixed');
            $('#nav-icon-line').find('span').removeClass('fixed');
              $('#nav-icon-line').removeClass('fixed');

        }

    });

    AOS.init({
    duration: 1200,
});

});




