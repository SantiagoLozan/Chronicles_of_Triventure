import Phaser from "phaser";

export default class Precarga extends Phaser.Scene {
  constructor() {
    super("menu");
  }
  create() {
    this.add.image(200, 300, "background");
    this.logoUnraf = this.add.image(275, 30, "unraf").setScale(0.065);
    this.botonInfo = this.add.image(355, 100, "botonInfo").setScale(0.06);
    this.add.text(70, 125, "Chronicles of Triventure");
    this.botonJuego = this.add.image(100, 350, "boton").setScale(0.28);
    this.botonRanking = this.add.image(300, 350, "boton").setScale(0.28);
    this.add.text(75, 340, "Jugar");
    this.add.text(275, 340, "Ranking");
  }
  update() {
    this.botonJuego
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => this.arranqueJuego());
    this.botonInfo
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => this.arranqueInfo());
    this.botonRanking
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => this.arranqueRanking());
    this.logoUnraf
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        window.open("https://www.unraf.edu.ar/", "_blank");
      });
  }

  arranqueJuego() {
    this.scene.start("hello-world");
  }
  arranqueInfo() {
    this.scene.start("informacion");
  }
  arranqueRanking() {
    this.scene.start("ranking");
  }
}
