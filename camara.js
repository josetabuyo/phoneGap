var onDeviceReady = function() {
	
	
	/*
	// VORTEX //
	var router =  new NodoRouter("principal"); 
	var socket = io.connect('http://router-vortex.herokuapp.com');
	var conector_socket = new NodoConectorSocket(socket);
	router.conectarBidireccionalmenteCon(conector_socket);
	
	var nodo_app_vxv = new NodoAppVortexVideo();
	router.conectarBidireccionalmenteCon(nodo_app_vxv);
	
	nodo_app_vxv.dibujarEn($('#panel_principal'));
	*/
	
	
	/*
	// RECEPTOR CAMARA //
	NodoReceptorVideo.prototype.frameRecibido = function(mensaje){
	this.img.attr('src', mensaje.frame);
	*/
	
	
	
	
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
