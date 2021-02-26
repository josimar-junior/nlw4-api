import { Router } from "express";

import UserController from "./controllers/UserController";
import SurveyController from "./controllers/SurveyController";

const router: Router = Router();

router.post('/users', UserController.create);

router.post('/surveys', SurveyController.create);
router.get('/surveys', SurveyController.list);

export default router;