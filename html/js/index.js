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
		var src = "";
		if ($(this).hasClass("p6")) {
			src = "img/S5100.png";
		} else if ($(this).hasClass("p7")) {
			src = "img/S5200.png";
		} else if ($(this).hasClass("p8")) {
			src = "img/S5300.png";
		}
		$img.attr("src", src);
	}, function() {
		var $img = $(this).find("img");
		$img.attr("src", "img/S5000.png");
	});

});