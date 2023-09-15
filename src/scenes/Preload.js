import Phaser from "phaser";

export default class Precarga extends Phaser.Scene {
  constructor() {
    super("precarga");
  }

  preload() {
    this.load.image("sky", "assets/skies/space3.png");
    this.load.image("botonMenu", "assets/images/botonMenu.png");
    this.load.image("botonAtras", "assets/images/botonAtras.png");
    this.load.image("botonInfo", "assets/images/botonInfo.png");
    this.load.image("enter", "assets/images/teclaEnter.png");
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
    this.botonEnter = this.add.image(175, 525, "enter").setScale(0.5);
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
  }

  update() {
    this.botonEnter
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => this.arranqueMenu());
  }

  arranqueMenu() {
    this.scene.start("hello-world");
  }
}
