//ger i ett värde
var i = 0; 
//ger ratt ett värde
var ratt = 0;
//gör städer till ett fält (string)
var städer = ["x","1","2","2","1","x","1","1","1","x"]

//Funktionen byter bild genom att klicka submit och jämför bilden och vad man skrivit.
function bildByte() {
	
	var bilder = ["img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg", "img/11.jpg"];
	document.getElementById("stad").src = bilder[i];
	i++;
	rattSvar();
}
// om du få rätt svar ger den ett poäng till "ratt" som räknar poäng. Stänger av knappen submit om man svarat 10 gånger
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

// om du fått mindre än 10 rätt så get den detta svar
	if (ratt <10 && i >=10) {
		document.getElementById("färdig").innerHTML = "du fick inte alla rätt, bättre lycka nästa gång!"
	} // Om du fått 10 rätt körs detta
	else if (ratt == 10 && i >=10) {
		document.getElementById("färdig").innerHTML = "Du klarade det felfritt!"
	}
}
//förhindrar att knappen uppdateras när man klickar submit knapeen
$( "#knapp" ).click(function( event ) {
	event.preventDefault();
});

// sätter datum den ska räkna ner till
var countDownDate = new Date("May 27, 2019 08:30:00").getTime();

// updaterar nedräkningen varje sekund
var x = setInterval(function() {

  // tar dagens datum
  var now = new Date().getTime();

  // finner avståndet mellan idag och till dagen den ska räkna ner till
  var distance = countDownDate - now;

  // Tid kalkilaton för dagar, timmar, minuter och sekunder
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // visar resultatet med diven "id"
  document.getElementById("nedräkning").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // Om tiden är nerräknad skriver den denna text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("nedräkning").innerHTML = "Senaste tjejhack har varit :(";
  }
}, 1000);