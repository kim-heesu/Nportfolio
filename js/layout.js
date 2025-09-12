// contact me , send email
function sendEmail(){
    let userName = document.getElementById('contactName');
    let userPhone = document.getElementById('contactPhone');
    let userEmail = document.getElementById('contactEmail');
    let userContent = document.getElementById('contactContent');

    if(userName.value == '') {
        alert('이름을 입력해주세요.')
        userName.focus();
        return false
    }
    if(userPhone.value == '') {
        alert('연락처를 입력해주세요.')
        userPhone.focus();
        return false
    }
    if(userEmail.value == '') {
        alert('이메일을 입력해주세요.')
        userEmail.focus();
        return false
    }
    if(userContent.value == '') {
        alert('내용을 입력해주세요.')
        userContent.focus();
        return false
    }

    var data = {
        service_id: 'cjmgmltn',
        template_id: 'template_gh1gcyl',
        user_id: '02NYxVsXY2p5eebhG',
        template_params: {
            contact_name : userName.value,
            contact_phone : userPhone.value,
            contact_email : userEmail.value,
            contact_content : userContent.value,
        }
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        alert(userName.value+'님, 문의주셔서 감사합니다!\n빠른 시일내에 답변드리겠습니다.');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
}

// 방문자 수 체크
function visitCookie(){
    let expireDate = new Date();  
    expireDate.setMonth(expireDate.getMonth() + 3);  

    let hitCt = eval(cookieVal("pageHit"));  
    hitCt++;  

    document.cookie = "pageHit=" + hitCt + ";expires=" + expireDate.toGMTString();  

    function cookieVal(cookieName) {  
        let thisCookie = document.cookie.split("; ");  
        for (let i = 0; i < thisCookie.length; i++) {  
            if (cookieName == thisCookie[i].split("=")[0]) {  
                return thisCookie[i].split("=")[1];  
            }   
        }   
        return 0;   
    }   
    console.log('방문자는? '+hitCt+'명');
};

$(document).ready(function(){
    visitCookie();
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

    $('.pet-promotion-slide').slick({
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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
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


