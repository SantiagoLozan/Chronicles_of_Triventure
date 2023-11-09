import Phaser from "phaser";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

export default class Ganador extends Phaser.Scene {
  #ganador = keys.sceneGanador.ganador;
  #retry = keys.sceneGameOver.retry;
  #tiempo = keys.sceneGanador.mejora;
  #top = keys.sceneGanador.top1;
  constructor() {
    super("ganar");
  }

  create() {
    this.add.image(200, 300, "background");
    this.botonAtras = this.add.image(60, 525, "botonAtras").setScale(0.15);
    this.logoUnraf = this.add.image(275, 30, "unraf").setScale(0.065);
    this.scene.get("precarga").events.emit("playMusic");
    this.add.text(130, 125, getPhrase(this.#ganador), {
      fontSize: "24px",
      fontFamily: "Arial",
      color: "black",
    });
    this.add.text(30, 165, getPhrase(this.#retry), {
      fontSize: "22px",
      fontFamily: "Arial",
      color: "black",
    });
    this.add.text(30, 190, getPhrase(this.#tiempo), {
      fontSize: "20px",
      fontFamily: "Arial",
      color: "black",
    });
    this.add.text(30, 210, getPhrase(this.#top), {
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
