//Carrousel: un-site-web-dynamique-avec-jquery/1569419-tp-le-carrousel

	$(window).keydown(function(e){ //dans la fenêtre, à l'appui sur une touche du clavier
		switch (e.keyCode) {
			case 37: // flèche gauche
				alert('gauche'); //
				break;
			case 39: // flèche droite
				alert('droite');
				break;
		}
	});

$(document).ready(function(){
	
var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
    $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
	$p = $('#carrousel p'), // on cible les p contenus dans le carrousel
    indexImg = $img.length - 1, // on définit l'index du dernier élément
    i = 0, // on initialise un compteur
    pressed = 0,
    $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
    $currentP = $p.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
    
$img.css('display', 'none'); // on cache les images
$p.css('display', 'none'); // on cache les p
$currentImg.css('display', 'block'); // on affiche seulement l'image courante
$currentP.css('display', 'block'); // on affiche seulement l'image courante

$carrousel.append('<div class="controlpause"><span class="pause"><i class="fas fa-pause"></i></span></div>' , '<div class="controls"><span class="prev"><i class="fas fa-caret-left"></i></span> <span class="next"><i class="fas fa-caret-right"></i></span></div>');
				  
//$carrousel.append('<div class="controls"><span class="prev">Precedent</span> <span class="next">Suivant</span></div>');

$('.next').click(function(){ // image suivante -> ceci est un event listener
    
    i++; // on incrémente le compteur
    if( i <= indexImg ){
        $img.css('display', 'none'); // on cache les images
        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.css('display', 'block'); // puis on l'affiche
		
		$p.css('display', 'none'); // on cache les paragraphes
        $currentP = $img.eq(i); // on définit le nouveau paragraphe
        $currentP.css('display', 'block'); // ensuite on l'affiche
    }
    
    else {
        i = indexImg; //on donne à i la valeur de l'index de l'image, i++, pas besoin d'incrémenteur, faire un ConsoleLog pour savoir à quoi cela sert
		}
    });

$('.prev').click(function(){ // image précédente

    i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

    if( i >= 0 ){
        $img.css('display','none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
		
		$p.css('display','none'); //on refait la même chose avec les paragraphes
        $currentP = $p.eq(i); //on refait la même chose avec les paragraphes, p vaut la valeur de l'incrémental, on prend le i qui correspond à la valeur de l'incémentation 
        $currentP.css('display', 'block'); //on refait la même chose avec les paragraphes
    }
    
    else{
        i = 0; //pas nécéssaire d'ajouter quelque chose car le i prend la valeur de l'image et ce n'est pas l'image elle-même
    }
});

$('.pause').click(function(){ // image en pause
     if (pressed == 0) {
        pressed = 1;
     } 
	 else {
        pressed = 0;
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
    if (pressed == 0) {
        $img.css('display', 'none');
	    $p.css('display', 'none'); //on refait la même chose pour p

        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
		
	    $currentP = $p.eq(i);
        $currentP.css('display', 'block'); //on refait la même chose pour p

        //alert("unpressed");
    } else {
       // alert("pressed");
    }
    slideImg(); // relance la fonction à la fin
   }, 2000); // on définit l'intervalle à 2 secondes (7s)
}

slideImg(); // enfin, on lance la fonction une première fois
});