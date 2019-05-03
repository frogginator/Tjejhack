var i = 0;
var ratt = 0;
var städer = ["x","1","2","2","1","x","1","1","1","x"]

function bildByte() {
	
	var bilder = ["img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg", "img/11.jpg"];
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
		document.getElementById("färdig").innerHTML = "du fick inte alla rätt, bättre lycka nästa gång!"
	}
	else if (ratt == 10 && i >=10) {
		document.getElementById("färdig").innerHTML = "Du klarade det felfritt!"
	}
}

$( "#knapp" ).click(function( event ) {
	event.preventDefault();
});