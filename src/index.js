const server = require('./server/Server');

server.listen(process.env.PORT || 8080, () => {
  console.log(
    `\nServer running at port http://10.0.0.105:${process.env.PORT}\n`,
  );
});
