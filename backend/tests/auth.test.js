
import request from 'supertest';
import app from '../src/app.js'; // You'll need to export the app from index.js

describe('Auth Routes', () => {
  it('should fail login with invalid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: 'wrong@example.com', password: 'invalid' });
    expect(res.statusCode).toBe(400);
  });
});
