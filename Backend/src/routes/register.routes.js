const { Router } = require("express");

const RegisterController = require("../controllers/RegisterController");

const registerRoutes = Router();

const registerController = new RegisterController();

registerRoutes.post("/", registerController.create);
registerRoutes.delete("/", registerController.delete);
registerRoutes.put("/:id", registerController.update);
registerRoutes.get("/", registerController.getAll);

module.exports = registerRoutes;
