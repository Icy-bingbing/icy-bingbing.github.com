/**
 * Created by bing on 2016/5/25.
 */
;(function(window){
    var left=0;
    var iSpeed=0;
    var timer;
    window.tMove=function(obj, iTarget){
        clearInterval(timer);
        timer=setInterval(function(){
            iSpeed+=(iTarget-obj.offsetLeft)/5;
            iSpeed*=0.75;
            left+=iSpeed;
            obj.style.left=Math.floor(left)+'px';

            if(Math.floor(left)==iTarget && Math.floor(iSpeed)==0){
                clearInterval(timer);
            }
        }, 30)
    };
})(window);
