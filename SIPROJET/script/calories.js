var masse = 0; // Masse de la personne
var userAge = parseInt(localStorage.age); //Age de la personne
var vitesseRef = 0; // Vitesse de référence pour le calcul (par palliers)
var duree = 0; // Durée de la course
var k = 0; // Constante qui varie selon la vitesse de référence pour le calcul des calories
var calories = 0; // Nombre de calories consommés durant la course

function drawCalcul(){

	masse = 58; // Masse de test
	duree = heure * 60 + min + sec/60; // Durée de test

	if(vMoy < 12) // Condition par rapport à la vitesse moyenne de course de la personne
	{
		k = 1.73195; // Changement de la constante k par rapport au pallier de la vitesse moyenne
		vitesseRef = 10; // Changement de la vitesseRef par rapport au pallier de la vitesse moyenne
	}
	else if(12 < vMoy < 14) // Condition par rapport à la vitesse moyenne de course de la personne
	{
		k = 1.6413; // Changement de la constante k par rapport au pallier de la vitesse moyenne
		vitesseRef = 13; // Changement de la vitesseRef par rapport au pallier de la vitesse moyenne
	}
	else if(14 < vMoy < 17.5) // Condition par rapport à la vitesse moyenne de course de la personne
	{
		k = 1.6888; // Changement de la constante k par rapport au pallier de la vitesse moyenne
		vitesseRef = 15; // Changement de la vitesseRef par rapport au pallier de la vitesse moyenne
	}
	else if(vMoy > 17.5) // Condition par rapport à la vitesse moyenne de course de la personne
	{
		k = 2.4624; // Changement de la constante k par rapport au pallier de la vitesse moyenne
		vitesseRef = 20; // Changement de la vitesseRef par rapport au pallier de la vitesse moyenne
	}

	calories = (masse*vitesseRef*duree*k)/100; // Application du calcul aux calories consommés

}
