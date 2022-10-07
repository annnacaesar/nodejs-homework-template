const express = require("express");

const ctrl = require('../../controllers/auth');

const { authenticate } = require("../../middlewares");

const authRouter = express.Router();

authRouter.post("/register", ctrl.register)

authRouter.post("/login",  ctrl.login)

authRouter.get("/current",  authenticate, ctrl.getCurrent)

authRouter.get("/logout",  authenticate, ctrl.logout)

authRouter.patch("/",  authenticate, ctrl.updateSubscription)


module.exports = authRouter;


