//Extracts and prints the items in the cart.
$('#ToggleHiddenBasket').bind("DOMSubtreeModified", function() {
	$(".basketContent ul li.productItem .name").each(function(i, v) {
		console.log($(v).text());
	});	
});

