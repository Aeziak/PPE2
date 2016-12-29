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

var parcours = [];
var distanceParcouru = [];

//Initialisation des fonctions


function getPosition(){

	var lat = Number(prompt("Lat"));
	var lng = Number(prompt("Lng"));
	 
	var i = parcours.length;

	objpos[i] = Object.create(objpos);
	objpos[i].init(lat, lng);

	parcours.push(objpos[i]);
}

function distance(lat1, lon1, lat2, lon2) {
	  var p = 0.017453292519943295;    // Math.PI / 180
	  var c = Math.cos;
	  var a = 0.5 - c((lat2 - lat1) * p)/2 + 
	          c(lat1 * p) * c(lat2 * p) * 
	          (1 - c((lon2 - lon1) * p))/2;

	  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}


function courseOn() {

	var dTotal = 0;
	var machin = true; //Machin est la fonction qui détecte le GPS

	while (  true ) {
		
		if ( machin === true ) {
			var i = parcours.length;

			getPosition();
			getPosition();

			var lat1 = parcours[i].lat; //Affectation des variables ddu tableau 
			var lat2 = parcours[i + 1].lat;
			var lon1 = parcours[i].lng;
			var lon2 = parcours[i + 1].lng;

			var d = distance(lat1, lon1, lat2, lon2) + d; //Calcule de la distance
			var n = distanceParcouru.length;
			distanceParcouru.push(d[n]);
			var dTotal = d + dTotal;

			var targetDiv = document.getElementById("Oui").getElementsByClassName("Distance")[0]; //Afficher dTotal
			targetDiv.innerHTML = dTotal;

			break;	
		}
		
		else {
			alert("Votre GPS n'est pas détecté");
			break;
		}
	}
}
