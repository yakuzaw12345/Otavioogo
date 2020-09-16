$(document).ready(function() {
    var botao = $('.bt1);
    var dropDown = $('.ul-noticias');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   //