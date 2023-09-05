import Phaser from "phaser";

export default class Precarga extends Phaser.Scene {
    constructor() {
      super("precarga");
    }
  
  
    preload() {
    this.load.image("sky", "assets/skies/space3.png");
    this.load.image("botonMenu", "assets/images/botonMenu.png");
    this.load.image("botonAtras", "assets/images/botonAtras.png");
    }
   
    create(){
        this.add.image(400, 300, "sky");
        this.botonMenu = this.add.image(395, 525, "botonmenu");
    }

    update(){
        this.botonMenu
        .setInteractive({ useHandCursor: true })
        // @ts-ignore
        .on("pointerdown");
    }
 }
