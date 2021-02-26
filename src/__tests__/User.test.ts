import request from 'supertest';
import app from '../app';
import createConnection from '../database';

describe('Users', () => {

    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    });

    it('Should save user with successfully', async () => {
        const response = await request(app)
            .post('/users')
            .send({name: 'José Maria', email: 'josemaria@gmail.com'});
        
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('name', 'José Maria');
    });

    it('Should not save user with existing email', async () => {
        const response = await request(app)
            .post('/users')
            .send({name: 'José Maria', email: 'josemaria@gmail.com'});
        
        expect(response.status).toBe(400);
    });
});