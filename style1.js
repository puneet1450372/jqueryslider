var s;
var x;
function page(c){
    $('figure').css('left', -c + "%");
   var z=c/100;
    x=c;
    $('span').removeClass('active');
    $('span:nth-child('+(z+1)+')').addClass("active");
    
   } 

var y = $('img').length;
        $(document).ready(function () {
            
            
         var x = 0;
            $('.pre').click(function () {

                if (x >= 100) {
                    x = (x - 100);
                }
                else {
                    x = 400;
                }
                $('figure').css('left', -x + "%");
                z=x/100;
                $('span').removeClass('active');
                $('span:nth-child('+(z+1)+')').addClass("active");
            });

            $('.next').click(function () {
                if (x <= 300) {
                    x = x + 100;
                }
                else {
                    x = 0;
                }
                
                $('figure').css('left', -x + "%");
                z=x/100;
                $('span').removeClass('active');
                $('span:nth-child('+(z+1)+')').addClass("active");
                });
            function start(){
                    s=setInterval(function(){
                   x= (x<=300)?(x+100):0;
                var   z=x/100;
                   $('span').removeClass('active');
                   $('figure').css('left', -x+'%');
                   $('span:nth-child('+(z+1)+')').addClass("active");
                   
                   },3000);
                }
                   
            function stop(){
                   clearInterval(s);
                }
             $('.next,.pre,.pagination,figure').on({mouseenter:stop,mouseleave:start});  
});

