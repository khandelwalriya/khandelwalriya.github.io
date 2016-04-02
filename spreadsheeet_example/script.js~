$(document).ready(function() {

loadPORS();
var vm = new ViewModel();
});


var spreadsheetID = "1z0t3OvbvZcJJUYYZYgdZvWrIxdCODmfDnqF8kjAq8jc";
var pors = [];
function loadPORS(){
	// Make sure it is public or set to Anyone with link can view
	var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
	
	var jqxhr = $.getJSON(url);
	
	// Set another completion function for the request above
	jqxhr.done(function() {
		entries = jqxhr.responseJSON.feed.entry;
		
		$(entries).each(function(){
			var por ={};
			por.questions = this.gsx$questions.$t;
			por.a = this.gsx$a.$t;
			por.b = this.gsx$b.$t;
			por.c = this.gsx$c.$t;
			por.d=this.gsx$d.$t;
			por.answer=this.gsx$answer.$t;
			pors.push(por);
		});
ko.applyBindings(pors, document.getElementById("pors"));
});	
}

 function ViewModel () {
          radioSelectedOptionValue= ko.observable("1") // Initially first option is selected
   };


 


  
