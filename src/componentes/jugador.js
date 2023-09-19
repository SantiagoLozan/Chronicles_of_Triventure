import Phaser from "phaser";

export default class Jugador extends Phaser.GameObjects.Sprite {
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
  }

  ataquePersonaje(enemigo) {
    // Realiza el ataque al enemigo
    enemigo.recibirAtaque(this.ataque);
  }

  movimientoPersonaje(dx, dy) {
    // Mueve al personaje en la dirección especificada (dx, dy)
    this.x += dx;
    this.y += dy;
    if (dx < 0) {
      this.anims.play("left", true);
    } else if (dx > 0) {
      this.anims.play("right", true);
    } else if (dy < 0) {
      this.anims.play("up", true);
    } else if (dy > 0) {
      this.anims.play("down", true);
    } else {
      // Si no se está moviendo, detén la animación
      this.anims.stop();
    }
  }

  muertePersonaje() {
    // Maneja la lógica de la muerte del personaje
    if (this.vida <= 0) {
      console.log("El personaje ha muerto");
      // Puedes agregar aquí más lógica relacionada con la muerte del personaje
    }
  }

  aumentoAtaqueP(aumento) {
    // Aumenta el atributo de ataque del personaje
    this.ataque += aumento;
  }
}
