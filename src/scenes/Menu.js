import Phaser from "phaser";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

export default class Menu extends Phaser.Scene {
  #play = keys.sceneInitialMenu.play;

  #ranking = keys.sceneInitialMenu.ranking;

  constructor() {
    super("menu");
  }

  create() {
    this.add.image(200, 300, "background");
    this.logoUnraf = this.add.image(275, 30, "unraf").setScale(0.065);
    this.botonInfo = this.add.image(355, 100, "botonInfo").setScale(0.06);
    this.add.text(80, 150, "Chronicles of Triventure", {
      fontSize: "22px",
      fontFamily: "Arial",
      color: "black",
    });
    this.botonJuego = this.add.image(100, 350, "boton").setScale(0.28);
    this.botonRanking = this.add.image(300, 350, "boton").setScale(0.28);
    this.add.text(80, 340, getPhrase(this.#play), {
      fontSize: "18px",
      fontFamily: "Arial",
      color: "black",
    });
    this.add.text(275, 340, getPhrase(this.#ranking), {
      fontSize: "18px",
      fontFamily: "Arial",
      color: "black",
    });

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
