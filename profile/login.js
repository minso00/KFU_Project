$(document).ready(function(){
    let reset  = $(".links").find("li").find("#reset")  ; 
    let first_input = $("form").find(".first-input");
    let hidden_input = $("form").find(".input__block").find("#repeat__password");
    let signin_btn  = $("form").find(".signin__btn");
  
   //----------- reset ---------------------
  reset.on("click",function(e){
    e.preventDefault();
    $(this).parent().parent().siblings("form")
    .find(".input__block").find(".input").val("");
  })
});