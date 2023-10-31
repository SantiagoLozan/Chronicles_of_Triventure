import Phaser from "phaser";

import HelloWorldScene from "./scenes/HelloWorldScene";
import UI from "./scenes/UI";
import Menu from "./scenes/Menu";
import Informacion from "./scenes/Informacion";
import Preload from "./scenes/Preload";
import Ranking from "./scenes/Ranking";
import VirtualJoyStickPlugin from "./componentes/joystick";
import GameOver from "./scenes/GameOver";
import FirebasePlugin from "./plugins/FirebasePlugin";

const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 400,
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
      gravity: { y: 200 },
    },
  },
  scene: [Preload, HelloWorldScene, UI, Informacion, Menu, Ranking, GameOver],
  plugins: {
    global: [
      {
        key: "rexVirtualJoyStick",
        plugin: VirtualJoyStickPlugin,
        start: true,
      },
      {
        key: "FirebasePlugin",
        plugin: FirebasePlugin,
        start: true,
        mapping: "firebase",
      },
    ],
  },
};

export default new Phaser.Game(config);
