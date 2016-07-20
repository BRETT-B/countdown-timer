

/*===============================================
				GRAD COUNTDOWN
===============================================*/
var gradStart = new Date('October 28, 2016 19:00').getTime();
// Time in seconds between the current time and July cohort graduation day
function gradCounter(){
	var now = new Date();
	var getTimeToGrad = (gradStart - now);

	// Get various units of time until event
	var seconds = Math.floor((getTimeToGrad/1000) % 60);
	var minutes = Math.floor((getTimeToGrad/1000/60) % 60);
	var hours = Math.floor((getTimeToGrad/(1000*60*60)) % 60);
	var days = Math.floor(getTimeToGrad/(1000*60*60*24) % 7);
	var weeks = Math.floor(getTimeToGrad/(1000*60*60*24*7));


	var countdownTimer = document.getElementById('grad');
	// Target elements by using getElementsByClass ([]), getElememntsByTag ([]), 
	//getElementById, or querySelector
	var weeksTicker = countdownTimer.querySelector('.weeks-number');
	var daysTicker = countdownTimer.querySelector('.days-number');
	var hoursTicker = countdownTimer.querySelector('.hours-number');
	var minutesTicker = countdownTimer.querySelector('.minutes-number');
	var secondsTicker = countdownTimer.querySelector('.seconds-number');

	// Set the HTML of the given unit
	weeksTicker.innerHTML = weeks;
	daysTicker.innerHTML = days;
	hoursTicker.innerHTML = hours;
	minutesTicker.innerHTML = minutes;
	secondsTicker.innerHTML = seconds;
}
setInterval(gradCounter, 1000); //Update counter every 1000ms or 1 second

/*================================================
				RIO COUNTDOWN
=================================================*/

var rioStart = new Date('August 5, 2016 19:00').getTime();
// Time in seconds between the current time and Rio 2016
function rioCounter(){
	var now = new Date();
	var getTimeToRio = (rioStart - now);

	// Get various units of time until event
	var seconds = Math.floor((getTimeToRio/1000) % 60);
	var minutes = Math.floor((getTimeToRio/1000/60) % 60);
	var hours = Math.floor((getTimeToRio/(1000*60*60)) % 60);
	var days = Math.floor(getTimeToRio/(1000*60*60*24) % 7);
	var weeks = Math.floor(getTimeToRio/(1000*60*60*24*7));


	var countdownTimer = document.getElementById('rio');
	// Target elements by using getElementsByClass ([]), getElememntsByTag ([]), 
	//getElementById, or querySelector
	var weeksTicker = countdownTimer.querySelector('.weeks-number');
	var daysTicker = countdownTimer.querySelector('.days-number');
	var hoursTicker = countdownTimer.querySelector('.hours-number');
	var minutesTicker = countdownTimer.querySelector('.minutes-number');
	var secondsTicker = countdownTimer.querySelector('.seconds-number');

	// Set the HTML of the given unit
	weeksTicker.innerHTML = weeks;
	daysTicker.innerHTML = days;
	hoursTicker.innerHTML = hours;
	minutesTicker.innerHTML = minutes;
	secondsTicker.innerHTML = seconds;
}
setInterval(rioCounter, 1000); //Update counter every 1000ms or 1 second

/*================================================
			ELECTION DAY COUNTDOWN
================================================*/

var electionStart = new Date('November 8, 2016 00:01').getTime();
// Time in seconds between the current time and Rio 2016
function electionCounter(){
	var now = new Date();
	var getTimeToElection = (electionStart - now);

	// Get various units of time until event
	var seconds = Math.floor((getTimeToElection/1000) % 60);
	var minutes = Math.floor((getTimeToElection/1000/60) % 60);
	var hours = Math.floor((getTimeToElection/(1000*60*60)) % 60);
	var days = Math.floor(getTimeToElection/(1000*60*60*24) % 7);
	var weeks = Math.floor(getTimeToElection/(1000*60*60*24*7));


	var countdownTimer = document.getElementById('election');
	// Target elements by using getElementsByClass ([]), getElememntsByTag ([]), 
	//getElementById, or querySelector
	var weeksTicker = countdownTimer.querySelector('.weeks-number');
	var daysTicker = countdownTimer.querySelector('.days-number');
	var hoursTicker = countdownTimer.querySelector('.hours-number');
	var minutesTicker = countdownTimer.querySelector('.minutes-number');
	var secondsTicker = countdownTimer.querySelector('.seconds-number');

	// Set the HTML of the given unit
	weeksTicker.innerHTML = weeks;
	daysTicker.innerHTML = days;
	hoursTicker.innerHTML = hours;
	minutesTicker.innerHTML = minutes;
	secondsTicker.innerHTML = seconds;
}
setInterval(electionCounter, 1000); //Update counter every 1000ms or 1 second
/*==============================================
				ON CLICK FUNCTIONS
==============================================*/


