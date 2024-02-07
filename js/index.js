// JavaScript Document
 $(window).scroll(function () {    
       if ($(window).scrollTop () > 200) {  
        $('#back-top').fadeIn(1000);        
       } else {                             
        $('#back-top').fadeOut(500);        
       } 

   });
    $('#back-top a').click(function () {
        $('html, body').animate({scrollTop: 0},1000);
        return false;
    });

    $(window).scroll(function(){
        if($(window).width() > 700){   
            if($(window).scrollTop() > 1){
                $('#topheader').addClass('sticky');
            }
            else {
                $('#topheader').removeClass('sticky');
            }
          }
    });