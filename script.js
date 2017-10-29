//return API weather and reco when button is pressed
function returnWeather (){
//collect zipcode data input into form with click on zipcode button
  var click = document.getElementById("setzipcode").onclick;
//Logic to run after button click. Combines zipcode with API key to access DB
  if (click) {
  var zip = document.getElementById("zipcode").value;
  var weather = new XMLHttpRequest();
  var apiUrl = "https://api.apixu.com/v1/current.json?key=3844afb51b4b4d96840161310172608&q=" + zip;
  weather.open("GET", "https://api.apixu.com/v1/current.json?key=3844afb51b4b4d96840161310172608&q=" + zip, false);
  weather.send(null);
  var r = JSON.parse(weather.response);
//Conditions copy that will dynamically update with DB info
  var dis = "You're currently chillin in " + r.location.name + ", " + r.location.region + ".";
  var temp = " Going to be about " + r.current.temp_f + " degrees out today.";
  var rainOrShine = " Conditions are " + r.current.condition.text + ".";
//Display conditions on the page
  document.getElementById("display").innerHTML = dis + temp + rainOrShine;
//Recomendation logic on whether or not to wear shorts. If over 70 degrees, no shorts
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
