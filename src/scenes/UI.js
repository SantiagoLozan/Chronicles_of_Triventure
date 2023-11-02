import Phaser from "phaser";
import events from "./HelloWorldScene";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";

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
  #tiempo = keys.sceneGame.time;
  constructor() {
    super("ui");
  }

  timeInSeconds = 0;
  tiempoText;

  create() {
    (this.tiempoText = this.add.text(10, 10, getPhrase(this.#tiempo))),
      {
        fontSize: "12px",
        fill: "#fff",
      };

    const user = this.firebase.getUser();
    this.add.text(150, 10, user.displayName || user.uid);

    this.events.on("juego_terminado", () => {
      this.timeInSeconds = 0;
      console.log("Evento juego_terminado emitido");
    });
  }

  update(time, delta) {
    this.timeInSeconds += delta;
    this.tiempoText.setText(
      `${getPhrase(this.#tiempo)}: ${Math.floor(this.timeInSeconds / 1000)}`
    );
  }
}
