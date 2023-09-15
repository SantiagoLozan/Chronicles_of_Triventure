import Phaser from "phaser";

import HelloWorldScene from "./scenes/HelloWorldScene";
import UI from "./scenes/UI";
import Menu from "./scenes/Menu";
import Informacion from "./scenes/Informacion";
import Preload from "./scenes/Preload";
import Ranking from "./scenes/Ranking";
import VirtualJoyStickPlugin from "./componentes/joystick";
import Jugador from "./componentes/jugador";

const config = {
  type: Phaser.AUTO,
  width: 350,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 350,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scene: [Preload, HelloWorldScene, UI, Informacion, Menu, Ranking],
  plugins: {
    global: [
      {
        key: "rexVirtualJoyStick",
        plugin: VirtualJoyStickPlugin,
        start: true,
      },
    ],
  },
};

export default new Phaser.Game(config);
