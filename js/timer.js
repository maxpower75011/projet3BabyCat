//Minuteur minute seconde en Javascript

//Données de réservation stockées dans navigateur à l'aide de l'API Html5 WebStorage et affichées dans footer en dessous du panneau. 

//Affiche en permanence l'état de la réservation (s'il y en a) avec un décompte dynamique du temps restant avant expiration de la réservation 

//Date() retourne une chaine de caractères.


//Date.now() retourne un timestamp: nombre qui indique le nombre de millisecondes passées depuis le 1/1/1970

setTimeout (function(){alert("Vous avez dépassé 20 min...Réessayez !")});

 reset the time after a short delay setTimeout(function() { event.target.time = ""; }, 500); }, false);


//bouton HTML

<button id="save" type="button" >Save</button>

</button>
<div id='print-date'>
</div>

//Code Js pour le bouton

save.onclick = function () {
  sessionStorage.setItem('dateRes', Date());
  
  refreshData();
}

function refreshData(){
	let printDate  = document.getElementById('print-date');
	let dateStorage = sessionStorage.getItem('dateRes');
  
	printDate.textContent = dateStorage;
}

