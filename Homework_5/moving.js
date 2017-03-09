window.onload=function(){
    var el = document.getElementById('elem');
    var listenEvents = function(events, func, trueOrFalse){
        return el.addEventListener(events, func, trueOrFalse);
    };
    var changeOnColor = function(){
        el.classList.remove('normal');
        el.classList.add('changed');
    };
    var changeOutColor = function(){
        el.classList.remove('changed');
        el.classList.add('normal');
    };
    var elemMoving = function(){
        var coordX = event.clientX,
            coordY = event.clientY;
        var coordElemX = el.getBoundingClientRect().left,
            coordElemY = el.getBoundingClientRect().top;
        var diffX = coordX-coordElemX,
            diffY = coordY-coordElemY;

        var changeCoord = function(){
            el.style.left = (event.clientX-diffX) + 'px';
            el.style.top = (event.clientY-diffY) + 'px';
        };

        var remEvents = function(){
            document.removeEventListener('mouseup', remEvents, false);
            document.removeEventListener('mousemove',changeCoord, false);
        };
        document.addEventListener('mousemove',changeCoord,false);
        document.addEventListener('mouseup',remEvents, false);
    };
    listenEvents('mousedown', elemMoving, false);
    listenEvents('mouseover', changeOnColor, false);
    listenEvents('mouseout', changeOutColor, false);
};