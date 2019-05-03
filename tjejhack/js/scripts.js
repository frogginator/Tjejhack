var i = 0;
var ratt = 0;
var städer = ["x","1","2","2","1","x","1","rom","stockholm","tokyo"]

function bildByte() {
	
	var bilder = ["img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg"];
	document.getElementById("stad").src = bilder[i];
	i++;
	rattSvar();
}

function rattSvar() {
	console.log("rättSvar körs");
	var svar = document.forms["myForm"]["svar"].value;
	if (svar == städer[i-1]){
		ratt++;
		document.getElementById("rätt").innerHTML = "rätta svar: " + ratt + "/10";
		if (i ==10) {
			document.getElementById("knapp").disabled = true;

		}
		
	}


	if (ratt <10 && i >=10) {
		document.getElementById("färdig").innerHTML = "du kan inte dina huvudstäder så bra :("
	}
	else if (ratt == 10 && i >=10) {
		document.getElementById("färdig").innerHTML = "Du kan alla huvudstäder i denna quizen!"
	}
}

$( "#knapp" ).click(function( event ) {
	event.preventDefault();
});