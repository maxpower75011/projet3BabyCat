///////////
//Code JC Decaux
///////////


var url = 'https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=0ae98a85f566e50063913e55f95b55366337fba6';
var oXhr = new XMLHttpRequest();
oXhr.onload = function () {
	var data = jQuery.parseJSON(this.responseText);
  //var data = JSON.parse(this.responseText);
  // ici les données sont exploitables
  console.log('retour : ', data);
	
/*	{
  "number": 123,
  "contract_name" : "Lyon",
  "name": "nom station",
  "address": "adresse indicative",
  "position": {
    "lat": 45.774204,
    "lng": 4.867512
  },
  "banking": true,
  "bonus": false,
  "status": "OPEN",
  "bike_stands": 20,
  "available_bike_stands": 15,
  "available_bikes": 5,
  "last_update": <timestamp>
}
*/
	
console.log('nom : ', data[9].name, 'lat : ', data[9].position.lat, 'lng : ', data[9].position.lng);

	
///////////
//Map
///////////

var mymap = L.map('mapid').setView([45.75, 4.85], 13.5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);

for(var i= 0; i < data.length; i++) //pour la variable i=0, i inférieur à l'ensemble des valeurs de la data et i+1
{
     var marker = L.marker([data[i].position.lat, data[i].position.lng]).addTo(mymap);
}
	
//var marker = L.marker([51.4, -0.08]).addTo(mymap);
//var marker = L.marker([45.755, 4.85]).addTo(mymap);

};

oXhr.onerror = function (data) {
  console.log('Erreur ...');
};
oXhr.open('GET', url, true);
oXhr.send(null);

//Récupérer dans le fichier Json la latitude et longitude pour chacun des vélos et l'injecter dans la variable marker pour les afficher sur sur la map
