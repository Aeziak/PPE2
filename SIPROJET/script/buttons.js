//Partie Booléenne

var launch = false; // Est-ce que la course est lancée ?
var upo = true; // Est-ce que la course est en pause ?
var buttonResetCheck = true; // Est-ce qu'on a appuyer sur le boutton Reset du profile ?
var Container2 = document.getElementById("Container2");
var Container1 = document.getElementById("Container1");
var BottomContainer = document.getElementById("BottomContainer");
var iamTheBooleanOfMyCode = false; // Booléene pour appeller UnlimitedFunction();
var prenom = "Prenom"; // Variable de stockage du prénom
var nom = "Nom"; // Variable de stockage du nom
var soundenabled = true; // Est-ce que le son est activé ?


// Partie Button


var elementB1 = document.createElement("button"); //ButtonPause activé durant la course
elementB1.type = "button"; // Attribution du type boutton à l'élément elementB1
elementB1.value = "Pause"; // Attribution de la valeur "Pause" en texte dans l'élément elementB1
elementB1.id = "buttonPause"; // Attribution d'un id à l'élément elementB1
elementB1.onclick = function() { // On éxécute une fonction quand on clique sur l'élément
	play();
	course = !course;
	buttonResetCheck = !buttonResetCheck;
	repeat = false;
 };

var elementB2 = document.createElement("button");  //ButtonStart
elementB2.type = "button"; // Attribution du type boutton à l'élément elementB2
elementB2.value = "Click me"; // Attribution de la valeur "Click me" en texte dans l'élément elementB2
elementB2.id = "buttonStart"; // Attribution d'un id à l'élément elementB2
elementB2.onclick = function() { // On éxécute une fonction quand on clique sur l'élément
	play();
	course = !course;
	console.log(course);
	off++;
	deleteMachin();
};

var elementB4 = document.createElement("button"); //Button de Retour qui s'affiche sur l'écran d'historique
elementB4.type = "button"; // Attribution du type boutton à l'élément elementB4
elementB4.value = "Click me"; // Attribution de la valeur "Click me" en texte dans l'élément elementB4
elementB4.id = "buttonRetour"; // Attribution d'un id à l'élément elementB4
elementB4.onclick = function() { // On éxécute une fonction quand on clique sur l'élément
	play();
	returnMenu();
};

var elementB9 = document.createElement("button"); //Button
elementB9.type = "button"; // Attribution du type boutton à l'élément elementB9
elementB9.value = "Click me"; // Attribution de la valeur "Click me" en texte dans l'élément elementB9
elementB9.id = "buttonSave"; // Attribution d'un id à l'élément elementB9
elementB9.onclick = function() { // On éxécute une fonction quand on clique sur l'élément
	play();
	inputDefineProfil();
};


var elementB11 = document.createElement("button");
elementB11.type = "button"; // Attribution du type boutton à l'élément elementB11
elementB11.value = "Start"; // Attribution de la valeur "Click me" en texte dans l'élément elementB11
elementB11.id = "buttonLaunch"; // Attribution d'un id à l'élément elementB11
elementB11.onclick = function() { // On éxécute une fonction quand on clique sur l'élément
	play();
	launch = !launch;
};

var elementB22 = document.createElement("button");
elementB22.type = "button"; // Attribution du type boutton à l'élément elementB22
elementB22.value = "Reset"; // Attribution de la valeur "Reset" en texte dans l'élément elementB22
elementB22.id = "buttonReset"; // Attribution d'un id à l'élément elementB22
elementB22.onclick = function() { // On éxécute une fonction quand on clique sur l'élément
	play();
	defineProfil();
	deleteOptions();
};


var elementB6 = document.createElement("button"); // Button Historique
elementB6.type = "button"; // Attribution du type boutton à l'élément elementB6
elementB6.value = "Histo"; // Attribution de la valeur "Reset" en texte dans l'élément elementB6
elementB6.id = "buttonHisto"; // Attribution d'un id à l'élément elementB6
elementB6.onclick = function() { // On éxécute une fonction quand on clique sur l'élément
	play();
	deleteChose();
};

