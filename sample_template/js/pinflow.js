jQuery.fn.forceNumeric = function () {
 return this.each(function () {
     $(this).keydown(function (e) {
         var key = e.which || e.keyCode;

         if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
         // numbers   
             key >= 48 && key <= 57 ||
         // Numeric keypad
             key >= 96 && key <= 105 ||
         // comma, period and minus, . on keypad
            key == 190 || key == 188 || key == 109 || key == 110 ||
         // Backspace and Tab and Enter
            key == 8 || key == 9 || key == 13 ||
         // Home and End
            key == 35 || key == 36 ||
         // left and right arrows
            key == 37 || key == 39 ||
         // Del and Ins
            key == 46 || key == 45)
             return true;

         return false;
     });
 });
}

$(".numberinput").forceNumeric();
				
var mobile;
var pin;
var rToken;

$("#notMobile").click(function ()
{
	
	$('#pin-entry').hide();
	
	$("#subscription-polling").hide();	
	
	$("#number-entry").show();
	
	$("#invalid-number-error").show();
	
	$("#submitMSISDN").prop('disabled', false);
		

});

$("#submitMSISDN").click(msisdnSubmit);
$("#submitPIN").click(pinSubmit);

$("#number").keypress(function (e)
{
    if (e.which == 13)
    {
        msisdnSubmit();
    }
});

$("#pin").keypress(function (e)
{
    if (e.which == 13)
    {
        pinSubmit();
    }
});

function msisdnSubmit()
{

    mobile = $("#number").val();

    $(this).prop('disabled', true);

    if (!$('input[name="accept"]').is(':checked'))
    {

        $("#accept").focus();

        if (mobile == "")
        {
            $("#invalidNumber").show();
            
              $("#submitMSISDN").prop('disabled', false);
        }
        else
        {
            $("#acceptError").show()
            $("#invalidNumber").hide();

			$("#submitMSISDN").prop('disabled', false);
			
        }

    }
    else
    {

        if(mobile!="")
        {
			
			$("#numberEntry").hide();					
			$("#subscriptionPolling").show();

            $("#submitMSISDN").attr("disabled", 'disabled'); //prevent multiple concurrent submits

            function success()
            {
                
                
				$("#subscriptionPolling").hide();							
				$("#pin-entry").show();
                
                mobile = $("#number").val();

                $('#userMobile').html(mobile);

                $("#acceptError").hide()
                $("#invalidNumber").hide();
                $("#numberEntry").hide();
                

            }


            function fail(errorType,errorText)
            {

				$("#acceptError").hide();
				$("#subscriptionPolling").hide();
				$("#numberEntry").show();				 
				$("#invalidNumber").show();
				
				$("#submitMSISDN").removeAttr('disabled');

                var errorInfo = errorText + ' '+errorType;
                mbuyApi.trackWithDesc('msisdn-invalid', mobile+' '+errorInfo);
               
            }

            var myURL = sessionStorage.api_url;
            console.log('calling '+myURL);

			sammediaPayApi.sammediaValidateMsisdn(mobile, myURL, success, fail);

        }
    }

}

function pinSubmit()
{

    pin = $("#pin").val();

    if (pin && pin.length > 0)
    {
        $(this).prop('disabled', true);
        
		$("#pinEntry").hide();         
		$("#subscriptionPolling").fadeIn();

       
        $("#submitPIN").attr("disabled", 'disabled'); //prevent multiple concurrent submits

        function success(submissionId)
        {
			
			$("#pinntry").hide();
			$('#invalid-pin-error').hide();						
			$("#subscription-polling").hide();
                
            $("#congrats").show();			

            //overwrite configuration if SAM API returns a url
            //if(overwriteUrl) sessionStorage.redirectUrl = overwriteUrl;

            exit = function ()
            {
                setTimeout(function ()
                {
                    window.location.href = sessionStorage.redirectUrl;
                    console.log("exit");
                    
                }, 1500); //leave enough time to all the trackings to complete
            };

            if (sessionStorage.fbPixel) fbq('track', 'Purchase');

            gtag('event', 'conversion', {
                'send_to': 'AW-991530202/BzrVCLGbs4MBENqZ5tgD',
                'value': 1.0,
                'currency': 'USD',
                'transaction_id': submissionId
            });

            mbuyApi.conversion(null, exit, exit);
        }

        function fail(errorType,errorText)
        {

			$("#subscriptionPolling").hide();				
			$("#pinEntry").show();
			$('#invalidPin').show();
			   
            $("#submitPIN").removeAttr('disabled');

            mbuyApi.trackWithDesc('pin-fail',pin+' '+errorType+' '+errorText);
        }

		sammediaPayApi.sammediaValidatePin(pin, success, fail);
    }

}
	
	var stepNumber = 1;
	
	$("#step1 button").click(function(){
		
			startVideo();
		
	});
	
	$(".panel button").each(function(){
		
		$(this).click(function(){
			
			stepNumber++;
			
			$(".panel").hide();
			
			$("#step"+stepNumber).fadeIn();
			
			if(stepNumber==2){
						
				mbuyApi.track('step1');		
						
			}else if(stepNumber==3){
				
				mbuyApi.track('click');
				
				$(".warning").hide();
				
				setTimeout(function(){
					
					$("#step3").fadeOut(function(){
						
							$("#number-entry").fadeIn();
						
					});
								
				}, 3000);
				
			}else{
				
				mbuyApi.track('lead');
				if (sessionStorage.fbPixel) fbq('track', 'Lead');
				gtag('event', 'conversion', {'send_to': 'AW-991530202/4c70CP6yo4MBENqZ5tgD'});
				
			}			
			
		})
		
	})
	


};
	