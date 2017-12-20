// menu btn
$('.banner-menu-btn').click(function(){
  var btnClass = $('.banner-menu-btn span').attr('class');
  console.log(btnClass);
  if(btnClass!='showmenu'){
    $(this).children('span').addClass('showmenu');
    $('.banner-menu .menu-ul').slideDown().addClass('showmenu');
  }else{
    $(this).children('span').removeClass('showmenu');
    $('.banner-menu .menu-ul').slideUp().removeClass('showmenu');
  }
})


// tips-Content contentImg auto height
$(window).resize(function(){
  var tipsContentImgWidth = $('.tips-content .content .contentA-img').width();
  // console.log(tipsContentImgWidth);

  $('.tips-content .content .contentA-img').css('height',tipsContentImgWidth);
  $('.tips-content .content .contentB-img').css('height',tipsContentImgWidth);
  $('.tips-content .content .contentC-img').css('height',tipsContentImgWidth);
});

//form-li toggle
var formLi = $(".form-li").click(function(){
  $(this).siblings('li').removeClass("checked");
  $(this).addClass("checked");
  $(".form-content").toggleClass('form-content-show');
  console.log(formLi);
})

