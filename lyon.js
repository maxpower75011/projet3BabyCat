/* API JCDecaux
    Fichier Json qui obtient toutes les lattitudes et longitudes des vélos:
    GET https://api.jcdecaux.com/vls/v1/stations?apiKey=0ae98a85f566e50063913e55f95b55366337fba6 -->
    <!-- GET https://api.jcdecaux.com/vls/v1/stations?contract={contract_name}&apiKey=0ae98a85f566e50063913e55f95b55366337fba6 -->
    */

//Map

var mymap = L.map('mapid').setView([45.75, 4.85], 13.5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);


var marker = L.marker([51.4, -0.08]).addTo(mymap);
var marker = L.marker([45.755, 4.85]).addTo(mymap);


//Récupérer dans le fichier Json la latitude et longitude pour chacun des vélos et l'injecter dans la variable marker pour les afficher sur sur la map


//function markerOnClick(e) {   //e correspond à "event"
//	alert("Marker clicked");
//}

//L.marker([]).on('click', markerOnClick).addTo(map);


//onmousedown ready to draw
//lastX :1168 lastY :1916

//Object { canvasElt: canvas#canvas '', contextElt: CanvasRenderingContext2D, lastX: 0, lastY: 0, newX: 0, newY: 0, pencilContact: true, eraseButtonElt: button#erase '' , validateButtonElt: button#confirm'' }

//mousedown ready to draw
//lastX :1168 lastY :1916

//Object { canvasElt: canvas#canvas '', contextElt: CanvasRenderingContext2D, lastX: 0, lastY: 0, newX: 0, newY: 0, pencilContact: true, eraseButtonElt: button#erase '' , validateButtonElt: button#confirm'' }

//mousemove : drawing
//lastX :1168 lastY :1915
//newX :1168 newY :1915

//propriété qui définit le premier point en X et en Y lorsque tu cliques, puis un point en X et en Y lorsque ta souris se déplace. Tu obtiens donc une première position et une position "actuelle" selon le déplacement de ta souris. Evidemment, à chaque mouvement ta position actuelle devient ta première position.

//Exemple JSON
//{
//    "player": {
//        "pseudo": "terminator",
//        "xp": "205",
//        "backpack": {
//            "item": [
//                { "name": "potion", "nbre": "3" },
//                { "name": "bullet", "nbre": "105" }
//            ]
//        }
//    }
//}
