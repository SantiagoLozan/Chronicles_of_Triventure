import Phaser from "phaser";
import Jugador from "../componentes/jugador";
import VirtualJoystickComponent from "../componentes/joystick";
import NIVELES from "../niveles";
import Enemigo from "../componentes/enemigo";
import ENEMIGOS from "../enemigos";

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super("hello-world");
  }

  init(data) {
    this.nivel = data.nivel || 1;
    this.tiled = NIVELES[this.nivel - 1].tiled;
  }

  create() {
    const map = this.make.tilemap({ key: this.tiled });
    const capaFondo = map.addTilesetImage("conjuntoTiles", "grid", 16, 16);
    const capaPlataformas = map.addTilesetImage(
      "conjuntoTiles",
      "grid",
      16,
      16
    );
    const fondoLayer = map.createLayer("background", capaFondo, 0, 0);
    const plataformaLayer = map.createLayer(
      "interaccion",
      capaPlataformas,
      0,
      0
    );

    plataformaLayer.setCollisionByProperty({ colision: true });
    fondoLayer.setCollisionByProperty({ colision: false });

    this.crearAtaqueEnemigo();
    this.crearAtaquePersonaje()

    this.player = new Jugador(this, 250, 350, "player", 5, 1, 1);

    this.physics.add.collider(this.player, plataformaLayer, () => {});

    this.physics.add.existing(this.player);
    this.joystick = new VirtualJoystickComponent(this, this.player);

    this.enemy = new Enemigo(this, 170, 60, ENEMIGOS, 5, 1, 1);

    

    this.physics.add.existing(this.enemy);
    this.joystickCursors = this.joystick.joystickCursors;

    this.physics.world.setBounds(0, 0, 400, 600);

    this.physics.add.collider(
      this.player,
      this.enemy,
      this.muertePersonaje,
      null,
      this
    );

    this.physics.add.collider(
      this.bulletEnemigo,
      this.player,
      this.muertePersonaje,
      null,
      this
    );

    this.physics.add.collider(
      this.bulletPersonaje,
      this.enemy,
      this.muerteEnemigo,
      null,
      this
    );

    // launch UI scene
    this.scene.launch("ui");
  }

  update() {
    if (this.joystickCursors.up.isDown) {
      this.player.movimientoPersonaje(0, -30);
    } else if (this.joystickCursors.down.isDown) {
      this.player.movimientoPersonaje(0, 30);
    } else if (this.joystickCursors.left.isDown) {
      this.player.movimientoPersonaje(-30, 0);
    } else if (this.joystickCursors.right.isDown) {
      this.player.movimientoPersonaje(30, 0);
    } else {
      this.player.movimientoPersonaje(0, 0);
    }
  }

  crearAtaqueEnemigo() {
    this.bulletEnemigo = this.physics.add.group({
      inmovable: true,
      allowGravity: false,
    });

    this.bulletEnemigo.createMultiple({
      classType: Phaser.Physics.Arcade.Sprite,
      key: "bullet",
      frame: 0,
      visible: false,
      active: false,
      repeat: 50,
      setXY: {
        x: 400,
        y: 550,
      },
    });

    this.bulletEnemigo.children.entries.forEach((bullet) => {
      bullet.setCollideWorldBounds(true);
      bullet.body.onWorldBounds = true;
      bullet.body.world.on(
        "worldbounds",
        function (body) {
          if (body.gameObject === this) {
            this.setActive(false);
            this.setVisible(false);
          }
        },
        bullet
      );
    });
  }

  crearAtaquePersonaje() {
    this.bulletPersonaje = this.physics.add.group({
      inmovable: true,
      allowGravity: false,
    });

    this.bulletPersonaje.createMultiple({
      classType: Phaser.Physics.Arcade.Sprite,
      key: "bullet2",
      frame: 0,
      visible: false,
      active: false,
      repeat: 50,
      setXY: {
        x: 400,
        y: 450,
      },
    });

    this.bulletPersonaje.children.entries.forEach((bullet) => {
      bullet.setCollideWorldBounds(true);
      bullet.body.onWorldBounds = true;
      bullet.body.world.on(
        "worldbounds",
        function (body) {
          if (body.gameObject === this) {
            this.setActive(false);
            this.setVisible(false);
          }
        },
        bullet
      );
    });
  }

  muerteEnemigo(){
    this.scene.start("ganar");
  }

  muertePersonaje() {
    this.scene.start("perder");
  }
}
