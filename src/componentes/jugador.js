import Phaser from "phaser";
//import Bullets from './bullets.js';


export default class Jugador extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, sprite, vida, ataque, velocidadAtaque) {
    super(scene, x, y, sprite); // Llama al constructor de la clase padre (Sprite)
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.sprite = ["player"];
    this.vida = vida;
    this.ataque = ataque;
    this.velocidadAtaque = velocidadAtaque;
    this.x = x;
    this.y = y;
    this.setCollideWorldBounds(true);
    this.body.allowGravity = false;
    //this.bullets = new Bullets(this);
  }

  
  /*ataquePersonaje() {

  }*/

  movimientoPersonaje(dx, dy) {
    

    const velocidad = 4;
    const velocidadX = velocidad * dx
    const velocidadY = velocidad * dy

    if (dx < 0) {
      this.setVelocityX(velocidadX);
      this.anims.play("left", true);
    } else if (dx > 0) {
      this.setVelocityX(velocidadX);
      this.anims.play("right", true);
    } else if (dy < 0) {
      this.setVelocityY(velocidadY);
      this.anims.play("up", true);
    } else if (dy > 0) {
      this.setVelocityY(velocidadY);
      this.anims.play("down", true);
    } else {
      // Si no se está moviendo, detén la animación
      this.anims.stop();
      this.setVelocity(0, 0);

      //this.bullets.fireBullet(this.x, this.y - 10);
    }
  }

  muertePersonaje() {
    // Maneja la lógica de la muerte del personaje
    if (this.vida <= 0) {
      
      // Puedes agregar aquí más lógica relacionada con la muerte del personaje
    }
  }

  aumentoAtaqueP(aumento) {
    // Aumenta el atributo de ataque del personaje
    this.ataque += aumento;
  }
}
