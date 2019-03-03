<!DOCTYPE html>
<!-- saved from url=(0070)https://www.alsacreations.com/xmedia/tuto/html5/web-storage/demo3.html -->
<html lang="fr"><script type="text/javascript" src="chrome-extension://ffljdddodmkedhkcjhpmdajhjdbkogke/js/datalayer-checker.js"></script><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>HTML5 : Web Storage</title>
<meta name="viewport" content="width=device-width">

<!-- Feuille de styles génériques -->
<link rel="stylesheet" href="./HTML5 _ Web Storage_files/styles.css" type="text/css">

</head>

<body>

<h1>Web Storage</h1>

<div id="wrap">

	<h2>Démonstration 3</h2>
	<form>
		<p><label>Nom</label></p>
		<p><input id="nom" name="nom" type="text"></p>
		<p><label>Prénom</label></p>
		<p><input id="prenom" name="prenom" type="text"></p>
		<p><label>Ville</label></p>
		<p><input id="ville" name="ville" type="texte"></p>
		<p>
			<input type="button" value="Mémoriser" id="stockage">
			<input type="reset" value="Effacer tout">
			<input type="button" value="Récupérer" id="lecture">
		</p>
	</form>
	
</div>

<p class="mentions">Page de démonstration du tutoriel <a href="https://www.alsacreations.com/article/lire/1402-web-storage-localstorage-sessionstorage.html">Web Storage HTML5</a></p>

<script>
// Méthode de stockage
document.getElementById('stockage').onclick = function() {
	if(typeof localStorage!='undefined' && JSON) {
// si le local storage est supporté alors création d'une variable coordonnée avec les infos du formulaire
	var coordonnees = {
		nom:document.getElementById('nom').value,
		prenom:document.getElementById('prenom').value,
		ville:document.getElementById('ville').value,
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
</script>


</body></html>