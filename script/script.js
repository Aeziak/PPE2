//http://www.l-itineraire.com/distanceentre-garde-adhemar-et-paris

//Début du programme


//Initialisation des variables

var objpos = { //Variable objet contenant la latitude et la longitude

	init:function(lat, lng){
		this.lat = lat;
		this.lng = lng;
	},

	decrire:function(){
		var desc = this.lat + this.lng;
		return desc;
	}
};

var profil = { //Profil de l'utilisateur

	initi:function(nom, prenom){
		this.nom = nom;
		this.prenom = prenom;
	},

	decrire:function(){
		var desc = this.nom + this.prenom;
		return desc;

	}
};

var geoloc = document.getElementById("demo"); //Récupére la latitude et longitude avec HTML5

		setInterval(function getLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition);
			} else { 
				geoloc.innerHTML = "Geolocation is not supported by this browser.";
			}
		}, 100000);

	function showPosition(position) {
		geoloc.innerHTML = "Latitude: " + position.coords.latitude + 
		"<br>Longitude: " + position.coords.longitude;
		
		latitude1 = position.coords.latitude;
		longitude1 = position.coords.longitude;
		
}

var latitude1 = 0;
var longitude1 = 0
var dTotal = 0; // Distance Totale
var course = false; // Variable booléenne géré par un button qui signale le Début/Fin de la course
var parcours = []; // Tableau des coordonnées GPS
var distanceParcouru = []; // Tableau des distances
var vitesse = []; // Tableau des vitesses
var off = 0; // Variable pour gérer l'affichage des résultats
var sec = 0;
var min = 0;
var heure = 0;
var profile = false;
var targetDiv = document.getElementById("Oui").getElementsByClassName("Distance")[0];
var targetDiv1 = document.getElementById("Oui").getElementsByClassName("Distance")[1];
var targetDiv2 = document.getElementById("Oui").getElementsByClassName("Distance")[2];
var targetDiv3 = document.getElementById("Oui").getElementsByClassName("Distance")[3];
var targetDiv4 = document.getElementById("Oui").getElementsByClassName("Distance")[4];
var resetValue = false;
var launch = false;
var latitude1 = 0;
var longitude1 = 0;

//Initialisation des fonctions

function getPosition(){ // Récupère latitude et longitude pour le mettre dans un tableau

	var lat = Number(prompt("Lat (44.4 ; 48.85"));
	var lng = Number(prompt("Lng (4.75 ; 2.34"));
	 
	var i = parcours.length;

	objpos[i] = Object.create(objpos);
	objpos[i].init(lat, lng);

	parcours.push(objpos[i]);
}


