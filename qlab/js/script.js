$(window).scroll(function(){
    if ($(window).scrollTop() > $('.headerImage').height()) {
        $('.headerMenuLogo').addClass('scroll');
    }
    else {
        $('.headerMenuLogo').removeClass('scroll')
    }
    if ($(window).scrollTop() > $('.headerImage').height()) {
        $('.headerMenuList').addClass('scroll');
    }
    else {
        $('.headerMenuList').removeClass('scroll')
    }
    if ($(window).scrollTop() > $('.headerImage').height()) {
        $('.headerMenu').addClass('scroll');
    }
    else {
        $('.headerMenu').removeClass('scroll')
    }
    if ($(window).scrollTop() > $('header').height()) {
        $('.characteristics').addClass('scroll');
    }
    else {
        $('.characteristics').removeClass('scroll')
    }
});