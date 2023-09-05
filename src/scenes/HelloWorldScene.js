import Phaser from "phaser";

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

  create() {
    this.add.image(400, 300, "sky");
    this.add.text(70, 100, "Chronicles of Triventure");

    // launch UI scene
    this.scene.launch("ui");
    this.botonAtras = this.add.image(75, 525, "botonAtras").setScale(0.2);
    this.botonInfo = this.add.image(325, 525, "botonInfo").setScale(0.2);
    this.botonMenu = this.add.image(150, 350, "botonMenu").setScale(0.6);
    }
    
  }
