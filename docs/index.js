const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Robo API",
      version: "1.0.0",
      description: "Robo API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: [`${__dirname}/swagger/*.js`],
};
const specs = swaggerJsDoc(options);
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
module.exports = router;
