//Début du programme
window.onload = function () {
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

	var d = 0;

	var parcours = [];

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

	while ( true ) {

		var i = parcours.length;

		getPosition();
		getPosition();
		var posLat1 = parcours[i].lat + parcours[i + 1].lat;
		var posLng2 = parcours[i].lng + parcours[i + 1].lng;

		var lat1 = parcours[i].lat;
		var lat2 = parcours[i + 1].lat;
		var lon1 = parcours[i].lng;
		var lon2 = parcours[i + 1].lng;

		var d = distance(lat1, lon1, lat2, lon2) + d;
		
		document.getElementById("Distance").innerHTML = d;


	}
}

