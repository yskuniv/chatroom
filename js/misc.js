var misc = new (function(){})();

(function(){

    misc.pageReload = function(sec) {
        setInterval("location.reload()", sec * 1000);
    };

})();
