(function ( $ ) {

    var defaults = {

        //events register
        onTouchStart: function(){},
        onTouchEnd: function(){}
    }

    $.fn.ctouchstart = function( options,callback ) {
       $(this).each(function(){
            var target = $(this).get(0);
            target.addEventListener('touchstart',function(e){
                event.preventDefault();
                callback(e);
            });
        });
    };

    $.fn.ctouchmove = function( options,callback ) {
       $(this).each(function(){
            var target = $(this).get(0);
            target.addEventListener('touchmove',function(e){
                event.preventDefault();
                callback(e);
            });
        });
    };

    $.fn.ctouchend = function(options,callback){
        $(this).each(function(){
            var target = $(this).get(0);
            target.addEventListener('touchend',function(e){
                event.preventDefault();
                callback(e);
            });
        });
    };

}( jQuery ));

//swipe 1,2,3,4,5 fingers
//touch 1,2,3,4,5 fingers
//getFingers(.count)
//doubleTap
//movement