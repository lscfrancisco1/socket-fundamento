const { io } = require('../server');


io.on('connection', (client) => {
    console.log('usuario conectado');
    client.emit('enviarMensaje', {
        usuario: 'francisco',
        mensaje: 'Hola francisco'
    });




    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        /*  if (mensaje.usuario) {
              callback({
                  resp: 'TODO SALIO BIEN!'
              });
          } else {
              callback({
                  resp: 'TODO SALIO MAL!!!!'
              });
          }*/

    });
});