// Méthode de stockage
document.getElementById('stockage').onclick = function() {
	if(typeof localStorage!='undefined' && JSON) {
// si le local storage est supporté alors création d'une variable coordonnée avec les infos du formulaire
	var coordonnees = {
		nom:document.getElementById('nom').value,
		prenom:document.getElementById('prenom').value,
		velov:document.getElementById('velov').value,
	};
		localStorage.setItem('coord',JSON.stringify(coordonnees));
		alert("Mémorisation effectuée");
	} else alert("localStorage n'est pas supporté");
// Sinon affiche un message d'erreur
};
	
// Méthode de lecture
document.getElementById('lecture').onclick = function() {
	if(typeof localStorage!='undefined' && JSON) {
// si le local storage est supporté alors création d'une variable coordonnée qui récupère les infos stockées dans le local storage
		var coordonnees = JSON.parse(localStorage.getItem('coord'));
		
		document.getElementById('nom').value = coordonnees.nom;
		document.getElementById('prenom').value = coordonnees.prenom;
		document.getElementById('velov').value = coordonnees.velov;
		alert("Lecture effectuée");
	} else alert("localStorage n'est pas supporté");
// Sinon affiche un message d'erreur
};