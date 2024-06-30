$(document).ready(function(){
  let signup = $(".links").find("li").find("#signup") ; 
  let signin = $(".links").find("li").find("#signin") ;
  let reset  = $(".links").find("li").find("#reset")  ; 
  let first_input = $("form").find(".first-input");
  let hidden_input = $("form").find(".input__block").find("#repeat__password");
  let signin_btn  = $("form").find(".signin__btn");

  //----------- sign up ---------------------
  signup.on("click",function(e){
    e.preventDefault();
    $(this).parent().parent().siblings("h1").text("SIGN UP");
    $(this).parent().css("opacity","1");
    $(this).parent().siblings().css("opacity",".6");
    first_input.removeClass("first-input__block").addClass("signup-input__block");
    hidden_input.css({
      "opacity" : "1",
      "display" : "block"
    });
    signin_btn.text("Sign up");
  });
  

 //----------- sign in ---------------------
signin.on("click",function(e){
    e.preventDefault();
    $(this).parent().parent().siblings("h1").text("SIGN IN");
    $(this).parent().css("opacity","1");
    $(this).parent().siblings().css("opacity",".6");
    first_input.addClass("first-input__block")
      .removeClass("signup-input__block");
    hidden_input.css({
      "opacity" : "0",
      "display" : "none"
    });
    signin_btn.text("Sign in");
  });

 //----------- reset ---------------------
reset.on("click",function(e){
  e.preventDefault();
  $(this).parent().parent().siblings("form")
  .find(".input__block").find(".input").val("");
})
});

//--------------phone number-----------
function autoHypenPhone(str){
  str = str.replace(/[^0-9]/g, '');
  var tmp = '';
  if( str.length < 4){
      return str;
  }else if(str.length < 7){
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3);
      return tmp;
  }else if(str.length < 11){
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3, 3);
      tmp += '-';
      tmp += str.substr(6);
      return tmp;
  }else{              
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3, 4);
      tmp += '-';
      tmp += str.substr(7);
      return tmp;
  }
  return str;
}

var cellPhone = document.getElementById('cellPhone');
cellPhone.onkeyup = function(event){
event = event || window.event;
var _val = this.value.trim();
this.value = autoHypenPhone(_val) ;
}