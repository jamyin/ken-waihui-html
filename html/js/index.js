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
	

	$(".aboutus").hover(function(){
		$(this).find("a").removeClass("aboutus-a").text("公司介绍");
	},function(){
		$(this).find("a").text("").addClass("aboutus-a");
	});
	$(".qual").hover(function(){
		$(this).find("a").removeClass("qual-a").text("公司资质");
	},function(){
		$(this).find("a").text("").addClass("qual-a");
	});
	$(".catering").hover(function(){
		$(this).find("a").removeClass("catering-a").text("宴会类型");
	},function(){
		$(this).find("a").text("").addClass("catering-a");
	});
	$(".menu").hover(function(){
		$(this).find("a").removeClass("menu-a").text("美食菜单");
	},function(){
		$(this).find("a").text("").addClass("menu-a");
	});
	$(".activity").hover(function(){
		$(this).find("a").removeClass("activity-a").text("活动案例");
	},function(){
		$(this).find("a").text("").addClass("activity-a");
	});
	$(".field").hover(function(){
		$(this).find("a").removeClass("field-a").text("场地推荐");
	},function(){
		$(this).find("a").text("").addClass("field-a");
	});
	$(".contanct").hover(function(){
		$(this).find("a").removeClass("contanct-a").text("联系我们");
	},function(){
		$(this).find("a").text("").addClass("contanct-a");
	});

});