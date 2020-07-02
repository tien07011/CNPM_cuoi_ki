var cantidad = 5;

function setUpPanels(num) {
	var pWidth = 640;
	var pHeight = 600;

	var anchoSmile = 100;
	var altoSmile = 100;

	var leftPanel = document.getElementById("leftPanel");
	var rightPanel = document.getElementById("rightPanel");
	
	leftPanel.style.setProperty("position","absolute");
	leftPanel.style.setProperty("width", "640px");
	leftPanel.style.setProperty("height", "600px");
	leftPanel.style.setProperty("float","left");
	leftPanel.style.setProperty("left", "0");
	leftPanel.style.setProperty("top", "120px");

	rightPanel.style.setProperty("position","absolute");
	rightPanel.style.setProperty("left", pWidth+"px");
	rightPanel.style.setProperty("top", "120px");
	rightPanel.style.setProperty("width", pWidth+"px");
	rightPanel.style.setProperty("height", pHeight+"px");
	rightPanel.style.setProperty("float","left");
	rightPanel.style.borderLeft = "2px #444 solid";

	for (i=1; i<=num; i++){
		var oImg = document.createElement("IMG");
		oImg.style.setProperty("position","absolute");
		oImg.style.setProperty("top", generarNumeroAlAzar(pHeight-altoSmile)+"px");
		oImg.style.setProperty("left",generarNumeroAlAzar(pWidth-anchoSmile)+"px");
		oImg.style.setProperty("height",altoSmile+"px");
		oImg.style.setProperty("width",anchoSmile+"px");
		oImg.src ="smile.png" ;
		if(i==num) {
			oImg.addEventListener("click", function(){ ganador(this); });
 		} else 
	 	{
	 		oImg.addEventListener("click", function(){ perdedor(this); });
	 	}
		
		
		leftPanel.appendChild(oImg);

		oImg2 = oImg.cloneNode(true);
		if(i!=num){
			rightPanel.appendChild(oImg2);
		}
		else
		{
			
		};
		
	}
	
}

function start(num) {
	 
	setUpPanels(num);

}

function generarNumeroAlAzar(num) {
	var valor = Math.random() * num + 1;
	valor = Math.ceil(valor);
	return valor;
}

function ganador(oImg){
	
	for (i=0; i<cantidad*2-1; i++) {

		var node = document.getElementsByTagName("img")[0];
		node.parentNode.removeChild(node);
	}
	cantidad += 5;
	start(cantidad);
}

function perdedor(oImg){
	for (i=0; i<cantidad*2-1; i++) {

		var node = document.getElementsByTagName("img")[0];
		node.parentNode.removeChild(node);
	}
	alert("End of game!\nYou made "+cantidad+" points");
}