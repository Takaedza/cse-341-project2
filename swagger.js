const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Customers Api',
        description: 'Customers'
    },
    host: 'localhost:3001',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
