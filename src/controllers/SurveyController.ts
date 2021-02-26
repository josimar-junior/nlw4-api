import { getCustomRepository } from 'typeorm';
import { Request, Response } from "express";
import SurveysRepository from '../repositories/SurveysRepository';

class SurveyController {

    async create(req: Request, res: Response) {
        const { title, description } = req.body;

        const surveysRepository = getCustomRepository(SurveysRepository);

        const survey = surveysRepository.create({title, description});

        await surveysRepository.save(survey);

        return res.status(201).json(survey);
    }

    async list(req: Request, res: Response) {
        const surveysRepository = getCustomRepository(SurveysRepository);
        const list = await surveysRepository.find();
        return res.json(list);
    }
}

export default new SurveyController();