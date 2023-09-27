import Phaser from "phaser";
import Jugador from "../componentes/jugador";
import VirtualJoystickComponent from "../componentes/joystick";
import NIVELES from "../niveles";

// Manejador de eventos centralizados para comunicacion de componentes

// Importacion
// import events from './EventCenter'

// Emisor de mensaje de difusion
// Recibe el nombre del mensaje y los valores de parametro
// events.emit('health-changed', this.health)

// Receptor de mensaje, por ejemplo escena de UI
// Recibe el nombre del mensaje y una funcion callback a ejecutar
// events.on('health-changed', this.handleHealthChanged, this)

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super("hello-world");
  }

  init(data){
    this.nivel = data.nivel || 1
    this.tiled = NIVELES[this.nivel-1].tiled
  }

  create() {
    
    const map = this.make.tilemap({ key: this.tiled });
    const capaFondo = map.addTilesetImage("tierraMap", "imagen", 16, 16);
    const capaPlataformas = map.addTilesetImage("tierraMap", "imagen", 16, 16);
    const fondoLayer = map.createLayer("layerMap", capaFondo, 0, 0);
    const plataformaLayer = map.createLayer(
      "platformMap",
      capaPlataformas,
      0,
      0
    );
    plataformaLayer.setCollisionByProperty({ colision: true });
    fondoLayer.setCollisionByProperty({ colision: true });
    

    this.player = new Jugador(this, 250, 350, "player", 5, 1, 1);
    this.joystick = new VirtualJoystickComponent(this, this.player);
    this.joystickCursors = this.joystick.joystickCursors;
    this.physics.add.collider(this.player, plataformaLayer);

    
    this.physics.world.setBounds(0, 0, 400, 600);

    // launch UI scene
    this.scene.launch("ui");
    // this.botonAtras = this.add.image(75, 525, "botonAtras").setScale(0.2);
    // this.botonInfo = this.add.image(325, 525, "botonInfo").setScale(0.2);
    // this.botonMenu = this.add.image(150, 350, "botonMenu").setScale(0.6);
  }

  update() {
    if (this.joystickCursors.up.isDown) {
      this.player.movimientoPersonaje(0, -1);
    } else if (this.joystickCursors.down.isDown) {
      this.player.movimientoPersonaje(0, 1);
    } else if (this.joystickCursors.left.isDown) {
      this.player.movimientoPersonaje(-1, 0);
    } else if (this.joystickCursors.right.isDown) {
      this.player.movimientoPersonaje(1, 0);
    } else {
      this.player.movimientoPersonaje(0, 0);
    }
  }
}
