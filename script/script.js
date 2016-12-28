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

//Initialisation des fonctions


function getPosition(){

	var lat = Number(prompt("Lat"));
	var lng = Number(prompt("Lng"));
 
	var i = parcours.length;

	objpos[i] = Object.create(objpos);
	objpos[i].init(lat, lng);

	parcours.push(objpos[i]);


}

function Bidule(lat1,lng1,lat2,lng2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lng2-lng1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

// echo test de la lat et lng	
/*
while ( true ) {
	getPosition();
	for(i = 0; i < parcours.length; i++){
		console.log(parcours[i].decrire());
	}
} 
*/
//Boucle programme

while ( true ) {

	var i = parcours.length;

	getPosition();
	getPosition();
	var posLat1 = parcours[i].lat + parcours[i + 1].lat;
	var posLng2 = parcours[i].lng + parcours[i + 1].lng;

	var lat1 = parcours[i].lat;
	var lat2 = parcours[i + 1].lat;
	var lng1 = parcours[i].lng;
	var lng2 = parcours[i + 1].lng;

}


//Fin du programme
