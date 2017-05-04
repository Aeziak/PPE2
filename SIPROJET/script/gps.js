var geoloc = document.getElementById("demo"); //Récupére la latitude et longitude avec HTML5

var lat = 0; // Variable latitude
var lng = 0; // Variable longitude



function onSuccess(position) { // Fonction qui récupére la latitude et la longitude
    var element = document.getElementById('demo'); // Définir élément (rapidité d'écriture)
    element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' + // On lui attribut la latitude dans l'HTML
                        'Longitude: ' + position.coords.longitude     + '<br />' + // On lui attribut la longitude dans l'HTML
                        '<hr />'      + element.innerHTML; // On affiche l'ensemble
    lat = position.coords.latitude; // On attribut la latitude trouvé à notre variable
	lng = position.coords.longitude; // On attribut la longitude trouvé à notre variable

	var i2 = parcours.length; // Tableau

	objpos[i2] = Object.create(objpos); // On rentre les positions dans le tableau
	objpos[i2].init(lat, lng); // On initialise la latitude et la longitude

	parcours.push(objpos[i2]); // On pousse les valeurs dans le tableau

	parcoursLaunchVerifability = true; // On verifie que le parcours a bien démarré

	moveMarker(lat,lng); // On bouge le marker google map en fonction de la latitude et la longitude
}

// onError Callback receives a PositionError object
//
function onError(error) { // S'il y a une erreur
    alert('code: '    + error.code    + '\n' + // Affiche le code de l'erreur
          'message: ' + error.message + '\n'); // Affiche le message de l'erreur
}


function moveMarker(lat, lng) { // Fonction pour bouger le marker google map
    var newLatLng = new google.maps.LatLng(lat, lng); // Récupération de la latitude et longitude locale
    var myLatLng = {lat,lng}; // On définie la latitude et longitude de l'appareil
    map.setCenter(newLatLng); // On centre la map sur la latitude et longitude
    var marker = new google.maps.Marker({ // On initialise le marker
    position: myLatLng, // On le place sur la latitude et la longitude
    map: map, // On lance la map
  });
}
