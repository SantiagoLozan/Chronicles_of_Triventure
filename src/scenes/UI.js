import Phaser from "phaser";
import { getPhrase } from "../services/translations";
import keys from "../enums/keys";
import events from "./EventCenter";

// Manejador de eventos centralizados para comunicacion de componentes

//Paso 1:
// Importacion: Primero importamos el modulo events desde EventCenter.js (Contiene la instancia de los eventos de phaser)
//Lo importamos en todos los modulos que vamos a utilizar.
// import events from './EventCenter'

//Paso 2: Por ejemplo, en la escena de Juego...
// Emisor de mensaje de difusion
// Decirle el nombre del mensaje y los valores de parametro que deseamos emitir.
// events.emit('health-changed', this.health)

//Paso 3: Importar el modulo, y escuchar si recibe el mensaje:
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
    (this.tiempoText = this.add.text(32, 10, getPhrase(this.#tiempo))),
      {
        fontSize: "12px",
        fill: "#fff",
      };

    const user = this.firebase.getUser();
    this.displayName = user.displayName || user.uid;
    this.shortenedDisplayName =
      this.displayName.length > 13
        ? this.displayName.substring(0, 13) + "..."
        : this.displayName;

    this.add.text(230, 10, this.shortenedDisplayName, {
      fontSize: 16,
      fontFamily: "Arial",
      color: "white",
    });

    events.on("juego_terminado", () => {
      console.log("Evento juego_terminado recibido");

      const user = this.firebase.getUser();
      const time = this.timeInSeconds / 1000;
      console.log("tiempo a guardar", this.timeInSeconds);

      const userName = user.displayName || user.uid;
      this.firebase.saveGameData(user.uid, {
        name: userName,
        time: time,
        createdAt: new Date(),
      });
    });
    this.timeInSeconds = 0;
  }

  update(time, delta) {
    this.timeInSeconds += delta;
    this.tiempoText.setText(
      `${getPhrase(this.#tiempo)}: ${Math.floor(this.timeInSeconds / 1000)}`
    );
  }
}
