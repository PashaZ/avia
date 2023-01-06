console.log("hello555")
// const scrollBlock = document.getElementById('scroll-top');

// window.scroll(function() {
// 	if((this).scrollBlock() != 0) {
// 		scrollBlock.fadeIn();
// 	} else {
// 		scrollBlock.fadeOut();
// 	}
// });
// scrollBlock.click(function() {
// 	('body,html').animate({scrollTop:0},800);
// });

		



// $(document).ready(function(){
    
//     $('body').append('<div class="cover"></div>');
     	
//    	$('.menu-btn').click(
// 		function() {
//             $('header nav').slideToggle();
//             $(this).toggleClass('active');
//             $('.cover').fadeToggle();
//             	});
            	
//    	$('.header nav span.with-angle').click(
// 		function() {
// 		    $('header nav ul.dropdown').hide();
// 		    $('.header nav span.with-angle').removeClass('active');
//             $(this).next('header nav ul.dropdown').slideToggle();
//             $(this).toggleClass('active');
//             $('.cover').show();
//             	});
     


        

//         $(window).scroll(function() {
//             if($(this).scrollTop() != 0) {
//                 $('#scroll-top').fadeIn();
//             } else {
//                 $('#scroll-top').fadeOut();
//             }
//         });
//         $('#scroll-top').click(function() {
//             $('body,html').animate({scrollTop:0},800);
//         });

            	
//         console.log("hello555")
            	
// });






// $(document).click(function(event) {      	
//    	$('.cover').click(
// 		function() {
//             $(' nav,  nav ul.dropdown').hide();
//             $(' nav span.with-angle, .menu-btn').removeClass('active');
//             $('.cover').fadeOut();
//             	});
// });

// // ------------------------------------------------

// // aside-scroll.js-----------------------------------------------------
// window.onscroll = () => {
// 	const scrollBlock = document.getElementById('offer-card-fixed');
// 	const position = window.scrollY;

// 	if ((770 < position) && (position < 4300)) {
// 		scrollBlock.classList.add('fixed');
// 		scrollBlock.classList.remove('fixed-to-bottom');

// 	}
// 	else if (position < 770) {
// 		scrollBlock.classList.remove('fixed');
// 		scrollBlock.classList.remove('fixed-to-bottom');

// 	}
// 	else if (position >= 4300) {
// 		scrollBlock.classList.remove('fixed');
// 		scrollBlock.classList.add('fixed-to-bottom');

// 	}
// }


// // header-flags.js------------------------------------------
// (() => {
// 	const refs = {
// 		openCloseModalBtn: document.querySelector('.header-flags-button'),
// 		changeArrow: document.querySelector('.button-arrow'),
// 		modal: document.querySelector('.header-flags-section'),
// 	};

// 	refs.openCloseModalBtn.addEventListener('click', toggleModalBtn);

// 	function toggleModalBtn() {
// 		refs.modal.classList.toggle('is-hidden');
// 		refs.changeArrow.classList.toggle('change-arrow');
// 	}
// })();
 
// // скрол 

// (() => {
// 	const refs = {
// 		openCloseModalBtn: document.querySelector('.header-flags-button'),
// 		changeArrow: document.querySelector('.button-arrow'),
// 		modal: document.querySelector('.header-flags-section'),
// 	};

// 	refs.openCloseModalBtn.addEventListener('click', toggleModalBtn);

// 	function toggleModalBtn() {
// 		refs.modal.classList.toggle('is-hidden');
// 		refs.changeArrow.classList.toggle('change-arrow');
// 	}
// })();