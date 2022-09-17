$(function() {
  function end_loader() {
    $('.loading_txt').fadeOut(800);
  }
  $(window).on('load', function() {
    setTimeout(function () {
      end_loader();
    }, 2000)
    
    $(document).ready(function(){
      setTimeout(function(){ $('.loading').toggleClass('slide') }, 4000);
      setTimeout(function(){ $('.loading').toggleClass('slide2')}, 5000);
      
      });
  })

  $(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $(".header_nav").toggleClass('show');//ナビゲーションにpanelactiveクラスを付与
      $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
  });
  
  $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
      $(".header_nav").removeClass('show');//ナビゲーションのpanelactiveクラスを除去
      $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
  });
  
})