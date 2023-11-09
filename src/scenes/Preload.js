import Phaser from "phaser";
import { EN_US, ES_AR, PT_BR } from "../enums/languages";
import { FETCHED, FETCHING, TODO } from "../enums/status";
import { getTranslations } from "../services/translations";

export default class Precarga extends Phaser.Scene {
  #wasChangedLanguage = TODO;

  constructor() {
    super("precarga");
  }

  preload() {
    this.load.image("sky", "assets/skies/space3.png");
    this.load.image("mapa", "assets/images/nivel1.png");
    this.load.image("botonMenu", "assets/images/botonMenu.png");
    this.load.image("botonAtras", "assets/images/botonAtras.png");
    this.load.image("botonInfo", "assets/images/botonInfo.png");
    this.load.image("enter", "assets/images/teclaEnter.png");
    this.load.image("background", "assets/capturas/1.png");
    this.load.image("china", "assets/images/china.png");
    this.load.image("brasil", "assets/images/brasil.png");
    this.load.image("usa", "assets/images/unitedstates.png");
    this.load.image("spain", "assets/images/spain.png");
    this.load.image("unraf", "assets/images/unraf.png");
    this.load.image("phaser", "assets/images/phaser.png");
    this.load.image("boton", "assets/images/boton.png");
    this.load.image("enemigo", "assets/images/enemy.png");
    this.load.image("enemigo2", "assets/images/enemy2.png");
    this.load.image("bullet", "assets/images/bullet.png");
    this.load.image("bullet2", "assets/images/bullet2.png");
    this.load.audio("destruir", "assets/audio/destruir.wav");
    this.load.audio("colisionBloque", "assets/audio/colisionBloque.mp3");
    this.load.audio("elecciones", "assets/audio/elecciones.wav");
    this.load.audio("BGM", "assets/audio/BGM.mp3");
    this.load.tilemapTiledJSON("nivel1", "assets/niveles/nivel1.json");
    this.load.tilemapTiledJSON("nivel2", "assets/niveles/nivel2.json");
    this.load.tilemapTiledJSON("nivel3", "assets/niveles/nivel3.json");
    this.load.tilemapTiledJSON(
      "testcolision",
      "assets/niveles/testcolision.json"
    );
    this.load.image("grid", "assets/images/gridtiles.png");
    this.load.image("imagen", "assets/images/top-down-forest-tileset.png");
    this.load.image("imagen2", "assets/images/top-down-forest-tileset.png");
    this.load.spritesheet("player", "assets/images/player.png", {
      frameWidth: 32,
      frameHeight: 32,
    });

    this.enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
    this.load.plugin(
      "rexvirtualjoystickplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js",
      true
    );
  }

  create() {
    this.add.image(200, 300, "background");
    this.banderaBrasil = this.add.image(70, 300, "brasil").setScale(0.24);
    this.banderaUsa = this.add.image(200, 300, "usa").setScale(0.24);
    this.banderaSpain = this.add.image(330, 300, "spain").setScale(0.24);
    this.logoUnraf = this.add.image(275, 30, "unraf").setScale(0.065);
    this.botonPhaser = this.add.image(145, 500, "phaser").setScale(0.39);
    this.sfx = this.sound.add("elecciones");
    this.backgroundMusic = this.sound.add("BGM", { loop: true });
    this.backgroundMusic.play();

    this.events.on("stopMusic", this.detenerMusica, this);
    this.events.on("playMusic", this.comenzarMusica, this);
    this.cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player", { start: 4, end: 7 }),

      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", { start: 8, end: 11 }),

      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNumbers("player", { start: 12, end: 15 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });

    this.banderaUsa
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.sfx.play();
        this.getTranslations(EN_US);
      });
    this.banderaBrasil
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.sfx.play();
        this.getTranslations(PT_BR);
      });
    this.banderaSpain
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.sfx.play();
        this.getTranslations(ES_AR);
      });
    this.logoUnraf
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        window.open("https://www.unraf.edu.ar/", "_blank");
      });
    this.botonPhaser
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        window.open(
          "https://github.com/SantiagoLozan/Phaser-Parcel-Template",
          "_blank"
        );
      });
  }

  detenerMusica() {
    this.backgroundMusic.stop();
  }

  comenzarMusica() {
    this.backgroundMusic.play();
  }

  arranqueMenu() {
    this.scene.start("menu");
  }

  updateWasChangedLanguage = () => {
    this.#wasChangedLanguage = FETCHED;
    this.arranqueMenu();
  };

  async getTranslations(language) {
    this.language = language;
    this.#wasChangedLanguage = FETCHING;

    await getTranslations(language, this.updateWasChangedLanguage);
  }
}
