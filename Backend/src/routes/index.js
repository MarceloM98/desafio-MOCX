const { Router } = require("express");

const registerRouter = require("./register.routes");

const routes = Router();

routes.use("/register", registerRouter);

module.exports = routes;
