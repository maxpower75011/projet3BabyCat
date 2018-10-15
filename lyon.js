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

//Carrousel

$(document).ready(function(){
    
var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
    $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
    indexImg = $img.length - 1, // on définit l'index du dernier élément
    i = 0, // on initialise un compteur
    $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

$img.css('display', 'none'); // on cache les images
$currentImg.css('display', 'block'); // on affiche seulement l'image courante

$carrousel.append('<div class="controls"> <span class="prev">Precedent</span> <span class="next">Suivant</span> </div>');

$('.next').click(function(){ // image suivante

    i++; // on incrémente le compteur

    if( i <= indexImg ){
        $img.css('display', 'none'); // on cache les images
        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.css('display', 'block'); // puis on l'affiche
    }
    else{
        i = indexImg;
    }

});

$('.prev').click(function(){ // image précédente

    i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

    if( i >= 0 ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }

});

function slideImg(){
    setTimeout(function(){ // on utilise une fonction anonyme
						
        if(i < indexImg){ // si le compteur est inférieur au dernier index
	    i++; // on l'incrémente
	}
	else{ // sinon, on le remet à 0 (première image)
	    i = 0;
	}

	$img.css('display', 'none');

	$currentImg = $img.eq(i);
	$currentImg.css('display', 'block');

	slideImg(); // on oublie pas de relancer la fonction à la fin

    }, 7000); // on définit l'intervalle à 7000 millisecondes (7s)
}

slideImg(); // enfin, on lance la fonction une première fois

});



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
