//Faire apparaître le bouton valider au commencement du dessin pour vérifier si le canvas a été rempli afin de valider la réservation

//il faut que la signature soit bien remplie pour finaliser la résa

$('#myCanvas').mouseover(function(){
console.log('chat')	
});

//Pour le canva: il faut faire du html et du javascript avec un event listener et une fonction
// reset the time after a short delay
//    setTimeout(function() {
//    event.target.time = "";
//    }, 500);
//  }, false);

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