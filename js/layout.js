

    // contact me , send email
    function sendEmail(){
        var data = {
            service_id: 'cjmgmltn',
            template_id: 'template_gh1gcyl',
            user_id: '02NYxVsXY2p5eebhG',
            template_params: {
                contact_name : document.getElementById('contactName').value,
                contact_phone : document.getElementById('contactPhone').value,
                contact_email : document.getElementById('contactEmail').value,
                contact_content : document.getElementById('contactContent').value,
            }
        };
        
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            let userName =document.getElementById('contactName').value;
            alert(userName+'님, 문의주셔서 감사합니다!\n빠른 시일내에 답변드리겠습니다.');
        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    }

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
    const listInfo = ['HTML5','CSS3','javascript','jQuery','Vue.js','Vuex','Axios','Git','Sass','Photoshop','figma','Jira','SourceTree','Trello']
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


