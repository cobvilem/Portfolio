
$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
    });

$(window).on("load", function() {
      if("loading"){
        window.scrollTo(0,0);
} else {
        $("body").css("overflow-y","auto");
}
    });

window.onload = function(){
  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');   

  menu_btn.addEventListener('click', function (){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');

  });


}