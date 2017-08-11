"use strict";
(function() {

    // 控制根字体大小
    var winWidth = document.body.clientWidth;
    if ( winWidth > 640 ) {
        winWidth = 640;
    }
    document.querySelector('html').style.fontSize = winWidth/640 * 24 + 'px';
    window.addEventListener('orientationchange', function(event){
        winWidth = document.body.clientWidth;
        if ( winWidth > 640 ) {
            winWidth = 640;
        }
        document.querySelector('html').style.fontSize = winWidth/640 * 24 + 'px';
    });

})();

var commonMthods = {
    getUrlPram : function(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"),
            r = window.location.search.substr(1).match(reg);
        if(r!=null) {
            return  decodeURI(r[2]);
        }
        return null;
    },
    
    format : function(time) {
        var date = new Date(time);
        function two(day) {
            if( day<10 ) {
                return '0' + day;
            }
            return day;
        }
        return  date.getFullYear()+ '-' + two(date.getMonth()+1) + '-' + 
        two(date.getDate());
    },
};

export default commonMthods;