var title = ["第1个","第2个","第3个","第4个","第5个","第6个","第7个","第8个","第9个","第10个",
"第11个","第12个","第13个","第14个","第15个","第16个","第17个","第18个","第19个","第20个",
"第21个","第22个","第23个","第24个","第25个","第26个","第27个","第28个","第29个","第30个",
"第31个","第32个","第33个","第34个","第35个","第36个","第37个","第38个","第39个","第40个",
"第41个","第42个","第43个","第44个","第45个","第46个","第47个","第48个","第49个","第50个"];
$(document).ready(function(){
	for (var i=0; i<title.length; i++) {
		(function (i) {
		  setTimeout(() => anim(i), 200*i)
		})(i)
	}
})
function anim(i){
	//浏览器宽高内取随机值
	if(i%2==0){
		var winWidthR = (window.innerWidth*0.3-title[i].length*200)*Math.random()*(Math.random()-0.5);
	}
	else{
		var winWidthR = (window.innerWidth*0.3-title[i].length*200)*Math.random()+window.innerWidth*0.85;
	}
	var winHeightR = (window.innerWidth-200)*2*(Math.random()-0.5);
	//中心点宽高附近取随机值
	var centerWidth = (window.innerWidth*0.5-50)+50*Math.random();
	var centerHeight = (window.innerHeight*0.5-50)+50*Math.random();
	$("div").append("<span class='span"+i+"'>"+title[i]+"</span>");
	$(".span"+i).css({
		"font-size": Math.random(),
		"transform": "rotate3D(1,1,1,"+180*(Math.random()-0.5)+"deg)",
		"animation-name":"flyOff"+i,
		"-webkit-animation-name":"flyOff"+i,
	});
	var styleSheet = document.styleSheets[0];
	var flyStyle1="@keyframes flyOff"+i+"{0%{font-size:1px;top:"+centerHeight+"px;left:"+centerWidth+"px;}30%{font-size:400px;top:"+winHeightR+"px;left:"+winWidthR+"px;transform:rotate3D(1,1,1,"+180*(Math.random()-0.5)+"deg);visibility:hidden;}100%{visibility:hidden;}}";
	var flyStyle2="@-webkit-keyframes flyOff"+i+"{0%{font-size:1px;top:"+centerHeight+"px;left:"+centerWidth+"px;}30%{font-size:400px;top:"+winHeightR+"px;left:"+winWidthR+"px;transform:rotate3D(1,1,1,"+180*(Math.random()-0.5)+"deg);visibility:hidden;}100%{visibility:hidden;}}";
	styleSheet.insertRule(flyStyle1,2);
	styleSheet.insertRule(flyStyle2,3);
}
