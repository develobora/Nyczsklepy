$(document).ready(function () {
    
    /*Scroll to top when click arrow in footer*/
    $('#arrow-up').click(function (e) {
        jQuery('html, body').animate({
            scrollTop: jQuery('body').offset().top - 100
        }, 600);
        e.preventDefault();
    });
    
    /*Scroll to first section when click scroll in header slider*/
    $('#start').click(function (e) {
        var linkHref = $(this).attr('href');
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - 50
        }, 800);
        e.preventDefault();
    });
    
    /*Scroll to top of shop section when click shop name in shop list on contact page*/
    $('.shop-link').on('click', function(e) {
        var linkHref = $(this).attr('href').split('#');
        linkHref = '#' + linkHref[1];
    
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - 130
        }, 600);
    });
    
    /*When URL adress contain '#' scroll to top of section with id #fromUrl  */
    if (window.location.href.indexOf("#") > -1) {
        var linkHref = window.location.href.split('#');
        linkHref = '#' + linkHref[1];
        
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - 130
        }, 600);
        
    }
    
    /*Open dl-menu*/
    $(function () {
        $('#dl-menu').dlmenu({
            animationClasses: {
                classin: 'dl-animate-in-5',
                classout: 'dl-animate-out-5'
            }
        });
    });
    
    /* Close swipebox when click on black overlay */
    $(function () {
        $(document.body)
            .on('click touchend', '#swipebox-slider .current img', function (e) {
                return false;
            })
            .on('click touchend', '#swipebox-slider .current', function (e) {
                jQuery('#swipebox-close').trigger('click');
            });
    });
    
    /*Changing height of top nav menu when scrolling page*/
    var iScrollPos = 0;

    $(window).scroll(function () {
        var iCurScrollPos = $(this).scrollTop();
        if (iCurScrollPos > iScrollPos) {
            $(".nav-wrapper").addClass('scroll');
        } else {
            $(".nav-wrapper").removeClass('scroll');
        }
        iScrollPos = iCurScrollPos;
    });
    
    /*Map window modal*/
    var modal = $('.modal');
    
    /*Function show map window modal*/
    function openModal() {
        modal.css('display','block');
    }
    
    /*Function hide map window modal*/
    function closeModal() {
        modal.css('display','none');
    }
    
    /*If click button 'show on map' open map in modal window view*/
    $('.map-start').on('click', function() { 
        
        modal = $(this).parent().parent().find('.modal');
        openModal();
        
        var iframe = $(this).parent().parent().find('iframe');
        iframe.attr("src", iframe.data("src")); 
    });
    
    /*If click X in modal view hide map*/
    $('.close').on('click', function(){
        closeModal();
    });
    
    /*If click anywhere except for modal window hide map*/
    $(window).on('click', function(event) {
        if ($(event.target).is(modal)) {
                closeModal();
            }
    });
    
    /*If click button 'send message' changing value of selector in contact form to clicked shop*/
    $('.send-message').click(function(e){ 
        $('#shops').val($(this).data('val')).trigger('change');
        e.preventDefault();
    });
});

