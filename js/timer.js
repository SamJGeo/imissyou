


function timer(){
	var date_meeting = new Date("Aug 24, 2019 08:00:00").getTime();
	var current_time = new Date().getTime();


	dist = date_meeting-current_time

	var days = Math.floor(dist / (1000*60*60*24));
	var hours = Math.floor((dist % (1000*60*60*24)) / (1000*60*60)); 
	var minutes = Math.floor((dist % (1000*60*60)) / (1000*60));
	var seconds = Math.floor((dist % (1000*60)) / 1000);

	document.getElementById("countdown").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

}


function arrived(){
	document.getElementById("countdown").innerHTML="IM COMIN BABY";
}


function checker(){
	var date_meeting = new Date("Aug 24, 2019 08:00:00").getTime();
	var current_time = new Date().getTime();


	dist = date_meeting-current_time

	if (dist < 0){
		return true;
	} else {
		return false;
	}



}
