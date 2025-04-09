const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const customMiddleware = require('./middleware');

server.use(middlewares);
server.use(customMiddleware); // aquí montas el tuyo
server.use(router);
server.listen(3000, () => {
  console.log('🚀 JSON Server corriendo en http://localhost:3000');
});
