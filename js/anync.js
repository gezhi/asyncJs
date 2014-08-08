(function(){
    "use strict";
    var scripts = ['js/jquery-1.11.1.min.js','js/can.jquery.js','js/common.js','js/index.js'];
    var i = 0;
    var asyncJs = function(js){
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = js;
        document.getElementsByTagName('head')[0].appendChild(script);
        script.onload = script.onreadystatechange = function(){
            if(!script.readyState || 'loaded' === script.readyState || 'complete' === script.readyState){
                i++;
                script.onload = script.onreadystatechange = null;
                delete script.onload;
                if(i < scripts.length){
                    asyncJs(scripts[i]);
                }else{
                    i = null;
                }
            }
        }
    }
    asyncJs(scripts[i]);
})();
