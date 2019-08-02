$(document).ready(function(){
/*click function of slide up down and toggle*/
	
var counter = 0;
	
var paras = $(".ref");

console.log(paras);

for(var i=1; i<paras.length; i++){
	$(paras[i]).prepend("this is ref"+i +"");
	$(paras[i]).css('display',"none");
}

$("h1").click(function(){
	
	$("#change").attr("scr", "");
	$(paras[counter]).slideUp();
	counter = counter +1;
	$(paras[counter]).slideDown();

});

$("h2").click(function(){
	$("#popme").slideToggle();
});

});