//return API weather and reco when button is pressed
function returnWeather (){
  console.log("returnWeather");
  var click = document.getElementById("setzipcode").onclick;

  if (click) {
  var zip = document.getElementById("zipcode").value;
  var weather = new XMLHttpRequest();
  var apiUrl = "https://api.apixu.com/v1/current.json?key=3844afb51b4b4d96840161310172608&q=" + zip;
  console.log(apiUrl);
  weather.open("GET", "https://api.apixu.com/v1/current.json?key=3844afb51b4b4d96840161310172608&q=" + zip, false);
  weather.send(null);
  var r = JSON.parse(weather.response);
  var dis = "You're currently chillin in " + r.location.name + ", " + r.location.region + ".";
  var temp = " Going to be about " + r.current.temp_f + " degrees out today.";
  var rainOrShine = " Conditions are " + r.current.condition.text + ".";

  document.getElementById("display").innerHTML = dis + temp + rainOrShine;

  var recc = "";
  if (r.current.temp_f >= 70) {
    recc = " You should wear shorts today.";
  }
  else {
    recc = " You shouldn't wear shorts today.";
  }
  document.getElementById("display-reco").innerHTML = recc;
  }
}
