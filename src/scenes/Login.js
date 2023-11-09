import Phaser from "phaser";

export default class Login extends Phaser.Scene {
  constructor() {
    super("login");
  }

  preload() {
    this.load.image("background", "assets/capturas/1.png");
  }

  create() {
    this.add.image(200, 300, "background");
    // agregar un texto "Login" en la parte superior de la pantalla
    /*this.add
      .text(200, 100, "Login", {
        fontSize: 18,
      })
      .setOrigin(0.5);
    // agregar un texto Ingresar con Email y contraseña que al hacer clic me levante un popup js para ingresar los datos
    this.add
      .text(200, 200, "Ingresar con Email y contraseña", {
        fontSize: 18,
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", () => {
        const email = prompt("Email");
        const password = prompt("Password");
        this.firebase
          .signInWithEmail(email, password)
          .then(() => {
            this.scene.start("precarga");
          })
          .catch(() => {
            const crearUsuario = window.confirm(
              "Email no encontrado. \n ¿Desea crear un usuario?"
            );
            if (crearUsuario) {
              this.firebase
                .createUserWithEmail(email, password)
                .then(() => {
                  this.scene.start("precarga");
                })
                .catch((createUserError) => {
                  console.log(
                    "🚀 ~ file: Login.js:51 ~ .catch ~ error",
                    createUserError
                  );
                });
            }
          });
      });*/

    // Agregar un texto "Ingresas de forma Anonima" que al hacer clic me levante un popup js para ingresar los datos
    this.add
      .text(200, 250, "Ingresar de forma Anonima", {
        fontSize: "24px",
        fontFamily: "Arial",
        color: "black",
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", () => {
        this.firebase
          .signInAnonymously()
          .then(() => {
            this.scene.start("precarga");
          })
          .catch((error) => {
            console.log("🚀 ~ file: Login.js:74 ~ .catch ~ error", error);
          });
      });

    // agregar un texto centrado "Ingresar con Google" que al hacer clic me levante un popup js para ingresar los datos
    this.add
      .text(200, 350, "Ingresar con Google", {
        fontSize: "24px",
        fontFamily: "Arial",
        color: "black",
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", () => {
        this.firebase
          .signInWithGoogle()
          .then(() => {
            this.scene.start("precarga");
          })
          .catch((error) => {
            console.log("🚀 ~ file: Login.js:74 ~ .catch ~ error", error);
          });
      });

    // agregar un texto "Ingresar con GitHub" que al hacer clic me levante un popup js para ingresar los datos
    /*this.add
      .text(200, 500, "Ingresar con GitHub", {
        fontSize: 18,
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", () => {
        this.firebase
          .signInWithGithub()
          .then(() => {
            this.scene.start("precarga");
          })
          .catch((error) => {
            console.log("🚀 ~ file: Login.js:74 ~ .catch ~ error", error);
          });
      });*/
  }
}
