$(".btn1").mouseover(function() {
	$(this).next().show(700);
})
$(".btn1").mouseout(function() {
	$(this).next().hide(400);
})


$(".close").click(function(){
$("#down").hide();
})
$("#smlbtn").click(function(){
$("#down").show();})

$("#buy_button").click(function(){
	$(".buy").toggle()
	
})





