const request = require ('supertest');
const exress = require('express');
const app = require('../server.js');

describe('Testing GET /user endpoint response', function() {
    it('Response OK', function(done) {
      request(app)
        .get('/user')
        .expect('Content-Type', /html/)
        .expect(200, done);
    });
  });