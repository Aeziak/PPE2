var masse = 0;
var userAge = parseInt(localStorage.age);
var vitesseRef = 0;
var duree = 0;
var k = 0;
var calories = 0;

function drawCalcul(){

	masse = 58;
	duree = heure * 60 + min + sec/60;

	if(vMoy < 12)
	{
		k = 1.73195;
		vitesseRef = 10;
	}
	else if(vMoy < 14 && 12 < vMoy)
	{
		k = 1.6413;
		vitesseRef = 13;
	}
	else if(vMoy < 17.5 && 14 < vMoy)
	{
		k = 1.6888;
		vitesseRef = 15;
	}
	else if(vMoy > 17.5){
		k = 2.4624;
		vitesseRef = 20;
	}

	calories = Math.round((((masse*vitesseRef*duree*k)/100)/50)*50);


}