$(document).ready(function(){
   //Nice Scroll code
   $("body").niceScroll();
   
   $(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
   //color options tool box
   $(".themes-box h6").click(function(){
      $(".themes-box .themes").fadeToggle();
      })
   var colorLi = $(".themes-box .themes ul li");
   // change theme colors on click
   colorLi
    .eq(0).css("backgroundColor","#ff9f00").end()
    .eq(1).css("backgroundColor","#dd9179").end()
    .eq(2).css("backgroundColor","#ec1c23")
   colorLi.click(function(){
      $("link[href*='theme']").attr("href",$(this).attr("data-value"));
      //console.log();
      })
    })