import Phaser from "phaser";

export default class Jugador extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, sprite, vida, ataque, velocidadAtaque) {
    super(scene, x, y, sprite); // Llama al constructor de la clase padre (Sprite)
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.scene = scene;
    this.sprite = ["player"];
    this.lastAttackTime = 0;
    this.attackDelay = 3000;
    this.vida = vida;
    this.ataque = ataque;
    this.velocidadAtaque = velocidadAtaque;
    this.enMovimiento = true;
    this.x = x;
    this.y = y;
    this.setCollideWorldBounds(true);
    this.body.allowGravity = false;
    this.body.setImmovable(true);
    this.lastDirection = null;
  }

  movimientoPersonaje(dx, dy) {
    const velocidad = 4;
    const velocidadX = velocidad * dx;
    const velocidadY = velocidad * dy;

    if (dx < 0) {
      this.setVelocityX(velocidadX);
      this.anims.play("left", true);
    } else if (dx > 0) {
      this.setVelocityX(velocidadX);
      this.anims.play("right", true);
    } else if (dy < 0) {
      this.setVelocityY(velocidadY);
      this.anims.play("up", true);
      this.lastDirection = "up";
    } else if (dy > 0) {
      this.setVelocityY(velocidadY);
      this.anims.play("down", true);
      this.lastDirection = "down";
    } else {
      this.anims.stop();
      this.setVelocity(0, 0);
      if (this.lastDirection) {
        this.setFrame(12);
      }
      const currentTime = this.scene.time.now;
      if (currentTime - this.lastAttackTime >= this.attackDelay) {
        this.ataquePersonaje();
        this.lastAttackTime = currentTime;
      }
    }
  }

  ataquePersonaje() {
    const bulletPersonaje = this.scene.bulletPersonaje.get(this.x, this.y);
    if (bulletPersonaje) {
      bulletPersonaje.setActive(true);
      bulletPersonaje.setVisible(true);
      this.scene.physics.moveTo(
        bulletPersonaje,
        this.scene.enemy.x,
        this.scene.enemy.y,
        450
      );
    }
  }

  aumentoAtaqueP(aumento) {
    this.ataque += aumento;
  }
}