var elementB33 = document.createElement("button"); // Button pour retourner au 1er écran
elementB33.type = "button"; // Attribution du type boutton à l'élément elementB33
elementB33.value = "retourChoixProfil"; // Attribution de la valeur "RetourChoixProfil" en texte dans l'élément elementB33
elementB33.id = "buttonReturnToProfil"; // Attribution d'un id à l'élément elementB33
elementB33.onclick = function() { // On éxécute une fonction quand on clique sur l'élément
	play();
	deleteSecondScreen();
	returnFirstScreen();
};

var elementB44 = document.createElement("button"); // Button Option
elementB44.type = "button"; // Attribution du type boutton à l'élément elementB44
elementB44.value = "Option"; // Attribution de la valeur "Option" en texte dans l'élément elementB44
elementB44.id = "buttonOption"; // Attribution d'un id à l'élément elementB44
elementB44.onclick = function() { // On éxécute une fonction quand on clique sur l'élément
	play();
	openOptionScreen();
};


var elementB55 = document.createElement("button"); // Button Graph de l'historique
elementB55.type = "button"; // Attribution du type boutton à l'élément elementB55
elementB55.value = "HistoGraph"; // Attribution de la valeur "HistoGraph" en texte dans l'élément elementB55
elementB55.id = "buttonGraph"; // Attribution d'un id à l'élément elementB55
elementB55.onclick = function() { // On éxécute une fonction quand on clique sur l'élément
	play();
	createGraph();
};


var elementB3 = document.createElement("button"); //Button pour mettre fin à la course et afficher le score
elementB3.id = "buttonEnd"; // Attribution du type boutton à l'élément elementB3
elementB3.value = "Fin"; // Attribution de la valeur "Fin" en texte dans l'élément elementB3
elementB3.onclick = function() { // On éxécute une fonction quand on clique sur l'élément
	play();
	iamTheBooleanOfMyCode = !iamTheBooleanOfMyCode;
	if(iamTheBooleanOfMyCode === true){
	 	courseOff();
	}
	else if(iamTheBooleanOfMyCode === false){
	 	UnlimitedFunction();
	}
};


var buttonToColor = document.createElement("button"); // Button Graph de l'historique
buttonToColor.type = "button"; // Attribution du type boutton à l'élément buttonToColor
buttonToColor.value = "buttonColor"; // Attribution de la valeur "buttonColor" en texte dans l'élément buttonToColor
buttonToColor.id = "buttonColor"; // Attribution d'un id à l'élément buttonToColor
buttonToColor.onclick = function() { // On éxécute une fonction quand on clique sur l'élément
	play();
	chooseColor();
	elem = document.getElementById("buttonRetour"); // on définit elem
 	elem.parentElement.removeChild(elem); // suppresion de l'élément parent de buttonRetour
 	elem = document.getElementById("buttonColor"); // on définit elem
 	elem.parentElement.removeChild(elem); // suppresion de l'élément parent de buttonColor
 	elem = document.getElementById("buttonReset"); // on définit elem
 	elem.parentElement.removeChild(elem); // suppresion de l'élément parent de buttonReset

 	Container1.appendChild(elementB4);

 	document.getElementById("buttonRetour").onclick = function() {
 		play();
    	elem = document.getElementById("buttonRetour"); // on définit elem
    	elem.parentElement.removeChild(elem);  // suppresion de l'élément parent de buttonRetour
		elem = document.getElementById("screenColors"); // on définit elem
		elem.parentElement.removeChild(elem);  // suppresion de l'élément parent de screenColors
		returnMenu();
	}
};


var buttonMap = document.createElement("button");
buttonMap.type = "button"; // Attribution du type button a notre buttonMap
buttonMap.value = "buttonColor"; // Attribution de la valeur "buttonColor" en texte de buttonMap
buttonMap.id = "buttonMap"; // Attribution de l'id à buttonMap
buttonMap.onclick = function() { // On éxécute une fonction quand on clique sur l'élément
	play();
	switchToMap(); // TODO
	screenIsMap = !screenIsMap;

	var map;

	initMap();


}



function initMap() { // Fonction pour initialiser la map
	  map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: lat, lng: lng},
	    zoom: 18 // Zoom de la map a l'affichage
	  });
	}



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

	if ( nom === null ) { // Si la valeur de nom est nulle
		defineProfil();
	}

	else if (launch === true) { // Si on lance la course

		deleteFirstScreen();

		returnMenu();

		launch = false;
	}

}, 10);

