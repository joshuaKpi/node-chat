module.exports = {
  port: 3000,
  mongoose: {
    uri: 'mongodb://localhost/node-chat',
    options: {
      server: {
        socketOptions: {
          keepAlive: 1
        }
      }
    }
  }
};
