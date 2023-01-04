$(document).ready(function(){
    
    $('body').append('<div class="cover"></div>');
     	
   	$('.menu-btn').click(
		function() {
            $('header nav').slideToggle();
            $(this).toggleClass('active');
            $('.cover').fadeToggle();
            	});
            	
   	$('.header nav span.with-angle').click(
		function() {
		    $('header nav ul.dropdown').hide();
		    $('.header nav span.with-angle').removeClass('active');
            $(this).next('header nav ul.dropdown').slideToggle();
            $(this).toggleClass('active');
            $('.cover').show();
            	});
     


        

        $(window).scroll(function() {
            if($(this).scrollTop() != 0) {
                $('#scroll-top').fadeIn();
            } else {
                $('#scroll-top').fadeOut();
            }
        });
        $('#scroll-top').click(function() {
            $('body,html').animate({scrollTop:0},800);
        });

            	
        console.log("hello555")
            	
});
document.querySelector("scroll-top"){
  console.log("hello")  
}





$(document).click(function(event) {      	
   	$('.cover').click(
		function() {
            $('.header nav, .header nav ul.dropdown').hide();
            $('.header nav span.with-angle, .menu-btn').removeClass('active');
            $('.cover').fadeOut();
            	});
});