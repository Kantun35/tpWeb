
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
        
	// Définir ici les attributs de la 'classe'
        this.initCoord_x = 0;
        this.initCoord_y = 0;
        this.finalCoord_x = 0;
        this.finalCoord_y = 0;
        this.hasBeenDown = false;

	// Developper les 3 fonctions gérant les événements
        
        //pression
        this.onMouseDown = function (evt) {
           pos = getMousePosition(canvas,evt);
           this.initCoord_x = pos.x;
           this.initCoord_y = pos.y;
           this.hasBeenDown = true;
           console.log("E: mousedown, x:"+ this.initCoord_x + " y:" + this.initCoord_y);
            
        }
        //deplacement
        this.onMouseMove= function (evt) {
            if (this.hasBeenDown) {
                pos = getMousePosition(canvas,evt);
                this.finalCoord_x = pos.x;
                this.finalCoord_y = pos.y;
                console.log("E: mousemove, x:"+ this.finalCoord_x + " y:" + this.finalCoord_y);
            }           
        }
        //relachement 
        this.onMouseRelease = function (evt) {
           if (this.hasBeenDown) {
                pos = getMousePosition(canvas,evt);
                this.finalCoord_x = pos.x;
                this.finalCoord_y = pos.y;
                this.hasBeenDown = false;
                console.log("E: mouseup, x:"+ this.finalCoord_x + " y:" + this.finalCoord_y);
            } 
        }
	// Associer les fonctions précédentes aux évènements du canvas.
        canvas.addEventListener('mousedown',this.onMouseDown,false);
        canvas.addEventListener('mousemove',this.onMouseMove,false);
        canvas.addEventListener('mouseup',this.onMouseRelease,false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



