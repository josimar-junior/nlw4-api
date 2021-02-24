import { Router } from "express";

import UserController from "./controllers/UserController";

const router: Router = Router();

router.post('/users', UserController.create)

export default router;