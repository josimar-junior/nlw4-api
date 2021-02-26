import request from 'supertest';
import app from '../app';
import createConnection from '../database';

describe('Surveys', () => {

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it('Should save survey with successfully', async () => {
        const response = await request(app)
            .post('/surveys')
            .send({title: 'New title', description: 'New description'});
        
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('title', 'New title');
    });

    it('Should list all surveys', async () => {
        await request(app)
            .post('/surveys')
            .send({title: 'New title', description: 'New description'});
        
        const response = await request(app)
            .get('/surveys');
        
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});