function distanceCalcul(lat1, lon1, lat2, lon2) { // Calcule d'une distance entre 2 coordonnées GPS
	  var p = 0.017453292519943295;    // Math.PI / 180
	  var c = Math.cos;
	  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
		         c(lat1 * p) * c(lat2 * p) * 
		         (1 - c((lon2 - lon1) * p))/2;

	 return Math.round(12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
}



function defineProfil(){ //Fonction pour créer le profil de l'utilisateur
	var nom = prompt("Entrez votre nom ");
	var prenom = prompt("Entrez votre prenom ");

		localStorage.setItem("nom", nom);
		localStorage.setItem("prenom", prenom);
}

var chooseProfil = setInterval ( function() { //Gére l'affichage des boutons

	var nom = localStorage.getItem("nom");
	var prenom = localStorage.getItem("prenom");
	var targetDiv9 = document.getElementById("buttonLaunch");
	targetDiv9.innerHTML = nom + " " + prenom;
	if ( nom === null ) {
		defineProfil();
	}
	
	else if (launch === true) {
		clearInterval(chooseProfil);
		document.getElementById("buttonStart").style.visibility = "visible";	

		var elem = document.getElementById("buttonLaunch");
 		elem.parentElement.removeChild(elem);
 		elem = document.getElementById("reset");
 		elem.parentElement.removeChild(elem);
	}

}, 10);

function courseOff() { // Gére l'affichage des résultats

	//Calcul des données
	var dT = distanceTotale(distanceParcouru);
	var vMax = valeurMax(vitesse);
	var vMin = valeurMin(vitesse);
	var somme = 0;
	for(i = 0; i < vitesse.length; i++){
		somme += vitesse[i];
	}

	//Affichage des données
	var targetDiv = document.getElementById("Oui").getElementsByClassName("Distance")[0];
	var targetDiv1 = document.getElementById("Oui").getElementsByClassName("Distance")[1];
	var targetDiv2 = document.getElementById("Oui").getElementsByClassName("Distance")[2];
	var targetDiv3 = document.getElementById("Oui").getElementsByClassName("Distance")[3];
	var targetDiv4 = document.getElementById("Oui").getElementsByClassName("Distance")[4];
	targetDiv.innerHTML = "Distance Totale : " + dTotal * 1000 + " m";
	targetDiv1.innerHTML = "Vitesse Maximale : " + vMax + " m/s";
	targetDiv2.innerHTML = "Vitesse Minimale : " + vMin + " m/s";
	targetDiv3.innerHTML = "Vitesse Moyenne : " +  somme/i + " m/s";
	targetDiv4.innerHTML = "En : " + heure + " heure(s) " + min + " minute(s) " + sec + " seconde(s)";


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
			
			// Partie distance parcouru
			var i = parcours.length;

			getPosition();
			getPosition();

			var lat1 = parcours[i].lat;
			var lat2 = parcours[i + 1].lat;
			var lon1 = parcours[i].lng;
			var lon2 = parcours[i + 1].lng;

			var d = 1000 * distanceCalcul(lat1, lon1, lat2, lon2);
			distanceParcouru.push(d);

			dTotal = d + dTotal;
			
			targetDiv.innerHTML = "Distance parcouru : " + dTotal + " m";

			var u = distanceParcouru.length - 1;
			var v = distanceParcouru[u] * 1000; //Conversion Km en M
			vitesse.push(v);
			
			// Partie chronométre

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
			if ( sec < 10 && min < 10) {
				targetDiv1.innerHTML = "0" + min + " : " + "0" + sec;
			}
			if (min >= 10 && sec < 10) {
				targetDiv1.innerHTML = min + " : " + "0" + sec;
			}
			if ( min >= 10 && sec >=  10) {
				targetDiv1.innerHTML = min + " : " + sec;
			}
			if ( min < 10 && sec >= 10 ) {
				targetDiv1.innerHTML = "0" + min + " : " + sec;
			}
			

		}

		else if ( off === 2 ) { // Affichage du Tableau
			courseOff();
		}
		else { // Arret
		}


	}, 1000);


		
		console.log(latitude1);
}

var latitude1 = 0;
var longitude1 = 0
var dTotal = 0; // Distance Totale
var course = false; // Variable booléenne géré par un button qui signale le Début/Fin de la course
var parcours = []; // Tableau des coordonnées GPS
var distanceParcouru = []; // Tableau des distances
var vitesse = []; // Tableau des vitesses
var off = 0; // Variable pour gérer l'affichage des résultats
var sec = 0;
var min = 0;
var heure = 0;
var profile = false;
var targetDiv = document.getElementById("Oui").getElementsByClassName("Distance")[0];
var targetDiv1 = document.getElementById("Oui").getElementsByClassName("Distance")[1];
var targetDiv2 = document.getElementById("Oui").getElementsByClassName("Distance")[2];
var targetDiv3 = document.getElementById("Oui").getElementsByClassName("Distance")[3];
var targetDiv4 = document.getElementById("Oui").getElementsByClassName("Distance")[4];
var resetValue = false;
var launch = false;
var latitude1 = 0;
var longitude1 = 0;

//Initialisation des fonctions

var geoloc = document.getElementById("demo");

		function getLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition);
			} else { 
				geoloc.innerHTML = "Geolocation is not supported by this browser.";
			}
		}

	function showPosition(position) {
		geoloc.innerHTML = "Latitude: " + position.coords.latitude + 
		"<br>Longitude: " + position.coords.longitude;
		
		latitude1 = position.coords.latitude;
		longitude1 = position.coords.longitude;
}

