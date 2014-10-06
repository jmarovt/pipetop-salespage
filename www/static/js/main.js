var $document = $(document);
var $element = $("#navbar-top");
var className = "navbar-inverse";
var homeUrl = 'http://127.0.0.1:8080/';
var currentUrl = document.URL;
var anchorLinks = [
"ecommerce-recommendation-engine",
"ecommerce-esp",
"ecommerce-fulfillment-solution",
"market-segmentation",
"modern-lead-attributes",
"rich-sales-conappend",
"crm-integration"
];

//Switch the navbar to navbar-inverse if not on front page. And switch to navbar-inverse when scrolling further down on front page.

if (document.URL == homeUrl){

	$document.ready(function() {

		$("#navbar-top").removeClass(className);

	});

	$document.scroll(function() {

	if ($document.scrollTop() >= 50) {
		$("#navbar-top").addClass(className);
	  } else {
	    $("#navbar-top").removeClass(className);
	  }

	});

}


//Scroll nicely down to the appropriate anchor section

function scrollToAnchor(aid){
    var aTag = $("div[id='"+ aid +"']");
    $('html,body').animate({scrollTop:aTag.offset().top},'slow');
}

for (var key in anchorLinks){

	$("#"+anchorLinks[key]).click(function(){
   		scrollToAnchor('anchor-'+ $(this).attr("id"));
	});

}

//Make the current page 'active' in the navbar

if (document.URL.indexOf("features.html") > -1){

	$("#navbar-features").addClass("active");

}
else if (document.URL.indexOf("customer-cases.html") > -1){

		$("#navbar-customer-cases").addClass("active");

}
else if (document.URL.indexOf("ecommerce-recommendation-engine.html") > -1){

	$("#sidebar-ecommerce-recommendation-engine").addClass("active");

}
else if (document.URL.indexOf("ecommerce-esp.html") > -1){

	$("#sidebar-ecommerce-esp").addClass("active");

}
else if (document.URL.indexOf("ecommerce-fulfillment-solution.html") > -1){

	$("#sidebar-ecommerce-fulfillment-solution").addClass("active");

}






