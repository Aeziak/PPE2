//Partie Booléenne

var launch = false;
var upo = true;
var buttonResetCheck = true;
var oui = document.getElementById("Container"); buttonResetCheck = true;
var ouioui = document.getElementById("Oui");
var iamTheBooleanOfMyCode = false; // Booléene pour appeller UnlimitedFunction();
var prenom = "Prenom";
var nom = "Nom";


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
	returnMenu();
};

var elementB9 = document.createElement("button"); //Button de Retour qui s'affiche sur l'écran d'historique
elementB9.type = "button";
elementB9.value = "Click me"; 
elementB9.id = "buttonSave";
elementB9.onclick = function() { 
	inputDefineProfil();
};


var elementB11 = document.createElement("button");
elementB11.type = "button";
elementB11.value = "Start";
elementB11.id = "buttonLaunch";
elementB11.onclick = function() { 
	launch = !launch;
};

var elementB22 = document.createElement("button");
elementB22.type = "button";
elementB22.value = "Reset"; 
elementB22.id = "buttonReset";
elementB22.onclick = function() { 
	defineProfil();
};


var elementB6 = document.createElement("button"); // Button Historique
elementB6.type = "button";
elementB6.value = "Histo"; 
elementB6.id = "buttonHisto";
elementB6.onclick = function() { 
	deleteChose();
};

var elementB33 = document.createElement("button"); // Button Historique
elementB33.type = "button";
elementB33.value = "retourChoixProfil"; 
elementB33.id = "buttonReturnToProfil";
elementB33.onclick = function() { 
	deleteSecondScreen();
	returnFirstScreen();
};

var elementB44 = document.createElement("button"); // Button Historique
elementB44.type = "button";
elementB44.value = "Option"; 
elementB44.id = "buttonOption";
elementB44.onclick = function() { 
	openOptionScreen();
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

	if ( nom === null ) {
		defineProfil();
	}
	
	else if (launch === true) {

		deleteFirstScreen();

		returnMenu();

		launch = false;
	}

}, 10);

function deleteFirstScreen() {

	var elem = document.getElementById("buttonLaunch");
 	elem.parentElement.removeChild(elem);
 	elem = document.getElementById("buttonReset");
 	elem.parentElement.removeChild(elem);

}

function returnFirstScreen() {

	oui.appendChild(elementB11);
	var targetDivBSt = document.getElementById("buttonLaunch");
    targetDivBSt.innerHTML = nom + " " + prenom;

	oui.appendChild(elementB22);
	var targetDivBRe = document.getElementById("buttonReset");
    targetDivBRe.innerHTML = "Reset";

}

function deleteField () {

    var elem = document.getElementById("buttonSave");
 	elem.parentElement.removeChild(elem);
 	elem = document.getElementById("inputFieldNom");
 	elem.parentElement.removeChild(elem);
 	elem = document.getElementById("inputFieldPrenom");
 	elem.parentElement.removeChild(elem);

}

function deleteMachin(){ //Delete le Screen 2 pour passer au screen 3

	deleteSecondScreen();

    oui.appendChild(elementB1);
	var targetDivBP = document.getElementById("buttonPause");
    targetDivBP.innerHTML = "Pause";

}


function deleteBidule(){ //Delete le button Fin

	var elem = document.getElementById("buttonEnd");
	elem.parentElement.removeChild(elem);

}

function deletePause(){ //Delete le boutton Pause
	var elem = document.getElementById("buttonPause");
	elem.parentElement.removeChild(elem);

}


function deleteSecondScreen() {
	elem = document.getElementById("buttonStart");
	elem.parentElement.removeChild(elem);
	elem = document.getElementById("buttonHisto");
	elem.parentElement.removeChild(elem);
	elem = document.getElementById("buttonOption");
	elem.parentElement.removeChild(elem);
	elem = document.getElementById("buttonReturnToProfil");
	elem.parentElement.removeChild(elem);

}

function deleteChose() { //Delet le button Start Et Histo pour passer à l'écran d'historique
	
	deleteSecondScreen();
	oui.appendChild(elementB4);
	var targetDivBRe = document.getElementById("buttonRetour");
    targetDivBRe.innerHTML = "Retour";
    document.getElementById("buttonRetour").onclick = function() { clearHisto(); returnMenu(); };
    	
	affichageHisto();

}


