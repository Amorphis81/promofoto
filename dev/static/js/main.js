$(document).ready(function () {
    svg4everybody({});

    //select
    // $('.services-select').each(function() {
    //     var $this = $(this),
    //     selectOption = $this.find('option'),
    //     selectOptionLength = selectOption.length,
    //     selectedOption = selectOption.filter(':selected'),
    //     dur = 500;

    //     $this.hide();
    //     $this.wrap('<div class="select"></div>');
    //     $('<div>', {
    //       class: 'select__gap',
    //       text: 'Выберите'
    //     }).insertAfter($this);
    // })

    //add url input
    $('.services-add-url').on('click', function() {
        var element = '<div class="services-url-block"><input class="services-url__input" type="url" name="" placeholder="Вставьте ссылку"></div>';
        $('.services-url').append(element);
    })

    // $('.services-url-block span').on('click', function() {
    //     console.log(123);
    //     $(this).parent().remove();
    // })
});