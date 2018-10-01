setTimeout(function(){
	
		var select_selectState = document.createElement('select');
		select_selectState.id = "select-state";
		select_selectState.style.zIndex= 99;
		select_selectState.style.position = "absolute";
		select_selectState.style.top = "25px";
		select_selectState.style.right = "0";
		select_selectState.style.left = "0";
		select_selectState.style.margin = "0 auto";
		select_selectState.style.width = "180px";
			
		
		var option_0 = document.createElement('option');
			option_0.value = "numberEntry";
			option_0.appendChild( document.createTextNode("Mobile Entry") );
			select_selectState.appendChild( option_0 );
		
		
		var option_1 = document.createElement('option');
			option_1.value = "pinEntry";
			option_1.appendChild( document.createTextNode("PIN Entry") );
			select_selectState.appendChild( option_1 );
			
		var option_2 = document.createElement('option');
			option_2.value = "subscriptionPolling";
			option_2.appendChild( document.createTextNode("Subscription Polling") );
			select_selectState.appendChild( option_2 );
		
		
		var option_3 = document.createElement('option');
			option_3.value = "congrats";
			option_3.appendChild( document.createTextNode("Congratulations") );
			select_selectState.appendChild( option_3 );
	
	document.body.appendChild( select_selectState );
		
	var state = "",
	container = document.getElementById('container'),
	selectState = document.getElementById('select-state'),
	trigger = document.getElementById('info');
	
	selectState.style.display="none";
	
	trigger.addEventListener('click', function(){
		
		toggle_visibility("select-state");
		
	})
	
	function toggle_visibility(id) {
	       var e = document.getElementById(id);
	       if(e.style.display == 'block')
	          e.style.display = 'none';
	       else
	          e.style.display = 'block';
	}
		
	var page = ['switchState'];
	
	var pageStates = [ 
				"numberEntry",
				"pinEntry",
				"subscriptionPolling",
				"congrats"
				];
	
	var states = function(state){
		
		for (var i=0;  pageStates.length > i; i++){
		
			var newState = pageStates[i];
			
			document.getElementById(newState).style.display="none";		
				
		}
		
		document.getElementById(state).style.display="block";
		
		selectState.value = state;		
		container.className="";
		container.classList.add('show-'+state);
		
	}
	
	page.switchState = states;
	
	selectState.addEventListener('change',function(){
	
		page.switchState(this.value);
		
		console.log('page.switchState('+this.value+');');	
	
	});
	
},100)