function affichageHisto() { //Affiche l'historique
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
		divScore.innerHTML = dateH + " : " + scoreH + " ISSOU";

		document.getElementById("Container").appendChild(divScore);


	}
}


function clearHisto() { //Supprime l'affichage de l'historique
	var ID = localStorage.getItem("ID")
	for(var i = 0; i < ID; i++){
		elem = document.getElementById(i + "Score");
		elem.parentElement.removeChild(elem);
	}

	elem = document.getElementById("buttonRetour");
	elem.parentElement.removeChild(elem);
	
}


function returnMenu() { // Retour à l'écran 2

	oui.appendChild(elementB2); //Button Start
	var targetDivBS = document.getElementById("buttonStart");
	targetDivBS.innerHTML = "Start";

	oui.appendChild(elementB6); //Button Historique
	var targetDivBH = document.getElementById("buttonHisto");
	targetDivBH.innerHTML = "Historique";

	oui.appendChild(elementB44); 
	var targetDivBO = document.getElementById("buttonOption");
	targetDivBO.innerHTML = "Option";

	oui.appendChild(elementB33); 
	var targetDivBRs1 = document.getElementById("buttonReturnToProfil");
	targetDivBRs1.innerHTML = "Retour";

}

function openOptionScreen() {
	deleteSecondScreen();

	oui.appendChild(elementB4);
	var targetDivBRe = document.getElementById("buttonRetour");
    targetDivBRe.innerHTML = "Retour";

    document.getElementById("buttonRetour").onclick = function() { elem = document.getElementById("buttonRetour");
	elem.parentElement.removeChild(elem); returnMenu();}
}


function defineProfil() {

	deleteFirstScreen();
	localStorage.clear();

	//Création d'un moyen pour l'utilisateur d'enregistrer son nom et prénom
	//Nom
	var profilInputFieldNom = document.createElement("INPUT");
	profilInputFieldNom.id = "inputFieldNom";
    profilInputFieldNom.setAttribute("type", "text");
    profilInputFieldNom.setAttribute("value", "Nom");
    document.body.appendChild(profilInputFieldNom);

    //Prenom
    var profilInputFieldPrenom = document.createElement("INPUT");
    profilInputFieldPrenom.id = "inputFieldPrenom";
    profilInputFieldPrenom.setAttribute("type", "text");
    profilInputFieldPrenom.setAttribute("value", "Prenom");
    document.body.appendChild(profilInputFieldPrenom);

    //Button pour sauvegarder les entrée
    oui.appendChild(elementB9);

    var targetDivBS = document.getElementById("buttonSave");
	targetDivBS.innerHTML = "Save";

}


function inputDefineProfil() { //Sauvegarde les entrées de l'utilisateur si différent de null

	var nom = document.getElementById("inputFieldNom").value;
	var prenom = document.getElementById("inputFieldPrenom").value;
	if ( nom === "" || prenom === "" ) {
		alert("Veuillez remplir tous les champs requis");
	}
	else if ( nom !== "" && prenom !== ""){
		localStorage.setItem("nom", nom);
		localStorage.setItem("prenom", prenom);
		deleteField();
		returnFirstScreen();
		var targetDiv9 = document.getElementById("buttonLaunch");
		targetDiv9.innerHTML = nom + " " + prenom;


	}
}
 

function InstantiateReset(){
	if(course === false && buttonResetCheck === false ){
		
	 	upo = false;

	 	ouioui.appendChild(elementB3);
	 	var targetDivBE = document.getElementById("buttonEnd");
	 	targetDivBE.innerHTML = "Stop";

	 	var targetDivBP = document.getElementById("buttonPause");
	 	targetDivBP.innerHTML = "Reprendre";

	 	console.log("JA");
	}

	if (course === true && upo === false) {

		upo = true;

		deleteBidule();

		var targetDivBP = document.getElementById("buttonPause");
	 	targetDivBP.innerHTML = "Pause";
	}
	else {
		console.log("NEIN");
	}

}

function UnlimitedFunction(){
	deleteBidule();
	off = 3;

	returnMenu();

	buttonResetCheck = true;
}