//Début du programme


//Initialisation des variables

var objpos = {

	init:function(lat, lng){
		this.lat = lat;
		this.lng = lng;
	},

	decrire:function(){
		var desc = this.lat + " MDRRRRR " +  this.lng;
		return desc;
	}
};

var dTotal = 0;
var course = false;
var parcours = [];
var distanceParcouru = [];
var vitesse = [];
var off = 0;

console.log(vitesse);

//Initialisation des fonctions


function getPosition(){

	var lat = Math.random();
	var lng = Math.random(); //Number(prompt("Lng"));
	 
	var i = parcours.length;

	objpos[i] = Object.create(objpos);
	objpos[i].init(lat, lng);

	parcours.push(objpos[i]);
}

function distanceTotale (distanceParcouru) {
	var d = 0;
	for (var i = 0; i < distanceParcouru.length; i++) {
   		 var d = d + distanceParcouru[i];
	}
	return d;
}

function valeurMax (vitesse) {
	var vMax = 0;
	for (var i = 0; i < vitesse.length; i++) {
		if ( vMax < vitesse[i]) {
			vMax = vitesse[i];
		}
		else {}
	}
	return vMax;

}

function valeurMin (vitesse) {
	var vMin = vitesse[0];
	for (var i = 1; i < vitesse.length; i++) {
		if ( vMin > vitesse[i]) {
			vMin = vitesse[i];
		}
		else {}
	}
	return vMin;

}

function distanceCalcul(lat1, lon1, lat2, lon2) {
	  var p = 0.017453292519943295;    // Math.PI / 180
	  var c = Math.cos;
	  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
		         c(lat1 * p) * c(lat2 * p) * 
		         (1 - c((lon2 - lon1) * p))/2;

	 return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}


setInterval( function courseOn() {

	if ( course === true ) {
		var i = parcours.length;

		getPosition();
		getPosition();

		var lat1 = parcours[i].lat;
		var lat2 = parcours[i + 1].lat;
		var lon1 = parcours[i].lng;
		var lon2 = parcours[i + 1].lng;

		var d = distanceCalcul(lat1, lon1, lat2, lon2);
		console.log(d);
		distanceParcouru.push(d);
		console.log(distanceParcouru);

		dTotal = d + dTotal;
		
		var targetDiv = document.getElementById("Oui").getElementsByClassName("Distance")[0];
		targetDiv.innerHTML = "Distance parcouru : " + dTotal + " Km";

		var u = distanceParcouru.length - 1;
		var v = distanceParcouru[u] * 1000; //Conversion Km en M
		vitesse.push(v);

	}

	else if ( off === 2 ) {
		courseOff();
		off = 0;
	}
	else {
	}

}, 1000);

function courseOff() {
	var dTotal = distanceTotale(distanceParcouru);
	var vMax = valeurMax(vitesse);
	var vMin = valeurMin(vitesse);

	var targetDiv = document.getElementById("Oui").getElementsByClassName("Distance")[0];
	var targetDiv1 = document.getElementById("Oui").getElementsByClassName("Distance")[1];
	var targetDiv2 = document.getElementById("Oui").getElementsByClassName("Distance")[2];
	targetDiv.innerHTML = "Distance Totale : " + dTotal * 1000 + " m";
	targetDiv1.innerHTML = "Vitesse Maximale : " + vMax + " m/s";
	targetDiv2.innerHTML = "Vitesse Minimale : " + vMin + " m/s";

}