function deleteFirstScreen() { // Suppression du premier écran

	var elem = document.getElementById("buttonLaunch");
 	elem.parentElement.removeChild(elem);

}

function returnFirstScreen() { // Retour sur le premier écran (lorsqu'on lance l'application pour la première fois)

	Container2.appendChild(elementB11);
	var targetDivBSt = document.getElementById("buttonLaunch");
    targetDivBSt.innerHTML = nom + " " + prenom;

}

function deleteField () { // Suppression des champs

    var elem = document.getElementById("buttonSave");
 	elem.parentElement.removeChild(elem);
 	elem = document.getElementById("inputFieldNom");
 	elem.parentElement.removeChild(elem);
 	elem = document.getElementById("inputFieldPrenom");
 	elem.parentElement.removeChild(elem);
	elem = document.getElementById("inputFieldAge");
	elem.parentElement.removeChild(elem);
	elem = document.getElementById("inputFieldMasse");
 	elem.parentElement.removeChild(elem);
 	elem = document.getElementById("inputFieldGenderM");
 	elem.parentElement.removeChild(elem);
 	elem = document.getElementById("inputFieldGenderF");
 	elem.parentElement.removeChild(elem);

}

function deleteMachin(){ //Delete le Screen 2 pour passer au screen 3

	deleteSecondScreen();

    Container2.appendChild(elementB1);
	var targetDivBP = document.getElementById("buttonPause");
    targetDivBP.innerHTML = "Pause";
    Container2.appendChild(buttonMap);
	var targetDivBP = document.getElementById("buttonMap");
    targetDivBP.innerHTML = "wéwééwé";

}


function deleteEnd(){ //Delete le button Fin

	var elem = document.getElementById("buttonEnd");
	elem.parentElement.removeChild(elem);

}

function deletePause(){ //Delete le boutton Pause
	var elem = document.getElementById("buttonPause");
	elem.parentElement.removeChild(elem);

}


function deleteSecondScreen() { // On supprime le deuxième screen (avec tout les choix de bouttons)
	elem = document.getElementById("buttonStart");
	elem.parentElement.removeChild(elem);
	elem = document.getElementById("buttonHisto");
	elem.parentElement.removeChild(elem);
	elem = document.getElementById("buttonOption");
	elem.parentElement.removeChild(elem);
	elem = document.getElementById("buttonReturnToProfil");
	elem.parentElement.removeChild(elem);

}

function deleteOptions() { // Suppression du screen d'option
	elem = document.getElementById("buttonColor");
	elem.parentElement.removeChild(elem);
	elem = document.getElementById("buttonReset");
	elem.parentElement.removeChild(elem);

	document.getElementById("buttonRetour").onclick = function() {
    		play();
    		OptionScreen();
    		deleteField();
    	}
}

