var geoloc = document.getElementById("demo"); //Récupére la latitude et longitude avec HTML5
var latitude1 = 0;
var longitude1 = 0;


var lat = 1;
var lng = 20;
objpos[0] = Object.create(objpos);
objpos[0].init(lat, lng);

parcours.push(objpos[0]);



function getPosition(){ // Récupère latitude et longitude pour le mettre dans un tableau

	navigator.geolocation.watchPosition(function(location) {
		console.log(location.coords.latitude);
		console.log(location.coords.longitude);

		lat = location.coords.latitude;
		lng = location.coords.longitude;
  		var i2 = parcours.length;

		objpos[i2] = Object.create(objpos);
		objpos[i2].init(lat, lng);

		parcours.push(objpos[i2]);

		parcoursLaunchVerifability = true;

		});
	



}

