import Phaser from "phaser";

export default class Precarga extends Phaser.Scene {
  constructor() {
    super("informacion");
  }

  create() {
    this.add.image(200, 300, "background");
    this.botonAtras = this.add.image(60, 525, "botonAtras").setScale(0.15);
    this.logoUnraf = this.add.image(275, 30, "unraf").setScale(0.065);
    this.add.text(100, 125, "Informacion");
    this.add.text(30, 165, "Deberas eliminar todos los enemigos");
    this.add.text(30, 185, "que se encuentran en el nivel,");
    this.add.text(30, 205, "para poder avanzar cada etapa.");
    this.add.text(30, 225, "El movimiento del personaje");
    this.add.text(30, 245, "será mediante el joystick.");
    this.add.text(30, 265, "El ataque del personaje se realiza");
    this.add.text(30, 285, "solo cuando está inmovil.");
  }
  update() {
    this.botonAtras
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => this.arranqueMenu());
    this.logoUnraf
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        window.open("https://www.unraf.edu.ar/", "_blank");
      });
  }
  arranqueMenu() {
    this.scene.start("menu");
  }
}
