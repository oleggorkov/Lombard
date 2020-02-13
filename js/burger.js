$(document).ready(function () {
    $('.menu-burger').click(function(event) {
        $('.menu-burger, .menu-burger-drop').toggleClass('active');
        $('body').toggleClass('lock');
    });
});