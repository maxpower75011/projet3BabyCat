//Minuteur minute seconde en JS
//Données de réservation stockées dans navigateur avec API Html5 WebStorage et affichées dans footer
//Affiche en permanence l'état de la réservation (s'il y en a) avec un décompte dynamique du temps restant avant expiration de la réservation 
//Date() retourne une chaine de caractères
//Date.now() retourne un timestamp: nombre qui indique le nombre de millisecondes passées depuis le 1/1/1970

setTimeout(function(){alert("Vous avez dépassé 20 min...Réessayez !")});
setTimeout(function() { event.target.time = ""; }, 500); false;

//Code Js pour le bouton

$("#stockage").onclick = function () {
  sessionStorage.setItem('dateRes', Date());
  refreshData();
}

function refreshData(){
	let printDate  = document.getElementById('print-date');
	let dateStorage = sessionStorage.getItem('dateRes');
  	printDate.textContent = dateStorage;
}

myDate = parseInt(sessionStorage.dateReservation);
millis = Date.now() - myDate;
diminuerCompteur();
document.getElementById("AvailableBike").innerHTML = (sessionStorage.bike_station) + ' velo'