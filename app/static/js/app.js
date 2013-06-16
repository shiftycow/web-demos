requirejs.config({
    "baseUrl": "/static/js/lib"
    ,"paths": {
      "app": "/static/js"
    }
    ,"shim": {
        "bootstrap": ["jquery"] //shim for Twitter Bootstrap
    }
});


// For this simple application, there's no main.js, but we need to init some stuff
//for bootstrap to work properly. This could also be done in your main.js file
require(["jquery","bootstrap"], function($){ 
    
    //because of the way bootstrap loads, it doesn't seem to apply bindings to 
    //elements using its markup API, so we need to go and find those manually 

    //apply bindings for alert dialogs
    $(".close").click(function(){
        $("."+$(this).data('dismiss')).alert('close');
    });
  
    console.log("loaded bootstrap and applied bindings"); //DEBUG 
});
