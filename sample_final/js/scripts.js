function pageReady(){
	
	console.log("Welcome to Mbuy...");
	
	/* Insert all your page scripts here.. */
	
	var backgroundParallax = document.getElementById('parallax');

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function(eventData) {
            var LR = eventData.gamma;
            var FB = eventData.beta;
            var DIR = eventData.alpha;
            deviceOrientationHandler(LR, FB, DIR);
        }, false);
    }

    function deviceOrientationHandler(LR, FB, DIR) {

        if(window.innerHeight < window.innerWidth){
        
            // landscape

            var landscapePosition = "translate3d("+(FB/4)+"px, "+(LR/4)+"px, 0)";

            backgroundParallax.style.webkitTransform = landscapePosition;
            backgroundParallax.style.MozTransform = landscapePosition;
            backgroundParallax.style.msTransform = landscapePosition;
            backgroundParallax.style.OTransform = landscapePosition;
            backgroundParallax.style.transform = landscapePosition;
            
        } else {
        
            // portrait

            var portraitPosition = "translate3d("+(LR/4)+"px, "+(FB/4)+"px, 0)";

            backgroundParallax.style.webkitTransform = portraitPosition;
            backgroundParallax.style.MozTransform = portraitPosition;
            backgroundParallax.style.msTransform = portraitPosition;
            backgroundParallax.style.OTransform = portraitPosition;
            backgroundParallax.style.transform = portraitPosition;
            
        }

    }
	
}

 $(document).ready(function (){
	 
	 
	pageReady();
	 
	 
});


	