$(document).ready(function(){

    if(screen.width<=540){
        $('.checkbtn').click(function(){
        if($('#check').prop('checked')==false){
            $('.collapse').toggle();
        }
        if($('#check').prop('checked')==true){
            $('.collapse').toggle();
            $('.ham').removeClass('active');
        }
        })
        $(".transition").click(function() {
            if ($(this).hasClass('link')) {
                $('.collapse').toggle();  
                $('#check').prop('checked', false);
                $('.ham').removeClass('active');
            }
        }) 
    } 
});


$(document).ready(function(){
    if(screen.width<=540){
        $('.steps').addClass('owl-carousel');
        $('.portfolio_area').addClass('owl-carousel');
        $('.product_area').addClass('owl-carousel');
    }

});


// $(document).ready(function(){
//     $(".steps").owlCarousel({
//         stagePadding: 65,
//         loop:true,
//         margin:10,
//         nav:false,
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:3
//             },
//             1000:{
//                 items:5
//             }
//         }
        
//     });
//     });












  

