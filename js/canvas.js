//Faire apparaître le bouton valider au commencement du dessin pour vérifier si le canvas a été rempli afin de valider la réservation

//il faut que la signature soit bien remplie pour finaliser la résa

//$('#myCanvas').mouseover(function(){
//console.log('chat')	
//});

//Pour le canva: il faut faire du html et du javascript avec un event listener et une fonction
// reset the time after a short delay
//    setTimeout(function() {
//    event.target.time = "";
//    }, 500);
//  }, false);

//CANVA
//class Sign{
//	this.canvas = document.getElementById('myCanvas');
//	this.infValidation = $('#reserved-bike');
//	this.ctx = this.canvas.getContext('2d');
//	this.paint = (e) => {
//	this.ctx.lineTo(e.offsetX, e.offsetY);
//	this.ctx.stroke();
//}}

//canvasSign(){
//	this.canvas.addEventListener(type:'pointerdown', listener(e) => {
//	this.ctx.beginPath();
//	this.canvas.addEventListener(type:"mousemove", this.paint, options:false);
//	}
//	)
//	this.canvas.addEventListener(type:'pointerup', listener:(e) =>{
//		this.canvas.removeEventListener(type:'mousemove', this.paint);
//	})
//} 

//Cours OC Canvas
//window.onload = function()
//{
//   var canvas = document.getElementById('mon_canvas');
//        if(!canvas)
//        {
//          alert("Impossible de récupérer le canvas");
//          return;
//        }

//   var context = canvas.getContext('2d');
//       if(!context)
//   {
//       alert("Impossible de récupérer le context du canvas");
//       return;
//      }

//C'est ici que l'on placera tout le code servant à nos dessins.
//}

//Par la suite: permettre à l'utilisateur de choisir avec quelle couleur il va signer ou dégradés

        $( document ).ready(function() {
        var canvasDiv = document.getElementById('#myCanvas');
        var canvas = document.createElement('#canvas');
        canvas.setAttribute('width', "200");
        canvas.setAttribute('height', "100");
        canvas.setAttribute('id', 'canvas');
        canvasDiv.appendChild(canvas);
        if(typeof G_vmlCanvasManager != 'undefined') {
            canvas = G_vmlCanvasManager.initElement(canvas);
        }
        context = canvas.getContext("2d");
 
        $('#canvas').mousedown(function(e){
            var mouseX = e.pageX - this.offsetLeft;
            var mouseY = e.pageY - this.offsetTop;
             
            paint = true;
            addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
            redraw();
        });
 
        $('#canvas').mousemove(function(e){
            if(paint){
                addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
                redraw();
            }
        });      
 
        $('#canvas').mouseup(function(e){
            paint = false;
             
        });
 
        $('#canvas').mouseleave(function(e){
            paint = false;
        });
		
		$('#clearCanvasSimple').click(function(e){ // image en pause
			context.clearRect(0, 0, context.canvas.width, context.canvas.height);
		});
 
        var clickX = new Array();
        var clickY = new Array();
        var clickDrag = new Array();
        var paint;
 
        function addClick(x, y, dragging)
        {
            clickX.push(x);
            clickY.push(y);
            clickDrag.push(dragging);
        }
 
        function redraw(){
            context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
             
            context.strokeStyle = "#346187";
            context.lineJoin = "round";
            context.lineWidth = 3;
             
            for(var i=0; i < clickX.length; i++) {       
                context.beginPath();
                if(clickDrag[i] && i){
                    context.moveTo(clickX[i-1], clickY[i-1]);
                }else{
                    context.moveTo(clickX[i]-1, clickY[i]);
                }
                context.lineTo(clickX[i], clickY[i]);
                context.closePath();
                context.stroke();
            }
        }
			
});


//Exemple pour les brush etc
//   canvas.Brush.color:= clred;
//   canvas.Ellipse(195, 117, 205, 128);
//   canvas.Brush.color:= clblue;
//   canvas.Rectangle (192, 130,208,160);
//   canvas.Brush.color:= clgreen;
//   Canvas.Rectangle (187, 130,191,162);
//   canvas.Brush.color:= clyellow;
//   Canvas.Rectangle (209, 130,213,162);
//   canvas.Brush.color:= clmaroon;
//   Canvas.Rectangle (193,161,199,200);
//   canvas.Brush.color:= clpurple;
//   Canvas.Rectangle (201,161,207,200);