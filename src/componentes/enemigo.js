import Phaser from "phaser";
import ENEMIGOS from "../enemigos";

export default class Enemigo extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, tipoEnemigo, vida, ataque, velocidadAtaque) {
    const enemigoConfig = ENEMIGOS.find(
      (enemigo) => enemigo.sprite === tipoEnemigo
    );

    if (!enemigoConfig) {
      tipoEnemigo = "enemigo"; // Establecer un valor predeterminado
    }
    super(scene, x, y, tipoEnemigo);
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.scene = scene;
    this.vida = vida;
    this.ataque = ataque;
    this.velocidadAtaque = velocidadAtaque;

    this.setCollideWorldBounds(true);
    this.body.allowGravity = false;
    this.timer = scene.time.addEvent({
      delay: 1000,
      callback: this.movimientoEnemigo,
      callbackScope: this,
      loop: true,
    });
  }

  ataqueEnemigo() {
    const bullet = this.scene.bulletEnemigo.get(this.x, this.y);
    if (bullet) {
      bullet.setActive(true);
      bullet.setVisible(true);
      this.scene.physics.moveTo(
        bullet,
        this.scene.player.x,
        this.scene.player.y,
        200
      );
    }
  }

  movimientoEnemigo() {
    const movEnemyX = Phaser.Math.Between(100, 330);
    const movEnemyY = Phaser.Math.Between(55, 110);
    this.x = movEnemyX;
    this.y = movEnemyY;
    this.ataqueEnemigo();
  }
}
