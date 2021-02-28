import { Router } from "express";

import UserController from "./controllers/UserController";
import SurveyController from "./controllers/SurveyController";
import SendMailController from './controllers/SendMailController';

const router: Router = Router();

router.post('/users', UserController.create);

router.post('/surveys', SurveyController.create);
router.get('/surveys', SurveyController.list);

router.post('/sendMail', SendMailController.execute);

export default router;