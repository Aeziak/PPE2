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
 
	var i = parcours.length + 1;

	objpos[i] = Object.create(objpos);
	objpos[i].init(lat, lng);

	parcours.push(objpos[i]);


}


// echo test de la lat et lng	
/*while ( true ) {
	getPosition();
	for(i = 0; i < parcours.length; i++){
		console.log(parcours[i].decrire());
	}
}*/

while ( true ) {

	var i = parcours.length;

	getPosition();
	getPosition();
	var posLat1 = parcours[i].lat + parcours[i + 1].lat;
	var posLng2 = parcours[i].lng + parcours[i + 1].lng;

	console.log(posLng2);

}


























//Fin du programme