Minuteur minute seconde en Javascript

Données de réservation stockées dans navigateur à l'aide de l'API Html5 WebStorage et affichées dans footer en dessous du panneau. 
Affiche en permanence l'état de la réservation (s'il y en a) avec un décompte dynamique du temps restant avant expiration de la réservation 

setTimeout (function(){alert("Vous avez dépassé 20 min...Réessayez !")});

 reset the time after a short delay setTimeout(function() { event.target.time = ""; }, 500); }, false);