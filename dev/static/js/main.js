$(document).ready(function () {
    svg4everybody({});

    //Categories Item
    $('.categories-item__label').on('click', function(){
        $('.categories-item__check').removeClass('categories-item__check-visible');
        $(this).parent().find('.categories-item__check').addClass('categories-item__check-visible');
    })

    //add url input
    $('.services-add-url').on('click', function() {
        var element = '<div class="services-url-block"><input class="services-url__input" type="url" name="" placeholder="Вставьте ссылку"></div>';
        $('.services-url').append(element);
    })

    // $('.services-url-block span').on('click', function() {
    //     console.log(123);
    //     $(this).parent().remove();
    // })

    //My orders bg
    let myorderTab = $('.myorder-tab-row-content');
    let myorderTabLength = $('.myorder-tab-row-content').length;
    for (i = 0; i < myorderTabLength; i++){
        if (i%2 != 1) {
            $(myorderTab[i]).addClass('myorder-tab-row-grey');
        }
    }
    
    //News bg
    let newsBlock = $('.news-block');
    let newsBlockLength = $('.news-block').length;
    
    for (let i = 0; i < newsBlockLength; i++){
        if (i%2 == 1) {
            $(newsBlock[i]).addClass('news-block-dark');
        }
    }

    //Catalog popup
    $('.button.service-block__more').on('click', function() {
        $(this).parent().find('.service-block-buttons__popup-small').toggleClass('popup-visible');
    })

    $('.popup__string-about').on('click', function() {
        $(this).parent().parent().find('.service-block-buttons__popup-descr').toggleClass('popup-visible');
    })

    $('.popup__close').on('click', function() {
        $(this).parent().removeClass('popup-visible');
    })

    //FAQ
    $('.faq-block-question').on('click', function(){
        // $(this).parent().find('.faq-block-answer').toggleClass('faq-block-answer-dropdown').visible(); 
        if($(this).parent().find('.faq-block-answer:hidden').length == 1){
            $(this).parent().find('.faq-block-answer').show('fast');
        }
        else if($(this).parent().find('.faq-block-answer:hidden').length == 0){
            $(this).parent().find('.faq-block-answer').hide('fast');
        }
    })

});