function getPosition(){ // Récupère latitude et longitude pour le mettre dans un tableau

	var lat = latitude1;
	var lng = longitude1; //Number(prompt("Lng"));
	 
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
	var somme = 0;
	for(i = 0; i < vitesse.length; i++){
		somme += vitesse[i];
		console.log("vitesse " + vitesse);
	}

	var targetDiv = document.getElementById("Oui").getElementsByClassName("Distance")[0];
	var targetDiv1 = document.getElementById("Oui").getElementsByClassName("Distance")[1];
	var targetDiv2 = document.getElementById("Oui").getElementsByClassName("Distance")[2];
	var targetDiv3 = document.getElementById("Oui").getElementsByClassName("Distance")[3];
	var targetDiv4 = document.getElementById("Oui").getElementsByClassName("Distance")[4];
	targetDiv.innerHTML = "Distance Totale : " + dTotal * 1000 + " m";
	targetDiv1.innerHTML = "Vitesse Maximale : " + vMax + " m/s";
	targetDiv2.innerHTML = "Vitesse Minimale : " + vMin + " m/s";
	targetDiv3.innerHTML = "Vitesse Moyenne : " +  somme/i + " m/s";
	targetDiv4.innerHTML = "En : " + heure + " heure(s) " + min + " minute(s) " + sec + " seconde(s)";


}


function defineProfil(){
	var nom = prompt("Entrez votre nom essevépé");
	var prenom = prompt("Entrez votre prenom essevépé");

		localStorage.setItem("nom", nom);
		localStorage.setItem("prenom", prenom);
}

var chooseProfil = setInterval ( function() {

	var nom = localStorage.getItem("nom");
	var prenom = localStorage.getItem("prenom");
	var targetDiv9 = document.getElementById("buttonLaunch");
	targetDiv9.innerHTML = nom + " " + prenom;
	if ( nom === null ) {
		defineProfil();
	}
	
	else if (launch === true) {
		clearInterval(chooseProfil);
		document.getElementById("buttonStart").style.visibility = "visible";	

		var elem = document.getElementById("buttonLaunch");
 		elem.parentElement.removeChild(elem);
 		elem = document.getElementById("reset");
 		elem.parentElement.removeChild(elem);
	}

}, 10);

	setInterval( function courseOn() { // Boucle Programme


		if ( off === 3 ) { // Pour reset toutes les données lors du début de la seconde course
			off = 1;
			dTotal = 0;
			targetDiv.innerHTML = "";
			targetDiv1.innerHTML = "";
			targetDiv2.innerHTML = "";
			targetDiv3.innerHTML = "";
			targetDiv4.innerHTML = "";
			targetDiv5.innerHTML = "";
			parcours = []; // Tableau des coordonnées GPS
			distanceParcouru = []; // Tableau des distances
			vitesse = []; // Tableau des vitesses
			sec = 0;
			min = 0;
			heure = 0;

		}

		else if ( course === true ) { // Monitoring de la course
			
			// Partie distance parcouru
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

			dTotal = d + dTotal;
			
			targetDiv.innerHTML = "Distance parcouru : " + dTotal + " m";

			var u = distanceParcouru.length - 1;
			var v = distanceParcouru[u] * 1000; //Conversion Km en M
			vitesse.push(v);
			
			// Partie chronométre

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
			if ( sec < 10 && min < 10) {
				targetDiv1.innerHTML = "0" + min + " : " + "0" + sec;
			}
			if (min >= 10 && sec < 10) {
				targetDiv1.innerHTML = min + " : " + "0" + sec;
			}
			if ( min >= 10 && sec >=  10) {
				targetDiv1.innerHTML = min + " : " + sec;
			}
			if ( min < 10 && sec >= 10 ) {
				targetDiv1.innerHTML = "0" + min + " : " + sec;
			}
			

		}

		else if ( off === 2 ) { // Affichage du Tableau
			courseOff();
		}
		else { // Arret
		}


	}, 1000);

