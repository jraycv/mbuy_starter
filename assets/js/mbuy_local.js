$(document).ready(function(){

	function bracketReplacement(data)
	{
	
	    var content = $("#content");
	
	    var regExp = /\{{([^}}]+)\}}/g;
	
	    var matches = content.html().match(regExp);
	
	
	    $.each(matches, function ()
	    {
	
	        var $this = this.split("  ");
	
	        var removedBrackets = $this[0].substring(2, $this[0].length - 2);
	
	        var dataEach = {};
	
	        $.each(data, function (key, val)
	        {
	
	            if (typeof val == 'string')
	            {
	
	                dataEach[key] = val;
	
	            }
	            else
	            {
	
	                $.each(val, function (key2, val2)
	                {
	
	                    dataEach[key + '.' + key2] = val2;
	
	                });
	            }
	
	        });
	
	        $.each(dataEach, function (key, val)
	        {
	            if (removedBrackets === key)
	            {
	
	                var res = content.html().replace(key, val);
	
	                content = content.html(res.replace(/[{{}}]/g, ''));
	
	            }
	
	        });

	
	    });
	   	
	    
	}
	
	$.get("settings.txt", function(data) {
	
		var j = {};
		var a = data;	
		
		(a.split('\n')).map((a)=> a.split('=')).forEach(([a, b])=> 	j[a] = b); 
		
		if(j.broadcast !== "false"){
			
			document.title = j.title;
			
			var set_name = j.template;
			
			$("#container").css('opacity',1);
			
			$("#content").attr({'data-set':set_name});
				
			loadData();
			
		}else{

			window.location.href="../assets/404.html"

		}
	
		
	});

	function loadData(){
		
		$.get("text.txt", function(data) {
		
			var j = {};
			var a = data;	
			
			(a.split('\n')).map((a)=> a.split('=')).forEach(([a, b])=> 	j['lang.'+a] = b); 
			
			bracketReplacement(j);
			
		});
		
	}	
	

});