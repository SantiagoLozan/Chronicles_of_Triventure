export default class VirtualJoystickComponent {
  constructor(scene, jugador) {
    // La escena se pasa como argumento para poder usarla si es necesario
    this.scene = scene;
    this.jugador = jugador;

    // Carga el plugin del joystick virtual
    const url =
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js";
    this.scene.load.plugin("rexvirtualjoystickplugin", url, true);

    // Crea el joystick virtual
    this.joystick = this.scene.plugins
      .get("rexvirtualjoystickplugin")
      .add(this, {
        x: 200,
        y: 550,
        radius: 60,
        base: this.scene.add.circle(0, 0, 35, 0x888888),
        thumb: this.scene.add.circle(0, 0, 20, 0xcccccc),
        dir: 2,
        forceMin: 1,
        fixed: true,
        enable: true,
      })
      .on("update", this.handleJoystickUpdate, this);
    this.joystickCursors = this.joystick.createCursorKeys();
  }

  getJoystickCursors() {
    return this.joystickCursors;
  }

  handleJoystickUpdate() {
    // Obtén la dirección del joystick en grados
    const direction = this.joystick.angle;

    // Define la velocidad de movimiento del jugador
    const velocidad = 4; // Ajusta esto según tu juego

    // Mueve al jugador en la dirección del joystick
    if (direction !== null) {
      const dx = Math.cos(direction) * velocidad;
      const dy = Math.sin(direction) * velocidad;
      this.jugador.movimientoPersonaje(dx, dy);
    } else {
      // Si no se está moviendo el joystick, puedes detener al jugador
      this.jugador.movimientoPersonaje(0, 0);
    }
  }
}
