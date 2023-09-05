import Phaser from "phaser";

export default class Precarga extends Phaser.Scene {
    constructor() {
      super("precarga");
    }
  
  
    preload() {
    this.load.image("sky", "assets/skies/space3.png");
    this.load.image("botonMenu", "assets/images/botonMenu.png");
    this.load.image("botonAtras", "assets/images/botonAtras.png");
    this.load.image("botonInfo", "assets/images/botonInfo.png");
    this.load.image("enter", "assets/images/teclaEnter.png");
    this.enter = this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.ENTER
      );
    }

    create(){
        this.botonEnter = this.add.image(175, 525, "enter").setScale(0.5);
    }

    update(){
    this.botonEnter
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => this.arranqueMenu());
  }

  arranqueMenu() {
    this.scene.start("hello-world");
  }
}
 
