var geoloc = document.getElementById("demo"); //Récupére la latitude et longitude avec HTML5
var latitude1 = 0;
var longitude1 = 0;


var lat = 1;
var lng = 20;
objpos[0] = Object.create(objpos);
objpos[0].init(lat, lng);

parcours.push(objpos[0]);


 setInterval(function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			geoloc.innerHTML = "Geolocation is not supported by this browser.";
		}
	}, 10000);

			function showPosition(position) {
			geoloc.innerHTML = "Latitude: " + position.coords.latitude +
			"<br>Longitude: " + position.coords.longitude;

			latitude1 = position.coords.latitude;
			longitude1 = position.coords.longitude;

	}

	navigator.geolocation.watchPosition(showPosition);

function getPosition(){ // Récupère latitude et longitude pour le mettre dans un tableau


	var lat = latitude1;
	var lng = longitude1;

  	var i = parcours.length;

	objpos[i] = Object.create(objpos);
	objpos[i].init(lat, lng);

	parcours.push(objpos[i]);

}

