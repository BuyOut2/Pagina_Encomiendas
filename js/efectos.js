$(document).ready(function(){

// Efecto Menu

    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

// Efecto Header 

    if( $(window).width() > 800 ){
        $('header .texto').css({
            opacity: 0,
            marginTop: 0 
        });

        $('header .texto').animate({
            opacity: 1,
            marginTop: '-52px' 
        }, 1500);
    }


// Scroll Elementos Menu

    const acercaDe = $('#acerca-de').offset().top,
          menu = $('#menu').offset().top,
          galeria = $('#galeria').offset().top,
          ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe -150
        }, 500);
    });


    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu +600
        }, 500);
    });


    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria -100
        }, 500);
    });

 
    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 500);
    });
});