$(function() {
	$(".ft,.eat-type-hd li,.s4-bd").hover(function() {
		var src = $(this).find("img").attr("src");
		$(this).find("img").attr("src", src.replace("0", "1"));
	}, function() {
		var src = $(this).find("img").attr("src");
		$(this).find("img").attr("src", src.replace("1", "0"));
	});
	
	$(".pri").hover(function() {
		var $img = $(this).find("img");
		var src = $img.attr("src");
		$img.attr("src", src.replace("-0", "-1"));
	}, function() {
		var $img = $(this).find("img");
		var src = $img.attr("src");
		$img.attr("src", src.replace("-1", "-0"));
	});

});