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

	init:function(nom, prenom){
		this.nom = nom;
		this.prenom = prenom;
	},

	decrire:function(){
		var desc = this.nom + this.prenom;
		return desc;

	}
};




console.log(localStorage);
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
var d = 0;
var repeat = true;
var ID = 0;
var score = 0;
var date = new Date();
var parcoursLaunchVerifability = false;

//Initialisation des fonctions


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


function courseOff() { // Gére l'affichage des résultats

	//Calcul des données
	var dT = distanceTotale(distanceParcouru);
	var tT = sec + min*60 + heure*3600
	/*var vMax = valeurMax(vitesse);
	var vMin = valeurMin(vitesse);
	var somme = 0;
	for(i = 0; i < vitesse.length; i++){
		somme += vitesse[i];
	}*/

	score = dT/10 - Math.round(tT*0.2);

	//Affichage des données
	var targetDiv = document.getElementById("Oui").getElementsByClassName("Distance")[0];
	var targetDiv1 = document.getElementById("Oui").getElementsByClassName("Distance")[1];
	var targetDiv2 = document.getElementById("Oui").getElementsByClassName("Distance")[2];
	var targetDiv3 = document.getElementById("Oui").getElementsByClassName("Distance")[3];
	var targetDiv4 = document.getElementById("Oui").getElementsByClassName("Distance")[4];
	targetDiv.innerHTML = "Score : " + score + " ISSOU";
	targetDiv1.innerHTML = "Distance Totale : " + dTotal * 1000 + " m";
	targetDiv2.innerHTML = "En : " + heure + " heure(s) " + min + " minute(s) " + sec + " seconde(s)";
	var targetDivBE = document.getElementById("buttonEnd");
	targetDivBE.innerHTML = "Return";


}

function distanceTotale (distanceParcouru) { // Additionne toutes les distances
	var d = 0;
	for (var i = 0; i < distanceParcouru.length; i++) {
   		 var d = d + distanceParcouru[i];
	}
	return d;
}
/*
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
*/
function setID() {
	var setIDStorage = localStorage.getItem("ID");
	if ( setIDStorage != ID  && setIDStorage != null) {
		ID = setIDStorage;
		console.log("ID : " + ID);
	}

	console.log("ID : " + ID + "NEIN");
}


function setDate (){
	var dd = date.getDay();
	var mm = date.getMonth()+1; //January is 0!
	var yyyy = date.getFullYear();

	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	date = dd+'/'+mm+'/'+yyyy;
	console.log("DATE" + date);
}


	setInterval( function courseOn() { // Boucle Programme
		console.log(off);
		if(repeat === false){
		InstantiateReset();
		repeat = true;
		}

		if ( off === 3 ) { // Pour reset toutes les données lors du début de la seconde course

			setDate();
			setID();
			localStorage.setItem( "Score" + ID, score);
			localStorage.setItem( "Date" + ID, date);
			ID++;
			localStorage.setItem("ID", ID);
			off = 0;
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
			var i = parcours.length - 2;

			getPosition();
			console.log("dTotal : " + d);

			console.log(parcours);
			if ( parcoursLaunchVerifability === true) {
				var lat1 = parcours[i].lat;
				console.log("i + 1");
				console.log(i + 1);
				var lat2 = parcours[i + 1].lat;
				var lon1 = parcours[i].lng;
				var lon2 = parcours[i + 1].lng;
				console.log("Je fais le calcul");
				d = 1000 * distanceCalcul(lat1, lon1, lat2, lon2);
				distanceParcouru.push(d);
				
				var u = distanceParcouru.length - 1;
				var v = distanceParcouru[u] * 1000; //Conversion Km en M
				vitesse.push(v);
			}
			dTotal = d + dTotal;
			
			targetDiv.innerHTML = "Distance parcouru : " + dTotal + " m";

			
			
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

			date = new Date();
			

		}

		else if ( off === 2 ) { // Affichage du Tableau
			courseOff();
		}
		else { // Arret
		}


	}, 1000);

