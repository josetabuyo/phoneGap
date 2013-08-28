
var onDeviceReady = function() {         
    var clienteHTTP = new NodoClienteHTTP('http://router-vortex.herokuapp.com', 1000);             
    NodoRouter.instancia.conectarBidireccionalmenteCon(clienteHTTP);
    
	var gnStartX = 0;
	var gnStartY = 0;
	var gnEndX = 0;
	var gnEndY = 0;
	
	
	window.addEventListener('touchstart',function(event) {
	  gnStartX = event.touches[0].pageX;
	  gnStartY = event.touches[0].pageY;
	},false);

	window.addEventListener('touchmove',function(event) {
	  gnEndX = event.touches[0].pageX;
	  gnEndY = event.touches[0].pageY;
	},false);

	window.addEventListener('touchend',function(event) {
	  alert('START (' + gnStartX + ', ' + gnStartY + ')   END (' + gnEndX + ', ' + gnEndY + ')');
	},false);

};

$(document).ready(function() {  
    // are we running in native app or in browser?
    window.isphone = false;
    if(document.URL.indexOf("file://") == -1) {
        window.isphone = true;
    }

    if(window.isphone) {
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        onDeviceReady();
    }
});

