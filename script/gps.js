var geoloc = document.getElementById("demo"); //Récupére la latitude et longitude avec HTML5

var lat = 0;
var lng = 0;



function onSuccess(position) {
    var element = document.getElementById('demo');
    element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                        'Longitude: ' + position.coords.longitude     + '<br />' +
                        '<hr />'      + element.innerHTML;
    lat = position.coords.latitude;
	lng = position.coords.longitude;	

	var i2 = parcours.length;

	objpos[i2] = Object.create(objpos);
	objpos[i2].init(lat, lng);

	parcours.push(objpos[i2]);

	parcoursLaunchVerifability = true;
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

// Options: retrieve the location every 3 seconds
//



	

