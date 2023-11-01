import Phaser from "phaser";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

export default class Precarga extends Phaser.Scene {
  #informationText = keys.sceneInformation.information;
  #information1 = keys.sceneInformation.uno;
  #information2 = keys.sceneInformation.dos;
  #information3 = keys.sceneInformation.tres;
  #information4 = keys.sceneInformation.cuatro;
  #information5 = keys.sceneInformation.cinco;
  #information6 = keys.sceneInformation.seis;
  #information7 = keys.sceneInformation.siete;

  constructor() {
    super("informacion");
  }

  create() {
    this.add.image(200, 300, "background");
    this.botonAtras = this.add.image(60, 525, "botonAtras").setScale(0.15);
    this.logoUnraf = this.add.image(275, 30, "unraf").setScale(0.065);
    this.add.text(100, 125, getPhrase(this.#informationText));
    this.add.text(30, 165, getPhrase(this.#information1));
    this.add.text(30, 185, getPhrase(this.#information2));
    this.add.text(30, 205, getPhrase(this.#information3));
    this.add.text(30, 225, getPhrase(this.#information4));
    this.add.text(30, 245, getPhrase(this.#information5));
    this.add.text(30, 265, getPhrase(this.#information6));
    this.add.text(30, 285, getPhrase(this.#information7));
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
