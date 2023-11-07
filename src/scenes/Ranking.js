import Phaser from "phaser";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

export default class Ranking extends Phaser.Scene {
  
  #segundo = keys.sceneRanking.segundo;

  constructor() {
    super("ranking");
  }
  create() {
    this.add.image(200, 300, "background");
    this.botonAtras = this.add.image(60, 525, "botonAtras").setScale(0.15);
    this.logoUnraf = this.add.image(275, 30, "unraf").setScale(0.065);
    this.add.text(70, 125, "Ranking");
    console.log(this.#segundo);
    this.firebase.getHighScores().then((times) => {
      let scrollY = 200;
      times.forEach((doc) => {
      const formattedTime = doc.time.toFixed(2);
    this.add
      .text(30, scrollY, `${doc.name} - ${formattedTime} ${getPhrase(this.#segundo)}`,  {
            fontSize: 12,
          })
          
        scrollY += 20;
      });
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
