// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.formes = [];
    
    
}

function Forme() {
    this.couleur;
    this.epaisseur;
    
}

function Rectangle() {
    Forme.call();
    this.coordHG_x = 0;
    this.coordHG_y = 0;
    this.largeur = 0;
    this.hauteur = 0;
}

function Line() {
    Forme.call();
    this.coord1x = 0;
    this.coord1y = 0;
    this.coord2x = 0;
    this.coord2y = 0;
}
