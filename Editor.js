
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


var getRealContentHeight = function () {
	var header = $.mobile.activePage.find("div[data-role='header']:visible");
	var footer = $.mobile.activePage.find("div[data-role='footer']:visible");
	var content = $.mobile.activePage.find("div[data-role='content']:visible:visible");
	var viewport_height = $(window).height();

	var content_height = viewport_height - header.outerHeight() - footer.outerHeight();
	if((content.outerHeight() - header.outerHeight() - footer.outerHeight()) <= viewport_height) {
		content_height -= (content.outerHeight() - content.height());
	} 
	return content_height - 2;
};

//$(document).ready(function() {  
$(function() {  

	$(document).on('pageshow', '#index', function(){       
		$('#content').height(getRealContentHeight());
	});

	


	
	
	
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

