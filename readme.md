Videojuego desarrollado por Santiago Lozán en la cátedra Programación 2 de UnRaf. Un juego TopDown 2D basado en Archero y Mighty Doom. En el cual se debe eliminar a los enemigos para ganar. Está desarrollado en Phaser 3 con el empaquetador Parcel y está traducido en tres idiomas mediante la API Traduci-la y utiliza Firebase para guardar una base de datos con los nombres de los mejores jugadores y sus tiempos.

Para probar Chronicles of Triventure deberas teber [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/) y [Parcel](https://parceljs.org/) instalados.

Para instalar Node.js and `npm` with `nvm` debes hacer lo siguiente:

En una terminal de comandos (CMD, PowerShell, etc), debes escribir lo siguiente :

```
nvm install node

nvm use node
```

Luego instalar Parcel:

```
npm install -g parcel-bundler
```

Creamos una carpeta en el escritorio, la abrimos y escribimos `cmd` en el nombre.
Luego debemos clonar el repositorio dentro de la carpeta elegida. Para eso en la terminal escribimos:

```
git clone https://github.com/SantiagoLozan/Chronicles_of_Triventure.git
```

luego escribimos

```
cd Chronicles_of_Triventure
npm install
```

Por ultimo escribimos

```
npm run start
```

y el juego se verá en

http://localhost:8000/

Otra manera es entrar directamente en el link de NETLIFY https://chroniclesoftriventure.netlify.app
