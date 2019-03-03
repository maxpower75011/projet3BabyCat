//alert(data[i].reserved); 
var registered ='true';
// Méthode de stockage
document.getElementById('stockage').onclick = function() {
	if(typeof localStorage!='undefined' && JSON) {
		var coordonnees = {
// si le local storage est supporté alors création d'une variable coordonnée avec les infos du formulaire
			nom:document.getElementById('nom').value,
			station:128 // > renseigner la station 
			//prenom:document.getElementById('prenom').value,
			//ville:document.getElementById('ville').value,
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
		document.getElementById('ville').value = coordonnees.ville;
		alert("Lecture effectuée");
	} else alert("localStorage n'est pas supporté");
// Sinon affiche un message d'erreur
};