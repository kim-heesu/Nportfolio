
$(document).ready(function(){
    /*slick slide*/
    $('.promotion-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
      });

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
    const listInfo = ['HTML5','CSS3','javascript','jQuery','Vue.js','Vuex','Axios','Github','Sass','Photoshop','figma','Jira','SourceTree','Trello']
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

    if(scrollValue > meTop - headerHeight){
        $('header').addClass('active');
    } else {
        $('header').removeClass('active');
    }

});


