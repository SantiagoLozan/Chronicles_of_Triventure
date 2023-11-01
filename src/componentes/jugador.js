import Phaser from "phaser";



export default class Jugador extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, sprite, vida, ataque, velocidadAtaque) {
    super(scene, x, y, sprite); // Llama al constructor de la clase padre (Sprite)
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.scene = scene;
    this.sprite = ["player"];
    this.vida = vida;
    this.ataque = ataque;
    this.velocidadAtaque = velocidadAtaque;
    this.enMovimiento = true;
    this.x = x;
    this.y = y;
    this.setCollideWorldBounds(true);
    this.body.allowGravity = false;
    
  }


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
      this.ataquePersonaje()
    }

    
  }

  ataquePersonaje(){
      const bulletPersonaje = this.scene.bulletPersonaje.get(this.x, this.y);
      if (bulletPersonaje) {
        bulletPersonaje.setActive(true);
        bulletPersonaje.setVisible(true);
        this.scene.physics.moveTo(bulletPersonaje, this.scene.enemy.x, this.scene.enemy.y, 300);
      }
    }

  aumentoAtaqueP(aumento) {
    // Aumenta el atributo de ataque del personaje
    this.ataque += aumento;
  }
}
