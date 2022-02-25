        
$(document).ready(function() {
  // $(document).on('click','.nav-language li',function (e) {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   // $(this).toggleClass('active');
  //   const parents = $(this).parent('ul')
  //   //tao 1 thag li nua
  //   const a = $(this).clone();
  //   //xoa thang moi ban
  //   $(this).remove()
  //   //
  //   parents.prepend(a)
  // });

  $(".heading-nav a,.heading-nav").click(function(e){
    $('.heading-nav,.heading-burger').removeClass('act');
  })
   	// menu click event
	$('.heading-burger').click(function() {
		$(this).toggleClass('act');
			if($(this).hasClass('act')) {
				$('.heading-nav').addClass('act');
			}
			else {
				$('.heading-nav').removeClass('act');
			}
	});

setTimeout(()=>{
  const lngNav = $(".nav-language ul")
  const lngKey = window.location.hash.replace('#','')
  if(lngKey === 'eng'){
    const clone = $("#eng").clone();
    $("#eng").remove();
    lngNav.prepend(clone);
  } else {
    const clone = $("#vi").clone();
    $("#vi").remove();
    lngNav.prepend(clone);
  }
},300)
  //MENU
  $('.toggle-menu').click(function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
  });

  $(".btn-close").click(function(){
    $("#menu").removeClass("open");
    $(".toggle-menu").removeClass('active');
  });

  $(".heading-wrapper .nav-menu ul li a").click(function(){
    $(".heading-main").find(".nav-menu").removeClass("open");
    $(".heading-main").find(".toggle-menu").removeClass("active");
  });


    $(window).scroll(function(e) {
      const scrollTop = $(this).scrollTop();
      if (scrollTop > 30) {
          $(".heading-main").addClass("sticky")
      } else {
          $(".heading-main").removeClass("sticky")
      }
  });

    
//SLIDE PARTNER

$('.product-slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  slidesToShow: 1,
  lazyLoad: 'ondemand',
  speed: 2100,
  focusOnSelect: true,
  arrows: false,
  // prevArrow: $(".button-prev"),
  // nextArrow: $(".button-next"),
});
    // AOS
    AOS.init({
      once: false,
      duration: 1000,
      delay: 200,

    });

});


   $('a[href*=\\#]').on('click', function(event) {
        // event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 100
        }, 500);
    });

    //EXIT
    
    $(document).on("click", function (e) { 
      const hasParent = $(e.target).parents('.heading-main').length > 0
      if (!hasParent) {
        $(".heading-main").find(".toggle-menu").removeClass("active");
        $(".heading-main").find(".nav-menu").removeClass("open");
      }
    });