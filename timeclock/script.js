
var main=function(){
		var now=new Date();
		var hours=now.getHours();
		var minutes=now.getMinutes();
		var seconds=now.getSeconds();
		var meridiem="AM";
		
		var weekday = new Array(7);
		weekday[0]=  "Sunday";
		weekday[1] = "Monday";
		weekday[2] = "Tuesday";
		weekday[3] = "Wednesday";
		weekday[4] = "Thursday";
		weekday[5] = "Friday";
		weekday[6] = "Saturday";
		var n1 = weekday[now.getDay()];

		var month = new Array();
		month[0] = "January";
		month[1] = "February";
		month[2] = "March";
		month[3] = "April";
		month[4] = "May";
		month[5] = "June";
		month[6] = "July";
		month[7] = "August";
		month[8] = "September";
		month[9] = "October";
		month[10] = "November";
		month[11] = "December";
		var n = month[now.getMonth()];
		var n2=now.getDate();
		var year=now.getFullYear();
		var clockdis1=document.getElementById('para');
var clockdis2=document.getElementById('para1');
var clockdis3=document.getElementById('para2');
		if(hours>=12)
		{
			hours=hours-12;
			meridiem="PM";
		}
		if (hours === 0) {
   		 hours = 12;    
		}
		if(seconds<10)
		{
			seconds=="0"+seconds;
		}

	/*var para = document.createElement("P");
	var t = document.createTextNode(hours+":"+minutes+":"+seconds+"  "+meridiem);
	var t1=document.createTextNode(n+" "+n2+" ,"+year);
	var t2=document.createTextNode(n1);
	var para1 = document.createElement("P");
	var para2 = document.createElement("P");
	para2.appendChild(t2);
	para1.appendChild(t1);    
	para.appendChild(t);
	clockdis.appendChild(para2);
	  clockdis.appendChild(para1);
	clockdis.appendChild(para); */		
//clockdis.innerText=hours+":"+minutes+":"+seconds+"  "+meridiem;
clockdis3.innerText=hours+":"+minutes+":"+seconds+"  "+meridiem;
clockdis1.innerText=n1;
clockdis2.innerText=n+" "+n2+" ,"+year;
	setInterval(main, 1000);
	}
$(document).ready(main);

var ctx = document.querySelector("canvas").getContext("2d"),
    dashLen = 220, dashOffset = dashLen, speed = 5,
    txt = "TIC-TAC CLOCK", x = 30, i = 0;

ctx.font = "50px Comic Sans MS, cursive, TSCu_Comic, sans-serif"; 
ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
ctx.strokeStyle = ctx.fillStyle = "#b32400";

(function loop() {
  ctx.clearRect(x, 0, 60, 150);
  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
  dashOffset -= speed;                                         // reduce dash length
  ctx.strokeText(txt[i], x, 90);                               // stroke letter

  if (dashOffset > 0) requestAnimationFrame(loop);             // animate
  else {
    ctx.fillText(txt[i], x, 90);                               // fill final letter
    dashOffset = dashLen;                                      // prep next char
    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
    ctx.rotate(Math.random() * 0.005);                         // random rotation
    if (i < txt.length) requestAnimationFrame(loop);
  }
})();
