//Data réservation stockée dans navigateur avec API Html5 WebStorage et affichées dans footer
//Affiche en permanence l'état de la réservation (s'il y en a) avec un décompte dynamique du temps restant avant expiration de la réservation 
//Date() retourne une chaine de caractères
//Date.now() retourne un timestamp: nombre qui indique le nombre de millisecondes passées depuis le 1/1/1970

setTimeout(function(){alert("Vous avez dépassé 20 min...Réessayez !")});
setTimeout(function() { event.target.time = ""; }, 500); false;

//C'est une référence à l'objet qui a envoyé l'événement

SetTimeout(function(){alert("Vous avez dépassé 20 min...Réessayez!");
location.reload()},3000);
document.getElementById('prenom').value = coordonnees.prenom;

//Code Js pour le bouton
$("#stockage").onclick = function () {
  sessionStorage.setItem('dateRes', Date());
  refreshData();
}

function refreshData(){
	let printDate  = document.getElementById('print-date'); //time plutôt que date
	let dateStorage = sessionStorage.getItem('dateRes');
  	printDate.textContent = dateStorage;
}

//myDate = parseInt(sessionStorage.dateReservation);
//millis = Date.now() - myDate;
//diminuerCompteur();
//document.getElementById("AvailableBike").innerHTML = (sessionStorage.bike_station) + ' velo'

var x = setTimeout("instructions", délai en milisecondes).

function mafonction() {...}

setTimeout (mafontion, 5000); //La fonction sera exécutée après 5 secondes (5000 millisecondes).
					   
SetInterval("instructions", délai)

Ex:setInterval("alert('bip')", 1200000);
//Affiche un message toutes les dix secondes
//L'action sera recommencée jusqu'à ce que l'on quitte la page ou clearInterval exécutée.

var x = setInterval(mafonction, 1200000);
...
clearInterval(x);
					   
//Code source:
var counter = 10;
var intervalId = null;
function finish() {
  clearInterval(intervalId);
  document.getElementById("bip").innerHTML = "TERMINE!";	
}
function bip() {
    counter--;
    if(counter == 0) finish();
    else {	
        document.getElementById("bip").innerHTML = counter + " secondes restantes";
    }	
}
					   
function start(){
  intervalId = setInterval(bip, 1000);
}

sessionStorage.station_name + " par " + localStorage.prenom + '&nbsp;' + localStorage.nom + "</h3>";
myDate = parseInt(sessionStorage.dateReservation);
millis = Date.now() - myDate;
diminuerCompteur();
document.getElementById("AvailableBike").innerHTML = (sessionStorage.bike_station) + 'vélos </div>';

//Data de réservation stockée dans le navigateur à l'aide de l'API Html5 WebStorage en dessous du panneau. <br>
//Une seule réservation à la fois, si nouvelle, remplace l'autre
//webStorage - Appels ajax: côté front envoyer informations au serveur -> pas nécessaire pour cela. <br>
//Méthode Get Post:envoyer infos au serveur: formulaire qu'il faut que j'envoie pour que le serveur php puisse récupérer infos- delete remove Php, node.js, python
//sessionStorage
//mouseMove
//Stocker la date à laquelle a été reservé le vélo dans le localstorage
//Avec un setInterval soutraire par la date actuelle = différence