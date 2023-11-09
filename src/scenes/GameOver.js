import Phaser from "phaser";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

export default class Perdedor extends Phaser.Scene {
  #gameOver = keys.sceneGameOver.gameOver;
  #retry = keys.sceneGameOver.retry;
  #intenta = keys.sceneGameOver.intenta;
  constructor() {
    super("perder");
  }

  create() {
    this.add.image(200, 300, "background");
    this.botonAtras = this.add.image(60, 525, "botonAtras").setScale(0.15);
    this.logoUnraf = this.add.image(275, 30, "unraf").setScale(0.065);
    this.scene.get("precarga").events.emit("playMusic");
    this.add.text(130, 125, getPhrase(this.#gameOver), {
      fontSize: "24px",
      fontFamily: "Arial",
      color: "black",
    });
    /*this.add.text(30, 165, getPhrase(this.#retry), {
      fontSize: "18px",
      fontFamily: "Arial",
      color: "black",
    });*/
    this.add.text(30, 185, getPhrase(this.#intenta), {
      fontSize: "18px",
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
