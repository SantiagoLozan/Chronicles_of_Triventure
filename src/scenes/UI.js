import Phaser from "phaser";
import events from "./EventCenter";

// Manejador de eventos centralizados para comunicacion de componentes

// Importacion
// import events from './EventCenter'

// Emisor de mensaje de difusion
// Recibe el nombre del mensaje y los valores de parametro
// events.emit('health-changed', this.health)

// Receptor de mensaje, por ejemplo escena de UI
// Recibe el nombre del mensaje y una funcion callback a ejecutar
// events.on('health-changed', this.handleHealthChanged, this)

export default class UI extends Phaser.Scene {
  constructor() {
    super("ui");
  }

  create() {
    this.scoreCount = 0;
    // add text with count collider and date
    this.text = this.add.text(10, 10, `Puntos: ${this.scoreCount}`, {
      font: "16px Courier",
    });
    events.on("score-event", this.scoreEvent, this);
  }

  scoreEvent(data) {

    // update text
    this.scoreCount += 1;
    this.text.setText(`Puntos: ${this.scoreCount}`);
  }
}
