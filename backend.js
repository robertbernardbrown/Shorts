//Shorts Javascript

	var button = document.getElementById("setzipcode").value;
	var zip = document.getElementById("zip").value;
	var newzip = document.getElementById("zipcode").value

	//set zipcode and get info from API
zip = "'"+ zipcode +"'";

var weather = new XMLHttpRequest();
weather.open("GET", "https://api.apixu.com/v1/current.json?key=3844afb51b4b4d96840161310172608&q=" + zip, false);
weather.send(null);

var r = JSON.parse(weather.response);
var dis = "You're currently chillin in " + r.location.name + ", " + r.location.region + ".";
var temp = " Going to be about " + r.current.temp_f + " degrees out today.";
var rainOrShine = " Conditions are " + r.current.condition.text + ".";

console.log(dis + temp + rainOrShine);

if (r.current.temp_f >= 70) {console.log("You should wear shorts today.")}
else console.log("You shouldn't wear shorts today.");