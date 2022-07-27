
$(document).ready(function(){
    /*aos*/
    $(function(){
        AOS.init();
    });

    /*slick slide*/
    $(".page-slide").slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        variableWidth: true,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $(".landing-slide").slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        variableWidth: true,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    // menu
    $('.btn-menu').on('click',function(){
        $(this).parents('header').toggleClass('menu-open');
    });

    // skill list
    const listInfo = ['HTML5','CSS3','jQuery','javascript','Github','Sass','Photoshop','figma','Jira','SourceTree','Trello','Visual Studio Code','phpstorm']
    let listLength = 0;
    let appendList = setInterval(function(){
        $('.about-skill ul').append('<li><span>'+listInfo[listLength]+'</span></li>')
        listLength++;
        if(listLength > listInfo.length) {
            listLength = 0;
            $('.about-skill ul').empty();
        }
    }, 1000);
});

$(window).scroll(function(){
    var scrollValue = $(document).scrollTop();
    var meTop = $('.about-me').offset().top;
    var headerHeight = $('header').outerHeight();

    let f = true;

    if(scrollValue > meTop - headerHeight){
        $('header').addClass('active');
    } else {
        $('header').removeClass('active');
    }

});


