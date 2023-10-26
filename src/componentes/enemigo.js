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

    this.vida = vida;
    this.ataque = ataque;
    this.velocidadAtaque = velocidadAtaque;

    this.setCollideWorldBounds(true);
    this.body.allowGravity = false;
    this.timer = scene.time.addEvent({
      delay: 3000,
      callback: this.movimientoEnemigo,
      callbackScope: this,
      loop: true,
    });
    /*this.timer2 = scene.time.addEvent({
      delay: 3000, 
      callback: this.ataqueEnemigo,
      callbackScope: this,
      loop: true 
  });*/
  }

  /*ataqueEnemigo() {
        
      }
    */

  movimientoEnemigo() {
    const movEnemyX = Phaser.Math.Between(100, 330);
    const movEnemyY = Phaser.Math.Between(55, 110);
    this.x = movEnemyX;
    this.y = movEnemyY;
  }
}
