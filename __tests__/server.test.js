'use strict';

const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.app);

describe('Testing server', () => {

  it('Should send a 404 on a bad route', async () => {
    const response = await request.get('/wrong');

    expect(response.status).toEqual(404);
  });

  it('Should send a 404 on a bad method', async () => {
    const response = await request.post('/?name=bob');

    expect(response.status).toEqual(404);
  });

  it('Should send a 500 if no name is in the query string', async () => {
    const response = await request.get('/person');

    expect(response.status).toEqual(500);
  });

  it('Should send a 200 if the name is in the query string', async () => {
    const response = await request.get('/person?name=bob');

    expect(response.status).toEqual(200);
  });
  
  it('Should send a JSON object if a name is given in the query string', async () => {
    const response = await request.get('/person?name=fred');
    
    expect(response.body).toEqual({ name: 'fred' });
  });
});