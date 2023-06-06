const request = require('supertest');
const urlApi = require('../../config/urls.json').api

describe('API validation test', () => {
  it('Must return objects with the property "Category: Authentication & Authorization"', async () => {
    const response = await request(urlApi).get('entries');
    
    expect(response.status).toBe(200); // Verifica se a chamada foi bem sucedida

    const apiEntries = response.body.entries;
    const authenticationEntries = apiEntries.filter(entry => entry.Category === 'Authentication & Authorization');
    
    expect(authenticationEntries.length).toBeGreaterThan(0);
    
    console.log('Found objects:');
    console.log(authenticationEntries);
  });
});
