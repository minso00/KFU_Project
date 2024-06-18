$("#category_li").click(function(){
  if($(".sub").is(":visible")) {
    $(".sub").slideUp();
  }
  else{
    $(".sub").slideDown();
  }
});
