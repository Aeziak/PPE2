//Partie Booléenne

var launch = false;
var upo = true;
var buttonResetCheck = true;
var Container2 = document.getElementById("Container2");
var Container1 = document.getElementById("Container1");
var BottomContainer = document.getElementById("BottomContainer");
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

var elementB33 = document.createElement("button"); // Button pour retourner au 1er écran
elementB33.type = "button";
elementB33.value = "retourChoixProfil"; 
elementB33.id = "buttonReturnToProfil";
elementB33.onclick = function() { 
	deleteSecondScreen();
	returnFirstScreen();
};

var elementB44 = document.createElement("button"); // Button Option
elementB44.type = "button";
elementB44.value = "Option"; 
elementB44.id = "buttonOption";
elementB44.onclick = function() { 
	openOptionScreen();
};


var elementB55 = document.createElement("button"); // Button Graph de l'historique
elementB55.type = "button";
elementB55.value = "HistoGraph"; 
elementB55.id = "buttonGraph";
elementB55.onclick = function() { 
	createGraph();
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

	Container2.appendChild(elementB11);
	var targetDivBSt = document.getElementById("buttonLaunch");
    targetDivBSt.innerHTML = nom + " " + prenom;

	Container2.appendChild(elementB22);
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

    Container2.appendChild(elementB1);
	var targetDivBP = document.getElementById("buttonPause");
    targetDivBP.innerHTML = "Pause";

}


function deleteEnd(){ //Delete le button Fin

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

function deleteChose() { //Delet l'écran 2 pour passer à l'écran d'historique
	
	deleteSecondScreen();
    	
	affichageHisto();

	BottomContainer.appendChild(elementB4);
	var targetDivBRe = document.getElementById("buttonRetour");
    targetDivBRe.innerHTML = "Retour";

    document.getElementById("buttonRetour").onclick = function() {
    		clearHisto();
    		returnMenu(); 
    		elem = document.getElementById("buttonGraph");
			elem.parentElement.removeChild(elem);};

    BottomContainer.appendChild(elementB55);
    var targetDivBHg = document.getElementById("buttonGraph");
    targetDivBHg.innerHTML = "Graph";

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

		document.getElementById("Container2").appendChild(divScore);


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

	Container1.appendChild(elementB2); //Button Start
	var targetDivBS = document.getElementById("buttonStart");
	targetDivBS.innerHTML = "Start";

	Container1.appendChild(elementB6); //Button Historique
	var targetDivBH = document.getElementById("buttonHisto");
	targetDivBH.innerHTML = "Historique";

	Container1.appendChild(elementB44); 
	var targetDivBO = document.getElementById("buttonOption");
	targetDivBO.innerHTML = "Option";

	Container1.appendChild(elementB33); 
	var targetDivBRs1 = document.getElementById("buttonReturnToProfil");
	targetDivBRs1.innerHTML = "Retour";

}

function openOptionScreen() {
	deleteSecondScreen();

	Container1.appendChild(elementB4);
	var isButton = document.getElementsByTagName('button'); 
	var targetDivBRe = document.getElementById("buttonRetour");
    targetDivBRe.innerHTML = "Retour";
	var optionOptions = document.getElementById("options");
	var optionColors = document.getElementById("screenColor");
	optionOptions.innerHTML = "<p>Salut !</p>";
	optionOptions.style.color = "blue";
	optionColors.innerHTML = "<p id='default'>Bleu</p></br><p id='orange'>Orange</p></br><p id='green'>Vert</p></br><p id='red'>Rouge</p></br><p id='pink'>Rose</p>";
	var Default	= document.getElementById("default");
	var orange = document.getElementById("orange");
	var Green = document.getElementById("green");
	var Red = document.getElementById("red");
	var Pink = document.getElementById("pink");
	var isDefault = false;
	var isOrange = false;
	var isGreen = false;
	var isRed = false;
	var isPink = false;
	Default.style.color = "blue";
	orange.style.color = "orange";
	green.style.color = "green";
	red.style.color = "red";
	pink.style.color = "pink";
	
	document.getElementById("orange").onclick = function(){ 
		var returnButton = document.getElementById("buttonRetour");
		returnButton.style.backgroundImage = "-webkit-linear-gradient(top, #FF3300, #FF6600)";
		elementB1.style.backgroundImage = "-webkit-linear-gradient(top, #FF3300, #FF6600)";
		elementB2.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB4.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB9.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB11.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB22.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB6.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB33.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB44.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB55.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB3.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		isOrange = true; isDefault = false; isGreen = false; isRed = false; isPink = false;
	};

	if(isOrange === true){
		document.getElementById("buttonRetour").onmouseover = function() { 
			var returnButton = document.getElementById("buttonRetour");
			returnButton.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
			elementB1.style.backgroundImage = "-webkit-linear-gradient(top, #FF3300, #FF6600)";
			elementB2.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
			elementB4.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
			elementB9.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
			elementB11.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
			elementB22.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
			elementB6.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
			elementB44.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
			elementB55.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
			elementB3.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		}
	}

	
	document.getElementById("buttonRetour").onmouseout = function() {
		var returnButton = document.getElementById("buttonRetour"); 
		returnButton.style.backgroundImage = "-webkit-linear-gradient(top, #FF3300, #FF6600)";
		elementB1.style.backgroundImage = "-webkit-linear-gradient(top, #FF3300, #FF6600)";
		elementB2.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB4.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB9.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB11.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB22.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB6.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB44.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB55.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
		elementB3.style.backgroundImage = "-webkit-linear-gradient(top, #FF3333, #FF6633)";
	}

    document.getElementById("buttonRetour").onclick = function() { 
    	elem = document.getElementById("buttonRetour");
		elem.parentElement.removeChild(elem); returnMenu(); }
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
    Container2.appendChild(profilInputFieldNom);

    //Prenom
    var profilInputFieldPrenom = document.createElement("INPUT");
    profilInputFieldPrenom.id = "inputFieldPrenom";
    profilInputFieldPrenom.setAttribute("type", "text");
    profilInputFieldPrenom.setAttribute("value", "Prenom");
    Container2.appendChild(profilInputFieldPrenom);

    //Button pour sauvegarder les entrée
    Container1.appendChild(elementB9);

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
 
 /*


								 IL FAUT RENDRE COMPREHENSIBLE CETTE MERDE
								 IL FAUT RENDRE COMPREHENSIBLE CETTE MERDE
								 IL FAUT RENDRE COMPREHENSIBLE CETTE MERDE
								 IL FAUT RENDRE COMPREHENSIBLE CETTE MERDE



 */

function InstantiateReset(){
	if(course === false && buttonResetCheck === false ){ //Pause
		
	 	upo = false;

	 	Container1.appendChild(elementB3);
	 	var targetDivBE = document.getElementById("buttonEnd");
	 	targetDivBE.innerHTML = "Stop";

	 	var targetDivBP = document.getElementById("buttonPause");
	 	targetDivBP.innerHTML = "Reprendre";

	 	console.log("JA");
	}

	if (course === true && upo === false) { //Reprise de course

		upo = true;

		deleteEnd();

		var targetDivBP = document.getElementById("buttonPause");
	 	targetDivBP.innerHTML = "Pause";
	}
	else {
		console.log("NEIN");
	}

}

function UnlimitedFunction(){ //Fin de course retour au menu
	deleteEnd();
	off = 3;

	returnMenu();

	buttonResetCheck = true;
}