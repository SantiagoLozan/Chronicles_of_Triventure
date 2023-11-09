import Phaser from "phaser";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

export default class Informacion extends Phaser.Scene {
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
    this.add.text(130, 125, getPhrase(this.#informationText), {
      fontSize: "24px",
      fontFamily: "Arial",
      color: "black",
    });
    this.add.text(30, 175, getPhrase(this.#information1), {
      fontSize: "20px",
      fontFamily: "Arial",
      color: "black",
    });
    this.add.text(30, 195, getPhrase(this.#information2), {
      fontSize: "20px",
      fontFamily: "Arial",
      color: "black",
    });
    this.add.text(30, 215, getPhrase(this.#information3), {
      fontSize: "20px",
      fontFamily: "Arial",
      color: "black",
    });
    this.add.text(30, 235, getPhrase(this.#information4), {
      fontSize: "20px",
      fontFamily: "Arial",
      color: "black",
    });
    this.add.text(30, 255, getPhrase(this.#information5), {
      fontSize: "20px",
      fontFamily: "Arial",
      color: "black",
    });
    this.add.text(30, 275, getPhrase(this.#information6), {
      fontSize: "20px",
      fontFamily: "Arial",
      color: "black",
    });
    this.add.text(30, 295, getPhrase(this.#information7), {
      fontSize: "20px",
      fontFamily: "Arial",
      color: "black",
    });
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
