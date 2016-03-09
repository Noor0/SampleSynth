var down=false;
var mx=0,my=0;
var point=0;
//var para=document.getElementById('aa');
var knob=document.getElementById('volumeKnobA').addEventListener("mousedown", function(){
	down=true;
	point=my;
})

document.addEventListener("mouseup", function(){
	down=false;
})

document.onmousemove=function(e){
	if(down==true){
		mx = e.pageX;
		my = e.pageY;
		var rota=0;
		para.innerHTML="X:"+mx+"Y:"+my+"point : "+point;
		rota=((my-point) / 1);
		if(rota<=270 && rota>=90){
    		document.getElementById('volumeKnobA').style.transform="rotate("+rota+"deg)";
    		document.getElementById('volumeKnobA').style.mozTransform="rotate("+rota+"deg)";
			document.getElementById('volumeKnobA').webkitTransform="rotate("+rota+"deg)";
			document.getElementById('volumeKnobA').style.OTransform="rotate("+rota+"deg)";
			document.getElementById('volumeKnobA').style.msTransform="rotate("+rota+"deg)";
		}
	}
}