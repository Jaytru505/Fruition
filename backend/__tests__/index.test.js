const request = require('supertest');
    const app = require('../index');

    describe('GET /api', () => {
      it('should return a welcome message', async () => {
        const response = await request(app).get('/api');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello from the backend!');
      });
    });
