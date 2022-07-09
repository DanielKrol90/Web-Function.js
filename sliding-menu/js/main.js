$(document).ready(function() {
    $('.content').click(function() {

        if ($(this).hasClass('slide')) {
            $(this).removeClass('slide');
            $(this).find('.text').slideUp();
        } else {
            $(this).addClass('slide');
            $(this).find('.text').slideDown();
        }
    });
});

