/* eslint-disable no-undef */
const { StatusCodes } = require('http-status-codes');

const request = require('supertest');
const app = require('../../src/server/Server.js');

describe('Cliente - create', () => {
  it('Deve retornar o arquivo application/json', async () => {
    const response = await request(app).get('/clientes');
    expect(response.status).toBe(StatusCodes.OK);
    expect(response.type).toBe('application/json');
  });
});
