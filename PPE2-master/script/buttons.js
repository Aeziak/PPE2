//Partie Booléenne

var launch = false;
var upo = true;
var buttonResetCheck = true;
var oui = document.getElementById("Container"); buttonResetCheck = true;
var ouioui = document.getElementById("Oui");
var iamTheBooleanOfMyCode = false; // Booléene pour appeller UnlimitedFunction();



// Partie Button

var elementB1 = document.createElement("button"); //ButtonPause activé durant la course
elementB1.type = "button";
elementB1.value = "Pause"; 
elementB1.id = "buttonPause";
elementB1.onclick = function() { 
	course = !course;
	buttonResetCheck = !buttonResetCheck;
	repeat = false;
 };

var elementB2 = document.createElement("button");  //ButtonStart
elementB2.type = "button";
elementB2.value = "Click me"; 
elementB2.id = "buttonStart";
elementB2.onclick = function() { 
	course = !course; 
	console.log(course); 
	off++;
	deleteMachin();
};

var elementB4 = document.createElement("button"); //Button de Retour qui s'affiche sur l'écran d'historique
elementB4.type = "button";
elementB4.value = "Click me"; 
elementB4.id = "buttonRetour";
elementB4.onclick = function() { 
	clearHisto();
	returnMenu();

};

/*
var elementB5 = document.createElement("buttonOption");
elementB5.type = "button";
elementB5.value = "Option"; 
elementB5.onclick = function() { 
		    
};
*/

var elementB6 = document.createElement("button"); // Button Historique
elementB6.type = "button";
elementB6.value = "Histo"; 
elementB6.id = "buttonHisto";
elementB6.onclick = function() { 
	deleteChose();
	histo = !histo;
};

var elementB3 = document.createElement("button"); //Button pour mettre fin à la course et afficher le score
elementB3.id = "buttonEnd";
elementB3.value = "Fin"; 
elementB3.onclick = function() { 
	iamTheBooleanOfMyCode = !iamTheBooleanOfMyCode;
	if(iamTheBooleanOfMyCode === true){
	 	courseOff(); 
	}
	else if(iamTheBooleanOfMyCode === false){
	 	UnlimitedFunction();
	}
};

  /*     	
			

    		<button id="buttonStart" onclick="course = !course; console.log(course); off++;">Click me</button>
    		<button id="buttonPause" onclick=";">Pause</button>
			<div class="Distance" style="margin : auto; padding : auto;"></div>
			<div class="Distance" style="margin : auto; padding : auto;"></div>
			<div class="Distance" style="margin : auto; padding : auto;"></div>
			<div class="Distance" style="margin : auto; padding : auto;"></div>
			<div class="Distance" style="margin : auto; padding : auto;"></div>
			<div class="Distance" style="margin : auto; padding : auto;"></div>
			<button id="End" onclick="">Fin</button>

			*/



var chooseProfil = setInterval ( function() { //Gére l'affichage des boutons au début

	var nom = localStorage.getItem("nom");
	var prenom = localStorage.getItem("prenom");
	var targetDiv9 = document.getElementById("buttonLaunch");
	targetDiv9.innerHTML = nom + " " + prenom;
	if ( nom === null ) {
		defineProfil();
	}
	
	else if (launch === true) {
		clearInterval(chooseProfil);	

		var elem = document.getElementById("buttonLaunch");
 		elem.parentElement.removeChild(elem);
 		elem = document.getElementById("reset");
 		elem.parentElement.removeChild(elem);

 		

		oui.appendChild(elementB2);
		var targetDivBS = document.getElementById("buttonStart");
		targetDivBS.innerHTML = "Start";
		oui.appendChild(elementB6);
		var targetDivBH = document.getElementById("buttonHisto");
		targetDivBH.innerHTML = "Historique";

	}

	

}, 10);

function deleteMachin(){

	elem = document.getElementById("buttonStart");
	elem.parentElement.removeChild(elem);
	elem = document.getElementById("buttonHisto");
	elem.parentElement.removeChild(elem);

    oui.appendChild(elementB1);
	var targetDivBP = document.getElementById("buttonPause");
    targetDivBP.innerHTML = "Pause";

}


function deleteBidule(){ //Delete le button Fin

	var elem = document.getElementById("buttonEnd");
	elem.parentElement.removeChild(elem);

}

function deleteTruc(){ //Delete le boutton Pause
	var elem = document.getElementById("buttonPause");
	elem.parentElement.removeChild(elem);
}

function deleteChose() { //Delet le button Start Et Histo pour passer à l'écran 3
	elem = document.getElementById("buttonStart");
	elem.parentElement.removeChild(elem);
	elem = document.getElementById("buttonHisto");
	elem.parentElement.removeChild(elem);

	oui.appendChild(elementB4);
	var targetDivBRe = document.getElementById("buttonRetour");
    targetDivBRe.innerHTML = "Retour";

	affichageHisto();

}


function affichageHisto() {
	var ID = localStorage.getItem("ID")
	for(var i = 0; i < ID; i++){

		console.log('i' + i);
		console.log("ID" + ID);
		console.log("Score + i : " + "Score" + i);
		var scoreH = localStorage.getItem("Score" + i);
		console.log("SCORE + I" + score + "" + i);

		var dateH = localStorage.getItem("Date" + i);
		var divScore = document.createElement("div");

		divScore.id = i + "Score";
		divScore.innerHTML = "Score : " + scoreH + " Date : " + dateH;

		document.getElementById("Container").appendChild(divScore);


	}
}

function clearHisto() {
	var ID = localStorage.getItem("ID")
	for(var i = 0; i < ID; i++){
		elem = document.getElementById(i + "Score");
		elem.parentElement.removeChild(elem);
	}

	elem = document.getElementById("buttonRetour");
	elem.parentElement.removeChild(elem);
	
}

function returnMenu() {


	oui.appendChild(elementB2);
	var targetDivBS = document.getElementById("buttonStart");
	targetDivBS.innerHTML = "Start";
	oui.appendChild(elementB6);
	var targetDivBH = document.getElementById("buttonHisto");
	targetDivBH.innerHTML = "Historique";

}
 
function InstantiateReset(){
	if(course === false && buttonResetCheck === false ){
		

	 	upo = false;

	 	ouioui.appendChild(elementB3);
	 	var targetDivBE = document.getElementById("buttonEnd");
	 	targetDivBE.innerHTML = "Stop";


	 	console.log("JA");
	}

	if (course === true && upo === false) {
		upo = true;
		deleteBidule();
	}
	else {
		console.log("NEIN");
	}

}

function UnlimitedFunction(){
	deleteBidule();
	deleteTruc();
	off = 3;

	returnMenu();



	buttonResetCheck = true;
}