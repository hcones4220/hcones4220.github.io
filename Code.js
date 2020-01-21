// JavaScript Document
/* exported myFunction */

var time1 = 0;
var time2 = 0;
var time3 = 0;
var time4 = 0;
var time5 = 0;
var time6 = 0;

function myFunction() {
	var a = localStorage.getItem('depart'); // String stored in localStorage from Flights.html
	var b = localStorage.getItem('arrive'); // String stored in localStorage from Flights.html
	var x = document.getElementsByClassName('depart'); // Array with all elements with a class of 'depart'
	var y = document.getElementsByClassName('arrive'); // Array with all elements with a class of 'arrive'
	var i; // Variable created to loop through class arrays
	// Loops through all elements with a class name of 'depart'/'arrive' and changes the innerHTML of 
	//the names of the airports that you are leaving from and arriving at.
	for(i = 0; i < x.length; i++){
		x[i].innerHTML = a;
	}
	for(i = 0; i < y.length; i++){
		y[i].innerHTML = b;
	}
	var r = document.getElementsByClassName('airports');
	var departAbbr = a.slice(a.length - 4, a.length - 1);
	var arriveAbbr = b.slice(b.length - 4, b.length - 1);
	for(i = 0; i < r.length; i++){
		r[i].innerHTML = departAbbr + ' &rarr; ' + arriveAbbr;
	}
	
	// Gets and sets the date stored in localStorage
	var departDate = localStorage.getItem('departDate');
	var z = document.getElementsByClassName('departDate');
	for(i = 0; i < y.length; i++){
		z[i].innerHTML = '-- ' + departDate + ' --';
	}
	
	// Randomly generated a number for the minutes each flight takes ONE
	var flightMin1 = Math.floor(Math.random() * 60);
	if(flightMin1 < 20){
		flightMin1 += 30;
	} else if(flightMin1 > 50){
		flightMin1 -= 15;
	}
	document.getElementById('flightTime1').innerHTML = ('1h ' + flightMin1 + 'm');
	document.getElementById('otherTime2').innerHTML = ('1h ' + flightMin1 + 'm');
	time1 = flightMin1;
	// Randomly generated a number for the minutes each flight takes TWO
	var flightMin2 = Math.floor(Math.random() * 60);
	if(flightMin2 < 20){
		flightMin2 += 30;
	} else if(flightMin2 > 50){
		flightMin2 -= 15;
	}
	document.getElementById('flightTime2').innerHTML = ('1h ' + flightMin2 + 'm');
	document.getElementById('otherTime1').innerHTML = ('1h ' + flightMin2 + 'm');
	time2 = flightMin2;
	// Randomly generated a number for the minutes each flight takes THREE
	var flightMin3 = Math.floor(Math.random() * 60);
	if(flightMin3 < 20){
		flightMin3 += 30;
	} else if(flightMin3 > 50){
		flightMin3 -= 15;
	}
	document.getElementById('flightTime3').innerHTML = ('1h ' + flightMin3 + 'm');
	time3 = flightMin3;
	// Randomly generated a number for the minutes each flight takes FOUR
	var flightMin4 = Math.floor(Math.random() * 60);
	if(flightMin4 < 20){
		flightMin4 += 30;
	} else if(flightMin4 > 50){
		flightMin4 -= 15;
	}
	document.getElementById('otherTime3').innerHTML = ('1h ' + flightMin4 + 'm');
	time4 = flightMin4;
	// Randomly generated a number for the minutes each flight takes FIVE
	var flightMin5 = Math.floor(Math.random() * 60);
	if(flightMin5 < 20){
		flightMin5 += 30;
	} else if(flightMin5 > 50){
		flightMin5 -= 15;
	}
	document.getElementById('otherTime4').innerHTML = ('1h ' + flightMin5 + 'm');
	time5 = flightMin5;
	// Randomly generated a number for the minutes each flight takes SIX
	var flightMin6 = Math.floor(Math.random() * 60);
	if(flightMin6 < 20){
		flightMin6 += 30;
	} else if(flightMin6 > 50){
		flightMin6 -= 15;
	}
	document.getElementById('otherTime5').innerHTML = ('1h ' + flightMin6 + 'm');
	time6 = flightMin6;
}
/* exported loadA loadB loadC loadD loadE loadF loadG loadH*/
function loadA() {
	var x = 'Arizona Airlines';
	var y = document.getElementById('a2').innerHTML;
	var z = document.getElementById('a3').innerHTML;
	z = z.slice(1, z.length);
	localStorage.setItem('company', x);
	localStorage.setItem('departTime', y);
	localStorage.setItem('amount', z);
	var d = '1h ' + time1 + 'm';
	localStorage.setItem('duration', d);
}

function loadB() {
	var x = 'Arizona Airlines';
	var y = document.getElementById('b2').innerHTML;
	var z = document.getElementById('b3').innerHTML;
	z = z.slice(1, z.length);
	localStorage.setItem('company', x);
	localStorage.setItem('departTime', y);
	localStorage.setItem('amount', z);
	var duration = '1h ' + time2 + 'm';
	localStorage.setItem('duration', duration);
}

function loadC() {
	var x = 'Arizona Airlines';
	var y = document.getElementById('c2').innerHTML;
	var z = document.getElementById('c3').innerHTML;
	z = z.slice(1, z.length);
	localStorage.setItem('company', x);
	localStorage.setItem('departTime', y);
	localStorage.setItem('amount', z);
	var duration = '1h ' + time3 + 'm';
	localStorage.setItem('duration', duration);
}

function loadD() {
	var x = 'American Airlines';
	var y = document.getElementById('d2').innerHTML;
	var z = document.getElementById('d3').innerHTML;
	z = z.slice(1, z.length);
	localStorage.setItem('company', x);
	localStorage.setItem('departTime', y);
	localStorage.setItem('amount', z);
	var duration = '1h ' + time2 + 'm';
	localStorage.setItem('duration', duration);
}

function loadE() {
	var x = 'Alaska Airlines';
	var y = document.getElementById('e2').innerHTML;
	var z = document.getElementById('e3').innerHTML;
	z = z.slice(1, z.length);
	localStorage.setItem('company', x);
	localStorage.setItem('departTime', y);
	localStorage.setItem('amount', z);
	var duration = '1h ' + time1 + 'm';
	localStorage.setItem('duration', duration);
}

function loadF() {
	var x = 'American Airlines';
	var y = document.getElementById('f2').innerHTML;
	var z = document.getElementById('f3').innerHTML;
	z = z.slice(1, z.length);
	localStorage.setItem('company', x);
	localStorage.setItem('departTime', y);
	localStorage.setItem('amount', z);
	var duration = '1h ' + time4 + 'm';
	localStorage.setItem('duration', duration);
}

function loadG() {
	var x = 'Southwest Airlines';
	var y = document.getElementById('g2').innerHTML;
	var z = document.getElementById('g3').innerHTML;
	z = z.slice(1, z.length);
	localStorage.setItem('company', x);
	localStorage.setItem('departTime', y);
	localStorage.setItem('amount', z);
	var duration = '1h ' + time5 + 'm';
	localStorage.setItem('duration', duration);
}

function loadH() {
	var x = 'Delta Airlines'
	var y = document.getElementById('h2').innerHTML;
	var z = document.getElementById('h3').innerHTML;
	z = z.slice(1, z.length);
	localStorage.setItem('company', x);
	localStorage.setItem('departTime', y);
	localStorage.setItem('amount', z);
	var duration = '1h ' + time6 + 'm';
	localStorage.setItem('duration', duration);
}



