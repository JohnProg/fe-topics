# node-js-with-express

Entrega el código y explica cómo manejas la seguridad y validación.

```
Para la seguridad se usa JWT, es una forma segura de autenticar usuarios y compartir información. Después del login, se firma y genera el JWT mediante el uso de una clave privada o secreta, luego se envía el token al frontend. El frontend envía el token en la cabecera de cada petición HTTP. El middleware en express se encarga de verificar la firma del JWT para asegurarse de que el token no haya sido alterado después de que fue firmado por el emisor en el login.

```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm start
```
