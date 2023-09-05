import Phaser from "phaser";

export default class Precarga extends Phaser.Scene {
    constructor() {
      super("informacion");
    }
  

    create(){
        this.fondo = this.add.image(400, 230, "menu").setScale(1.5);
        this.botonAtras = this.add.image(120, 525, "botonatras").setScale(0.5);
    
    }
 }
