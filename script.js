setInterval(() => {
let day = new Date();
let hourr = day.getHours();
let minutess = day.getMinutes();
let secondss = day.getSeconds();
if(hourr>12){
	var hour = hourr-12;
	
}else{
	hour = hourr;
	
}
var time = hour+":"+minutess+":"+secondss;
document.querySelector('.clock').innerHTML=time;})