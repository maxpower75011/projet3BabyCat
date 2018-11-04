//Récupérer dans le fichier Json la latitude et longitude pour chacun des vélos et l'injecter dans la variable marker pour les afficher sur sur la map
var mymap;
var data;

function init_map() {

   //Initialisation de la carte
   var mymap = L.map('mapid').setView([45.75, 4.85], 13.5);

   L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
         '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
         'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.streets'
   }).addTo(mymap);

   //Recuperation des infos via API JC Decaux
   var url = 'https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=0ae98a85f566e50063913e55f95b55366337fba6';
   var oXhr = new XMLHttpRequest();

   oXhr.onload = function() {
      var data = jQuery.parseJSON(this.responseText);
      // ici les données sont exploitables
      console.log('retour : ', data);
      //console.log('nom : ', data[9].name, 'lat : ', data[9].position.lat, 'lng : ', data[9].position.lng);

      // Création des marker et positionnement sur la carte
      var marker = [];
      var i;
      for (i = 0; i < 10; i++) {
         marker[i] = new L.Marker([data[i].position.lat, data[i].position.lng]).addTo(mymap);
         //console.log(marker[i]);
         marker[i].bindPopup(data[i].name + '<br/> Vélos dispos : ' + data[i].available_bikes + '<br/><div class="bouton"><input type="button" value="Réserver" href="lien"/></div>');
         marker[i].on('click', onClick);
      }

   };

   oXhr.onerror = function(data) {
      console.log('Erreur ...');
   }
   oXhr.open('GET', url, true);
   oXhr.send(null);
}

function onClick(e) {
   //e.openPopup();
}

$(document).ready(function() {
   init_map();
});