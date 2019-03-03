//Récupérer dans le fichier Json la latitude et longitude pour chacun des vélos et l'injecter dans la variable marker pour les afficher sur sur la map
var mymap;
var data;
var ville = 'Nantes';

function init_map() {

//Initialisation de la carte
   var mymap = L.map('mapid').setView([47.217, -1.553], 13.5);

   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
         '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
         'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.streets'
   }).addTo(mymap);

//Recuperation des infos via API JC Decaux
   var url = 'https://api.jcdecaux.com/vls/v1/stations?contract='+ ville +'&apiKey=0ae98a85f566e50063913e55f95b55366337fba6';
   var oXhr = new XMLHttpRequest();

   oXhr.onload = function() {
      var data = jQuery.parseJSON(this.responseText);
//data est un tableau qui contient toutes les stations
// ici les données sont exploitables
      console.log('retour : ', data);
//console.log('nom : ', data[9].name, 'lat : ', data[9].position.lat, 'lng : ', data[9].position.lng);

// Création des marker et positionnement sur la carte
      var marker = []; //
      var i;
      for (i = 0; i < data.length; i++) {
		 data[i].reserved = 'NON'; 
//if(data[i].status != 'CLOSED') { //Afficher que les stations ouvertes 
         marker[i] = new L.Marker([data[i].position.lat, data[i].position.lng]).addTo(mymap);
//console.log(marker[i]);
         marker[i].bindPopup('status:'+data[i].status + '<br/>' + data[i].name + '<br/> Vélo reservé : ' + data[i].reserved +  '<br/> Vélos dispos : ' + data[i].available_bikes + '<br/><div class="bouton"><input onclick="onResaClick()" id="resa" type="submit" value="Réserver"/></div>');
// corriger le input type pour enlever le onclick $('#resa').on('click', onResaClick);
//marker[i].on('click', onClick); 
// pour faire quelquechose au clic sur le marker
	  //}   
      }
   };

   oXhr.onerror = function(data) {
      console.log('Erreur ...');
   }
   oXhr.open('GET', url, true);
   oXhr.send(null);
}

function onClick(e) {
	// pour faire quelquechose au clic sur le marker
    //e.openPopup();
    //alert('ok');
}

function onResaClick(e) {
   //e.openPopup();
	$( "#register" ).css( "display", "block" );
}

$(document).ready(function() {
   init_map();
});

// reset the color after a short delay
   /* setTimeout(function() {
    event. = "";
    }, 500);
  }, false); */

//L'API de stockage Web fournit des mécanismes --> navigateurs stockent paires clé / valeur
//Les clés et les valeurs sont toujours des chaînes (les clés entières seront automatiquement converties en chaînes, exactement comme le font les objets).
//Accéder à ces valeurs comme un objet ou avec les méthodes Storage.getItem () et Storage.setItem ().

//CANVA
/*class Sign{ 
this.canvas = document.getElementById('myCanvas');
this.infValidation = $('#rreserved-bike');
this.ctx = this.canvas.getContext('2d');
this.paint = (e) => {
	this.ctx.lineTo(e.offsetX, e.offsetY);
	this.ctx.stroke();
}}

canvasSign(){
	this.canvas.addEventListener(type:'pointerdown', listener(e) => {
		this.ctx.beginPath();
		this.canvas.addEventListener(type:"mousemove", this.paint, options:false);
	}
	)
	this.canvas.addEventListener(type:'pointerup', listener:(e) =>{
		this.canvas.removeEventListener(type:'mousemove', this.paint);
	})
} */