var launch = false;
var upo = true;
var buttonResetCheck = true;
var oui = document.getElementById("Container"); buttonResetCheck = true;
var ouioui = document.getElementById("Oui");
var iamTheBooleanOfMyCode = false; // Booléene pour appeller UnlimitedFunction();



var elementB1 = document.createElement("button");
elementB1.type = "button";
elementB1.value = "Pause"; 
elementB1.id = "buttonPause";
elementB1.onclick = function() { 
	course = !course;
	buttonResetCheck = !buttonResetCheck;
	repeat = false;
 };

var elementB2 = document.createElement("button");
elementB2.type = "button";
elementB2.value = "Click me"; 
elementB2.id = "buttonStart";
elementB2.onclick = function() { 
	course = !course; 
	console.log(course); 
	off++;
	deleteMachin();
};

var elementB4 = document.createElement("buttonHist");
elementB4.type = "button";
elementB4.value = "Luftmatratze"; 
elementB4.onclick = function() { 
		    
};

var elementB5 = document.createElement("buttonOption");
elementB5.type = "button";
elementB5.value = "Option"; 
elementB5.onclick = function() { 
		    
};

var elementB3 = document.createElement("button");
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
// BUTTON PAUSE



// BUTTON START

  

//BUTTON END


*/

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



var chooseProfil = setInterval ( function() { //Gére l'affichage des boutons

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



	}

	

}, 10);

function deleteMachin(){

	elem = document.getElementById("buttonStart");
	elem.parentElement.removeChild(elem);

    oui.appendChild(elementB1);
	var targetDivBP = document.getElementById("buttonPause");
    targetDivBP.innerHTML = "Pause";


}



function deleteBidule(){

	var elem = document.getElementById("buttonEnd");
	elem.parentElement.removeChild(elem);

}

function deleteTruc(){
	var elem = document.getElementById("buttonPause");
	elem.parentElement.removeChild(elem);
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

	oui.appendChild(elementB2);
	var targetDivBS = document.getElementById("buttonStart");
	targetDivBS.innerHTML = "Start";

	buttonResetCheck = true;
}