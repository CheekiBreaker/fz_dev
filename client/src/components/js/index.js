/*
$('.email').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.email').click(
  function(){
    console.log("Something");
    $('.email-section').addClass("fold-up");
    $('.password-section').removeClass("folded");
  }
);

$('.password').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-lock').addClass("next");
    } else {
      $('.icon-lock').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.password').click(
  function(){
    console.log("Something");
    $('.password-section').addClass("fold-up");
    $('.repeat-password-section').removeClass("folded");
  }
);

$('.repeat-password').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-repeat-lock').addClass("next");
    } else {
      $('.icon-repeat-lock').removeClass("next");
    }
  }
);

$('.next-button.repeat-password').click(
  function(){
    console.log("Something");
    $('.repeat-password-section').addClass("fold-up");
    $('.success').css("marginTop", 0);
  }
);
*/
function addition() {
  var a = parseFloat(document.getElementById('a').value);
  var b = parseFloat(document.getElementById('b').value);


  if (isNaN(a)==true) a==0;
  if (isNaN(b)==true) b==0;
  
 switch (true){
     case document.getElementById('4').checked:/*Обработчик не бывшей нагрузки*/
         if ((a == 3 || a < 3 ) && (b == 0 || b == isNaN || b < 4)){
             document.getElementById('result').innerHTML ='Покушай, иначе станет плохо';
          }else{
             if (a<5 && b < 5){
                 var c = (a + b) / 4 ;
                 document.getElementById('result').innerHTML = c +' Ед.';
              }
              else{
                  if (a < 5 && b > 5){
                     var c = (a + b) / 2 ;
                     document.getElementById('result').innerHTML = c+' Ед.';
                  }
                  else{
                      if (a == 5 && b == 5){
                         var c = a ;
                         document.getElementById('result').innerHTML = c+' Ед.';
                      }
                      else{
                          if (a > 5 && a < 15 && b < 5){
                             var c = b;
                             document.getElementById('result').innerHTML = c+' Ед.';
                          }
                          else{
                              if (a >5 && a < 15 && b > 5){
                                 var c = b ;
                                 document.getElementById('result').innerHTML = c+' Ед.';
                              }
                              else{
                                  if (a > 5 && a < 15 && b == 5){
                                     var c = b ;
                                     document.getElementById('result').innerHTML = c+' Ед.';
                                  }
                                  else{
                                      if ( a == 5 && b > 5){
                                         var c = b-1 ;
                                         document.getElementById('result').innerHTML = c+' Ед.';
                                      }
                                      else{
                                          if ( a == 5 && b < 5){
                                             var c = b-1 ;
                                             document.getElementById('result').innerHTML = c+' Ед.';
                                          }
                                          else{
                                              if ( a == 15 && b > 5){
                                                 var c =( a + b ) / 2 ;
                                                 document.getElementById('result').innerHTML = c+' Ед.';
                                              }
                                              else{
                                                  if ( a == 15 && b < 5){
                                                     var c =(a + b) -10  ;
                                                     document.getElementById('result').innerHTML = c+' Ед.';
                                                  }
                                                  else{
                                                      if ( a > 15 && b > 5){
                                                         var c = (a + b) / 2 ;
                                                         document.getElementById('result').innerHTML = c+' Ед.';
                                                      }
                                                      else{
                                                         if ( a > 15 && b < 5){
                                                             var c = (a + b) - 6 ;
                                                             document.getElementById('result').innerHTML = c+' Ед.';
                                                          }
                                                          else{
                                                             if ( a > 15 && b == 5){
                                                                 var c = (a + b) / 2 ;
                                                                 document.getElementById('result').innerHTML = c+' Ед.';
                                                              }else{
                                                                 if ( c < 0 || c < 4){
                                                                     document.getElementById('result').innerHTML = c + ' pohavay';
                                                                 };
                                                              };
                                                          };
                                                      };
         
                                                  };
                                              };
                                          };
                                      };
                                  };
                              };
                          };
                      };
                     };
                 };
             };
          break;
          case document.getElementById('1').checked:/*Обработчик легкой нагрузки*/
             if ((a == 3 || a < 3 ) && (b == 0 || b == isNaN || b < 4)){
                 document.getElementById('result').innerHTML ='Покушай, иначе станет плохо';
              }else{
                 if (a<5 && b < 5){
                     var c = (a + b) / 8 ;
                     document.getElementById('result').innerHTML = c + ' подъешь на еще 0.5 ХЕ, чтобы не стало плохо';
                  }
                  else{
                      if (a < 5 && b > 5){
                         var c = (a + b) / 2 ;
                         document.getElementById('result').innerHTML = c+' Ед.';
                      }
                      else{
                          if (a == 5 && b == 5){
                             var c = a - 0.5 ;
                             document.getElementById('result').innerHTML = c+' Ед.';
                          }
                          else{
                              if (a > 5 && a < 15 && b < 5){
                                 var c = b + 1;
                                 document.getElementById('result').innerHTML = c+' Ед.';
                              }
                              else{
                                  if (a >5 && a < 15 && b > 5){
                                     var c = b ;
                                     document.getElementById('result').innerHTML = c+' Ед.';
                                  }
                                  else{
                                      if (a > 5 && a < 15 && b == 5){
                                         var c = b ;
                                         document.getElementById('result').innerHTML = c+' Ед.';
                                      }
                                      else{
                                          if ( a == 5 && b > 5){
                                             var c = b-1 ;
                                             document.getElementById('result').innerHTML = c+' Ед.';
                                          }
                                          else{
                                              if ( a == 5 && b < 5){
                                                 var c = b-1 ;
                                                 document.getElementById('result').innerHTML = c+' Ед.';
                                              }
                                              else{
                                                  if ( a == 15 && b > 5){
                                                     var c =( a + b ) / 2 ;
                                                     document.getElementById('result').innerHTML = c+' Ед.';
                                                  }
                                                  else{
                                                      if ( a == 15 && b < 5){
                                                         var c =(a + b) -10  ;
                                                         document.getElementById('result').innerHTML = c+' Ед.';
                                                      }
                                                      else{
                                                          if ( a > 15 && b > 5){
                                                             var c = (a + b) / 2 ;
                                                             document.getElementById('result').innerHTML = c+' Ед.';
                                                          }
                                                          else{
                                                             if ( a > 15 && b < 5){
                                                                 var c = (a + b) - 6 ;
                                                                 document.getElementById('result').innerHTML = c+' Ед.';
                                                              }
                                                              else{
                                                                 if ( a > 15 && b == 5){
                                                                     var c = (a + b) / 2 ;
                                                                     document.getElementById('result').innerHTML = c+' Ед.';
                                                                  }else{
                                                                     if ( c < 0 || c < 4){
                                                                         document.getElementById('result').innerHTML = c + ' pohavay';
                                                                     };
                                                                  };
                                                              };
                                                          };
             
                                                      };
                                                  };
                                              };
                                          };
                                      };
                                  };
                              };
                          };
                         };
                     };
          };
          break;
          case document.getElementById('2').checked:/*Обработчик средней нагрузки*/
             if ((a == 3 || a < 3 ) && (b == 0 || b == isNaN || b < 4)){
                 document.getElementById('result').innerHTML ='Покушай, иначе станет плохо';
              }else{
                 if (a<5 && b < 5){
                     var c = (a + b) / 4 ;
                     document.getElementById('result').innerHTML = c+' Ед.';
                  }
                  else{
                      if (a < 5 && b > 5){
                         var c = (a + b) / 2 ;
                         document.getElementById('result').innerHTML = c+' Ед.';
                      }
                      else{
                          if (a == 5 && b == 5){
                             var c = a ;
                             document.getElementById('result').innerHTML = c+' Ед.';
                          }
                          else{
                              if (a > 5 && a < 15 && b < 5){
                                 var c = b;
                                 document.getElementById('result').innerHTML = c+' Ед.';
                              }
                              else{
                                  if (a >5 && a < 15 && b > 5){
                                     var c = b ;
                                     document.getElementById('result').innerHTML = c+' Ед.';
                                  }
                                  else{
                                      if (a > 5 && a < 15 && b == 5){
                                         var c = b ;
                                         document.getElementById('result').innerHTML = c+' Ед.';
                                      }
                                      else{
                                          if ( a == 5 && b > 5){
                                             var c = b-1 ;
                                             document.getElementById('result').innerHTML = c+' Ед.';
                                          }
                                          else{
                                              if ( a == 5 && b < 5){
                                                 var c = b-1 ;
                                                 document.getElementById('result').innerHTML = c+' Ед.';
                                              }
                                              else{
                                                  if ( a == 15 && b > 5){
                                                     var c =( a + b ) / 2 ;
                                                     document.getElementById('result').innerHTML = c+' Ед.';
                                                  }
                                                  else{
                                                      if ( a == 15 && b < 5){
                                                         var c =(a + b) -10  ;
                                                         document.getElementById('result').innerHTML = c+' Ед.';
                                                      }
                                                      else{
                                                          if ( a > 15 && b > 5){
                                                             var c = (a + b) / 2 ;
                                                             document.getElementById('result').innerHTML = c+' Ед.';
                                                          }
                                                          else{
                                                             if ( a > 15 && b < 5){
                                                                 var c = (a + b) - 6 ;
                                                                 document.getElementById('result').innerHTML = c+' Ед.';
                                                              }
                                                              else{
                                                                 if ( a > 15 && b == 5){
                                                                     var c = (a + b) / 2 ;
                                                                     document.getElementById('result').innerHTML = c+' Ед.';
                                                                  }else{
                                                                     if ( c < 0 || c < 4){
                                                                         document.getElementById('result').innerHTML = c + ' pohavay';
                                                                     };
                                                                  };
                                                              };
                                                          };
             
                                                      };
                                                  };
                                              };
                                          };
                                      };
                                  };
                              };
                          };
                         };
                     };
                 };
          break;
          case document.getElementById('3').checked:/*Обработчик тяжелой нагрузки*/
             if ((a == 3 || a < 3 ) && (b == 0 || b == isNaN || b < 4)){
                 document.getElementById('result').innerHTML ='Покушай, иначе станет плохо';
              }else{
                 if (a<5 && b < 5){
                     var c = (a + b) / 4 ;
                     document.getElementById('result').innerHTML = c+' Ед.';
                  }
                  else{
                      if (a < 5 && b > 5){
                         var c = (a + b) / 2 ;
                         document.getElementById('result').innerHTML = c+' Ед.';
                      }
                      else{
                          if (a == 5 && b == 5){
                             var c = a ;
                             document.getElementById('result').innerHTML = c+' Ед.';
                          }
                          else{
                              if (a > 5 && a < 15 && b < 5){
                                 var c = b;
                                 document.getElementById('result').innerHTML = c+' Ед.';
                              }
                              else{
                                  if (a >5 && a < 15 && b > 5){
                                     var c = b ;
                                     document.getElementById('result').innerHTML = c+' Ед.';
                                  }
                                  else{
                                      if (a > 5 && a < 15 && b == 5){
                                         var c = b ;
                                         document.getElementById('result').innerHTML = c+' Ед.';
                                      }
                                      else{
                                          if ( a == 5 && b > 5){
                                             var c = b-1 ;
                                             document.getElementById('result').innerHTML = c+' Ед.';
                                          }
                                          else{
                                              if ( a == 5 && b < 5){
                                                 var c = b-1 ;
                                                 document.getElementById('result').innerHTML = c+' Ед.';
                                              }
                                              else{
                                                  if ( a == 15 && b > 5){
                                                     var c =( a + b ) / 2 ;
                                                     document.getElementById('result').innerHTML = c+' Ед.';
                                                  }
                                                  else{
                                                      if ( a == 15 && b < 5){
                                                         var c =(a + b) -10  ;
                                                         document.getElementById('result').innerHTML = c+' Ед.';
                                                      }
                                                      else{
                                                          if ( a > 15 && b > 5){
                                                             var c = (a + b) / 2 ;
                                                             document.getElementById('result').innerHTML = c+' Ед.';
                                                          }
                                                          else{
                                                             if ( a > 15 && b < 5){
                                                                 var c = (a + b) - 6 ;
                                                                 document.getElementById('result').innerHTML = c+' Ед.';
                                                              }
                                                              else{
                                                                 if ( a > 15 && b == 5){
                                                                     var c = (a + b) / 2 ;
                                                                     document.getElementById('result').innerHTML = c+' Ед.';
                                                                  }else{
                                                                     if ( c < 0 || c < 4){
                                                                         document.getElementById('result').innerHTML = c + ' pohavay';
                                                                     };
                                                                  };
                                                              };
                                                          };
             
                                                      };
                                                  };
                                              };
                                          };
                                      };
                                  };
                              };
                          };
                         };
                     };
                 };
          break;
 }
};