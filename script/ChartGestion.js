

var Graph = document.createElement("canvas"); // Button Graph de l'historique
Graph.type = "canvas";
Graph.id = "myChart";
Graph.width = "100";
Graph.height = "100";


if( document.getElementById('myChart') !== null) {
	
};



function createGraph() {

	clearHisto();
	BottomContainer.appendChild(elementB4);
	var targetDivBRe = document.getElementById("buttonRetour");
    targetDivBRe.innerHTML = "Retour";

    document.getElementById("buttonRetour").onclick = function() {
    		elem = document.getElementById("myChart");
			elem.parentElement.removeChild(elem);
    		elem = document.getElementById("buttonGraph");
			elem.parentElement.removeChild(elem);
			elem = document.getElementById("buttonRetour");
			elem.parentElement.removeChild(elem);
			returnMenu(); 
	};


	var dateHG = [];
	var scoreHG = [];

	var ID = localStorage.getItem("ID");

	for(var i = 0; i < ID; i++){

		var scoreH = localStorage.getItem("Score" + i);
		var dateH = localStorage.getItem("Date" + i);
		
		dateHG.push(dateH);
		scoreHG.push(scoreH);
		console.log("wéwé");
	}

	Container2.appendChild(Graph);
	var ctx = document.getElementById('myChart').getContext('2d');
	var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: dateHG,
    datasets: [{
      data: scoreHG,
      backgroundColor: "rgba(153,255,51,0.4)"
    }]
  }
})};


