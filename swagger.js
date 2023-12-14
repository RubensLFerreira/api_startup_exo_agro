const swaggerAutogen = require('swagger-autogen')();

swaggerAutogen('./swagger-output.json', ['./src/server/routes/index.js']);