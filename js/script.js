$(document).ready(function() {
    //Select search button and define its click function
    $("#search").click(function() {
    	//get the value of input in the search field
	    var searchQuery = $(".search-field").val();
	    //store the wiki API url in a variable
	    var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchQuery + "&format=json&callback=?";
	    $.ajax({
	    	type: "GET",
	    	url: api,
	    	async: true,
	    	dataType: "json",
	    	success: function(data) {
	    		$("#output").html('');
	    		for(var i = 0; i < 10; i++) {
	    			$("#output").prepend('<li class="list"><a href="'+data[3][i]+'"><h3>'+data[1][i]+'</h3><p>'+data[2][i]+'</p></li>');
	    		}
	    	},
	    	error:function() {
	    		alert("Sorry, request failed to process.");
	    	}
	    });
  }); 
  $('.search-form').submit(function(e) {
        e.preventDefault();
    }); 
});
