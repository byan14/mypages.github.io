$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    // if(wScroll > $('.about').offset().top -150){
    //         $('.kiri').addClass('kirimuncul')
    // }

    // Quality
    if( wScroll > $('.quality').offset().top - 350) {
        $('.quality').addClass('muncul');
    }
    // Story
    if( wScroll > $('.story').offset().top - 600) {
        $('.story').addClass('muncul');
    }
    // News
    if( wScroll > $('.news').offset().top - 500) {
        $('.news').addClass('muncul');
    }
    //Best
    if( wScroll > $('.best').offset().top - 550) {
        $('.best').addClass('muncul');
    }

})

$(window).on('load', function() {
    $('#main-jum-h1').addClass('muncul')
    $('#main-jum-p').addClass('muncul')
    $('.menu-jum').addClass('muncul')
    $('.mnu').addClass('muncul')
    $('.blog-jum').addClass('muncul')
    $('.blog').addClass('muncul')
    $('.shop-jum').addClass('muncul')
    $('.shop').addClass('muncul')
    $('.reserv-jum').addClass('muncul')
    $('.reserv').addClass('muncul')
    $('.contact-jum').addClass('muncul')
    $('.contact').addClass('muncul')
    $('.galeri-jum').addClass('muncul')
    $('.galeri').addClass('muncul')
})
