//var something ="S@R! " + $("title").text();
//$("title").text(something);
//$("body").prepend(something);

var newTitle = "Some extension" + $("title").text();
$("title").text(newTitle);

$('#ToggleHiddenBasket').bind("DOMSubtreeModified", function() {
	$(".basketContent ul li.productItem .name").each(function(i, v) {
		console.log($(v).text());
	});	
});

//var tweet = '';

//$(".ProfileTweet-text").each(function(i, obj){tweet+="<p>"+$(obj).text()+"</p>" });
//$("body").html(tweet);
