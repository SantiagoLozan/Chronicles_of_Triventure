import Phaser from "phaser";
import { getPhrase } from "../services/translations";

export default class Precarga extends Phaser.Scene {
  information;
  uno;
  dos;
  tres;
  cuatro;
  cinco;
  seis;
  siete;

  constructor() {
    super("informacion");
  }

  create() {
    this.add.image(200, 300, "background");
    this.botonAtras = this.add.image(60, 525, "botonAtras").setScale(0.15);
    this.logoUnraf = this.add.image(275, 30, "unraf").setScale(0.065);
    this.add.text(100, 125, getPhrase, this.information);
    this.add.text(30, 165, getPhrase, this.uno);
    this.add.text(30, 185, getPhrase, this.dos);
    this.add.text(30, 205, getPhrase, this.tres);
    this.add.text(30, 225, getPhrase, this.cuatro);
    this.add.text(30, 245, getPhrase, this.cinco);
    this.add.text(30, 265, getPhrase, this.seis);
    this.add.text(30, 285, getPhrase, this.siete);
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
