//Début du programme


//Initialisation des variables

var objpos = {

	init:function(lat, lng){
		this.lat = lat;
		this.lng = lng;
	},

	decrire:function(){
		var desc = this.lat + this.lng;
		return desc;
	}
};

var dTotal = 0; // Distance Totale
var course = false; // Variable booléenne géré par un button qui signale le Début/Fin de la course
var parcours = []; // Tableau des coordonnées GPS
var distanceParcouru = []; // Tableau des distances
var vitesse = []; // Tableau des vitesses
var off = 0; // Variable pour gérer l'affichage des résultats
var sec = 0;
var min = 0;
var heure = 0;
var targetDiv = document.getElementById("Oui").getElementsByClassName("Distance")[0];
var targetDiv1 = document.getElementById("Oui").getElementsByClassName("Distance")[1];
var targetDiv2 = document.getElementById("Oui").getElementsByClassName("Distance")[2];
var targetDiv3 = document.getElementById("Oui").getElementsByClassName("Distance")[3];
var targetDiv4 = document.getElementById("Oui").getElementsByClassName("Distance")[4];

//Initialisation des fonctions

function getPosition(){ // Récupère latitude et longitude pour le mettre dans un tableau

	var lat = Math.random();
	var lng = Math.random(); //Number(prompt("Lng"));
	 
	var i = parcours.length;

	objpos[i] = Object.create(objpos);
	objpos[i].init(lat, lng);

	parcours.push(objpos[i]);
}

function distanceTotale (distanceParcouru) { // Additionne toutes les distances
	var d = 0;
	for (var i = 0; i < distanceParcouru.length; i++) {
   		 var d = d + distanceParcouru[i];
	}
	return d;
}

function valeurMax (vitesse) { // Cherche la vitesse Max atteinte
	var vMax = 0;
	for (var i = 0; i < vitesse.length; i++) {
		if ( vMax < vitesse[i]) {
			vMax = vitesse[i];
		}
		else {}
	}
	return vMax;

}

function valeurMin (vitesse) { // Cherche la vitesse Min atteinte
	var vMin = vitesse[0];
	for (var i = 1; i < vitesse.length; i++) {
		if ( vMin > vitesse[i]) {
			vMin = vitesse[i];
		}
		else {}
	}
	return vMin;

}

function distanceCalcul(lat1, lon1, lat2, lon2) { // Calcule d'une distance entre 2 coordonnées GPS
	  var p = 0.017453292519943295;    // Math.PI / 180
	  var c = Math.cos;
	  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
		         c(lat1 * p) * c(lat2 * p) * 
		         (1 - c((lon2 - lon1) * p))/2;

	 return Math.round(12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
}

function courseOff() { // Gére l'affichage des résultats
	var dT = distanceTotale(distanceParcouru);
	var vMax = valeurMax(vitesse);
	var vMin = valeurMin(vitesse);

	var targetDiv = document.getElementById("Oui").getElementsByClassName("Distance")[0];
	var targetDiv1 = document.getElementById("Oui").getElementsByClassName("Distance")[1];
	var targetDiv2 = document.getElementById("Oui").getElementsByClassName("Distance")[2];
	var targetDiv3 = document.getElementById("Oui").getElementsByClassName("Distance")[3];
	var targetDiv4 = document.getElementById("Oui").getElementsByClassName("Distance")[4];
	targetDiv.innerHTML = "Distance Totale : " + dTotal * 1000 + " m";
	targetDiv1.innerHTML = "Vitesse Maximale : " + vMax + " m/s";
	targetDiv2.innerHTML = "Vitesse Minimale : " + vMin + " m/s";
	targetDiv3.innerHTML = "Vitesse Moyenne : " + (vMin + vMax)/2 + " m/s";
	targetDiv4.innerHTML = "En : " + heure + " heure(s) " + min + " minute(s) " + sec + " seconde(s)";

}

setInterval( function courseOn() { // Boucle Programme

	if ( off === 3 ) { // Pour reset toutes les données lors du début de la seconde course
		off = 1;
		dTotal = 0;
		targetDiv.innerHTML = "";
		targetDiv1.innerHTML = "";
		targetDiv2.innerHTML = "";
		targetDiv3.innerHTML = "";
		targetDiv4.innerHTML = "";
		parcours = []; // Tableau des coordonnées GPS
		distanceParcouru = []; // Tableau des distances
		vitesse = []; // Tableau des vitesses
		sec = 0;
		min = 0;
		heure = 0;

	}

	else if ( course === true ) { // Monitoring de la course
		var i = parcours.length;

		getPosition();
		getPosition();

		var lat1 = parcours[i].lat;
		var lat2 = parcours[i + 1].lat;
		var lon1 = parcours[i].lng;
		var lon2 = parcours[i + 1].lng;

		var d = 1000 * distanceCalcul(lat1, lon1, lat2, lon2);
		console.log(d);
		distanceParcouru.push(d);
		console.log(distanceParcouru);

		dTotal = d + dTotal;
		
		targetDiv.innerHTML = "Distance parcouru : " + dTotal + " m";

		var u = distanceParcouru.length - 1;
		var v = distanceParcouru[u] * 1000; //Conversion Km en M
		vitesse.push(v);

		sec++;
		time = sec;
		if(sec === 60){
			sec = 0;
			min++;
		}
		if(min === 60){
			min = 0;
			heure++;
		}

	}

	else if ( off === 2 ) { // Affichage du Tableau
		courseOff();
	}
	else { // Arret
	}

}, 1000);




