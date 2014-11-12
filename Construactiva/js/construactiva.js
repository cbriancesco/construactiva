var constru = constru || {};

constru.activa = (function () {
    
    var selection,
        selected = false,
        speedUp = 300,
        speedDown = 500,
        delay = 500;

    function init() {
        $('.sections li').on('click touch', function(event){
            event.stopPropagation;
            switch(true){
                case selected == true && selection == $(this).attr('accesskey'):
                    selected = false;
                    $('.sections li').removeClass('selected');
                    $('.sectionsInfo li').slideUp(speedUp);
                    $('.sections span').text('+');
                    console.log('sel =');
                    break;
                case selected == true && selection != $(this).attr('accesskey'):
                    selected = true;
                    selection = $(this).attr('accesskey');
                    $('.sections li').removeClass('selected');
                    $(this).addClass('selected');
                    $('.sectionsInfo li').slideUp(speedUp);
                    $('#' + selection).delay(delay).slideDown(speedDown);
                    $('.sections span').text('+');
                    $(this).find('span').text('-');
                    console.log('sel !=');
                    break;
                case selected == false:
                    selected = true;
                    $(this).addClass('selected');
                    selection = $(this).attr('accesskey');
                    $('#' + selection).slideDown(speedDown);
                    $(this).find('span').text('-');
                    console.log('!sel');
                    break;
                default:
                    console.log('didnt work');
            }
        });
    }

    /**
     * Publicly exposed functions
     */
    return {
        init: init
    };

})();

constru.activa.init();