function deleteChose() { //Delete l'écran 2 pour passer à l'écran d'historique

	deleteSecondScreen();

	affichageHisto();

	BottomContainer.appendChild(elementB4);
	var targetDivBRe = document.getElementById("buttonRetour");
    targetDivBRe.innerHTML = "Retour";

    document.getElementById("buttonRetour").onclick = function() {
    		play();
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
		var scoreH = localStorage.getItem("Score" + i); // Récupération du score
		console.log("SCORE + I" + score + "" + i);

		var dateH = localStorage.getItem("Date" + i); // Affichage de la date en rapport à la course
		var divScore = document.createElement("div");

		divScore.id = i + "Score";
		divScore.innerHTML = dateH + " : " + scoreH + " ISSOU"; // Affichage du score

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

	OptionScreen();
}

function OptionScreen (){

	Container1.appendChild(elementB4);

	Container2.appendChild(buttonToColor);

	Container2.appendChild(elementB22);

	var targetDivBRe = document.getElementById("buttonReset");
	targetDivBRe.innerHTML = "Reset";

	var targetDivBRe = document.getElementById("buttonRetour");
    targetDivBRe.innerHTML = "Retour";

    var targetDivBRe = document.getElementById("buttonColor");
    targetDivBRe.innerHTML = "Couleur";

    document.getElementById("buttonRetour").onclick = function() {
    	play();
    	elem = document.getElementById("buttonRetour");
		elem.parentElement.removeChild(elem);
		elem = document.getElementById("buttonColor");
		elem.parentElement.removeChild(elem);
		elem = document.getElementById("buttonReset");
		elem.parentElement.removeChild(elem);
		returnMenu();

	}
}


function chooseColor() { // Séléction de la couleur des bouttons

	var screenColors = document.createElement("DIV");
	screenColors.id = "screenColors";
	Container1.appendChild(screenColors);

	var chooseColorsButton = document.createElement("DIV");
	chooseColorsButton.id = "chooseColorsButton";
	screenColors.appendChild(chooseColorsButton);
	if(soundenabled === true){
		chooseColorsButton.innerHTML = "<center><div id='default'></div><div id='orange'></div></br><div id='green'></div><div id='red'></div></br><div id='pink'></div><div id='sound'>Desactiver le son</div><div id='soundOff'></div></center>";
	}
	else{
		chooseColorsButton.innerHTML = "<center><div id='default'></div><div id='orange'></div></br><div id='green'></div><div id='red'></div></br><div id='pink'></div><div id='sound'></div><div id='soundOff'>Activer le son</div></center>";
	}

	document.getElementById("orange").onclick = function(){
		play();
		var returnButton = document.getElementById("buttonRetour");
		returnButton.style.backgroundImage = "-webkit-linear-gradient(top, orange, orange)";
		buttonToColor.style.backgroundImage = "-webkit-linear-gradient(top, orange, orange)";
		elementB1.style.backgroundImage = "-webkit-linear-gradient(top, orange, orange)";
		elementB2.style.backgroundImage = "-webkit-linear-gradient(top, orange, orange)";
		elementB4.style.backgroundImage = "-webkit-linear-gradient(top, orange, orange)";
		elementB9.style.backgroundImage = "-webkit-linear-gradient(top, orange, orange)";
		elementB11.style.backgroundImage = "-webkit-linear-gradient(top, orange, orange)";
		elementB22.style.backgroundImage = "-webkit-linear-gradient(top, orange, orange)";
		elementB6.style.backgroundImage = "-webkit-linear-gradient(top, orange, orange)";
		elementB33.style.backgroundImage = "-webkit-linear-gradient(top, orange, orange)";
		elementB44.style.backgroundImage = "-webkit-linear-gradient(top, orange, orange)";
		elementB55.style.backgroundImage = "-webkit-linear-gradient(top, orange, orange)";
		elementB3.style.backgroundImage = "-webkit-linear-gradient(top, orange, orange)";
	};

	document.getElementById("default").onclick = function(){
		play();
		var returnButton = document.getElementById("buttonRetour");
		returnButton.style.backgroundImage = "-webkit-linear-gradient(top, #3498db, #2980b9)";
		buttonToColor.style.backgroundImage = "-webkit-linear-gradient(top, #3498db, #2980b9)";
		elementB1.style.backgroundImage = "-webkit-linear-gradient(top, #3498db, #2980b9)";
		elementB2.style.backgroundImage = "-webkit-linear-gradient(top, #3498db, #2980b9)";
		elementB4.style.backgroundImage = "-webkit-linear-gradient(top, #3498db, #2980b9)";
		elementB9.style.backgroundImage = "-webkit-linear-gradient(top, #3498db, #2980b9)";
		elementB11.style.backgroundImage = "-webkit-linear-gradient(top, #3498db, #2980b9)";
		elementB22.style.backgroundImage = "-webkit-linear-gradient(top, #3498db, #2980b9)";
		elementB6.style.backgroundImage = "-webkit-linear-gradient(top, #3498db, #2980b9)";
		elementB33.style.backgroundImage = "-webkit-linear-gradient(top, #3498db, #2980b9)";
		elementB44.style.backgroundImage = "-webkit-linear-gradient(top, #3498db, #2980b9)";
		elementB55.style.backgroundImage = "-webkit-linear-gradient(top, #3498db, #2980b9)";
		elementB3.style.backgroundImage = "-webkit-linear-gradient(top, #3498db, #2980b9)";
	};

	document.getElementById("green").onclick = function(){
		play();
		var returnButton = document.getElementById("buttonRetour");
		returnButton.style.backgroundImage = "-webkit-linear-gradient(top, rgba(0, 255, 0, 0.9), rgba(0, 255, 0, 0.9))";
		buttonToColor.style.backgroundImage = "-webkit-linear-gradient(top, rgba(0, 255, 0, 0.9), rgba(0, 255, 0, 0.9))";
		elementB1.style.backgroundImage = "-webkit-linear-gradient(top, rgba(0, 255, 0, 0.9), rgba(0, 255, 0, 0.9))";
		elementB2.style.backgroundImage = "-webkit-linear-gradient(top, rgba(0, 255, 0, 0.9), rgba(0, 255, 0, 0.9))";
		elementB4.style.backgroundImage = "-webkit-linear-gradient(top, rgba(0, 255, 0, 0.9), rgba(0, 255, 0, 0.9))";
		elementB9.style.backgroundImage = "-webkit-linear-gradient(top, rgba(0, 255, 0, 0.9), rgba(0, 255, 0, 0.9))";
		elementB11.style.backgroundImage = "-webkit-linear-gradient(top, rgba(0, 255, 0, 0.9), rgba(0, 255, 0, 0.9))";
		elementB22.style.backgroundImage = "-webkit-linear-gradient(top, rgba(0, 255, 0, 0.9), rgba(0, 255, 0, 0.9))";
		elementB6.style.backgroundImage = "-webkit-linear-gradient(top, rgba(0, 255, 0, 0.9), rgba(0, 255, 0, 0.9))";
		elementB33.style.backgroundImage = "-webkit-linear-gradient(top, rgba(0, 255, 0, 0.9), rgba(0, 255, 0, 0.9))";
		elementB44.style.backgroundImage = "-webkit-linear-gradient(top, rgba(0, 255, 0, 0.9), rgba(0, 255, 0, 0.9))";
		elementB55.style.backgroundImage = "-webkit-linear-gradient(top, rgba(0, 255, 0, 0.9), rgba(0, 255, 0, 0.9))";
		elementB3.style.backgroundImage = "-webkit-linear-gradient(top, rgba(0, 255, 0, 0.9), rgba(0, 255, 0, 0.9))";
		console.log("yolo");
	};

	document.getElementById("red").onclick = function(){
		play();
		var returnButton = document.getElementById("buttonRetour");
		returnButton.style.backgroundImage = "-webkit-linear-gradient(top, red, red)";
		buttonToColor.style.backgroundImage = "-webkit-linear-gradient(top, red, red)";
		elementB1.style.backgroundImage = "-webkit-linear-gradient(top, red, red)";
		elementB2.style.backgroundImage = "-webkit-linear-gradient(top, red, red)";
		elementB4.style.backgroundImage = "-webkit-linear-gradient(top, red, red)";
		elementB9.style.backgroundImage = "-webkit-linear-gradient(top, red, red)";
		elementB11.style.backgroundImage = "-webkit-linear-gradient(top, red, red)";
		elementB22.style.backgroundImage = "-webkit-linear-gradient(top, red, red)";
		elementB6.style.backgroundImage = "-webkit-linear-gradient(top, red, red)";
		elementB33.style.backgroundImage = "-webkit-linear-gradient(top, red, red)";
		elementB44.style.backgroundImage = "-webkit-linear-gradient(top, red, red)";
		elementB55.style.backgroundImage = "-webkit-linear-gradient(top, red, red)";
		elementB3.style.backgroundImage = "-webkit-linear-gradient(top, red, red)";
	};

		document.getElementById("pink").onclick = function(){
		play();
		var returnButton = document.getElementById("buttonRetour");
		returnButton.style.backgroundImage = "-webkit-linear-gradient(top, #FF69B4, #FF69B4)";
		buttonToColor.style.backgroundImage = "-webkit-linear-gradient(top, #FF69B4, #FF69B4)";
		elementB1.style.backgroundImage = "-webkit-linear-gradient(top, #FF69B4, #FF69B4)";
		elementB2.style.backgroundImage = "-webkit-linear-gradient(top, #FF69B4, #FF69B4)";
		elementB4.style.backgroundImage = "-webkit-linear-gradient(top, #FF69B4, #FF69B4)";
		elementB9.style.backgroundImage = "-webkit-linear-gradient(top, #FF69B4, #FF69B4)";
		elementB11.style.backgroundImage = "-webkit-linear-gradient(top, #FF69B4, #FF69B4)";
		elementB22.style.backgroundImage = "-webkit-linear-gradient(top, #FF69B4, #FF69B4)";
		elementB6.style.backgroundImage = "-webkit-linear-gradient(top, #FF69B4, #FF69B4)";
		elementB33.style.backgroundImage = "-webkit-linear-gradient(top, #FF69B4, #FF69B4)";
		elementB44.style.backgroundImage = "-webkit-linear-gradient(top, #FF69B4, #FF69B4)";
		elementB55.style.backgroundImage = "-webkit-linear-gradient(top, #FF69B4, #FF69B4)";
		elementB3.style.backgroundImage = "-webkit-linear-gradient(top, #FF69B4, #FF69B4)";
	};
	document.getElementById("sound").onclick = function(){
		soundOff();
		document.getElementById("sound").innerHTML = "";
		document.getElementById("soundOff").innerHTML = "Activer le son";
	}
	document.getElementById("soundOff").onclick = function(){
		soundOn();
		document.getElementById("sound").innerHTML = "Désactiver le son";
		document.getElementById("soundOff").innerHTML = "";
	}
}


function defineProfil() { // Definition du profil de la personne

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

	//Age
	var profilInputFieldAge = document.createElement("INPUT");
    profilInputFieldAge.id = "inputFieldAge";
    profilInputFieldAge.setAttribute("type", "number");
    profilInputFieldAge.setAttribute("value", "Age");
    Container2.appendChild(profilInputFieldAge);

    //Masse
	var profilInputFieldMasse = document.createElement("INPUT");
    profilInputFieldMasse.id = "inputFieldMasse";
    profilInputFieldMasse.setAttribute("type", "number");
    profilInputFieldMasse.setAttribute("value", "Masse");
    Container2.appendChild(profilInputFieldMasse);


    //GenderM
	var profilInputFieldGenderM = document.createElement("INPUT");
    profilInputFieldGenderM.id = "inputFieldGenderM";
    profilInputFieldGenderM.setAttribute("type", "checkbox");
    profilInputFieldGenderM.setAttribute("value", "Male");
    Container2.appendChild(profilInputFieldGenderM);

    var targetDiv99 = document.getElementById("inputFieldGenderM");
		targetDiv99.innerHTML = "Homme";

    //GenderMM
	var profilInputFieldGenderF = document.createElement("INPUT");
    profilInputFieldGenderF.id = "inputFieldGenderF";
    profilInputFieldGenderF.setAttribute("type", "checkbox");
    profilInputFieldGenderF.setAttribute("value", "Female");
    Container2.appendChild(profilInputFieldGenderF);

    var targetDiv999 = document.getElementById("inputFieldGenderF");
		targetDiv999.innerHTML = "Femme";


    //Button pour sauvegarder les entrée
    Container1.appendChild(elementB9);

    var targetDivBS = document.getElementById("buttonSave");
	targetDivBS.innerHTML = "Save";

}


function inputDefineProfil() { //Sauvegarde les entrées de l'utilisateur si différent de null
	localStorage.clear();
	var nom = document.getElementById("inputFieldNom").value;
	var prenom = document.getElementById("inputFieldPrenom").value;
	var age =  document.getElementById("inputFieldAge").value;
	var masse =  document.getElementById("inputFieldMasse").value;
	if ( nom === "" || prenom === "") {
		alert("Veuillez remplir tous les champs requis");
	}
	else if ( nom !== "" && prenom !== ""){
		localStorage.setItem("nom", nom);
		localStorage.setItem("prenom", prenom);
		localStorage.setItem("age", age);
		deleteField();
		var elem = document.getElementById("buttonRetour");
		elem.parentElement.removeChild(elem);
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

function InstantiateReset(){ // Initialisation du reset
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

function switchToMap() { // Changement vers la map
	elem = document.getElementById("buttonPause");
	elem.parentElement.removeChild(elem);
	targetDiv.innerHTML = "";
	targetDiv1.innerHTML = "";

	//add map

	 document.getElementById("buttonMap").onclick = function() {
	 	play();
    	Container2.appendChild(elementB1);
		var targetDivBP = document.getElementById("buttonPause");
	    targetDivBP.innerHTML = "Pause";
	    screenIsMap = !screenIsMap;

	}
}
