const express = require("express");

const ctrl = require('../../controllers/auth');

const { authenticate, upload } = require("../../middlewares");

const authRouter = express.Router();

authRouter.post("/register", upload.single('avatarURL'), ctrl.register)

authRouter.get("/verify/:verificationToken", ctrl.verify)

authRouter.post("/verify", ctrl.resendVerify)

authRouter.post("/login",  ctrl.login)

authRouter.get("/current",  authenticate, ctrl.getCurrent)

authRouter.get("/logout",  authenticate, ctrl.logout)

authRouter.patch("/",  authenticate, ctrl.updateSubscription)

authRouter.patch("/avatars",  authenticate, upload.single('avatarURL'),  ctrl.updateAvatar)


module.exports = authRouter;


