import express from 'express';
import request from 'supertest';

const app = express();

app.get('/test', (req, res) => {
  res.status(200).send('Hello, world!');
});

describe('GET /test', () => {
  it('should return Hello, world!', async () => {
    const response = await request(app).get('/test');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});
